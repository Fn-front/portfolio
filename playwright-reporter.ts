import * as fs from 'fs';
import {FullConfig, TestInfoError} from '@playwright/test';
import {FullResult, Reporter, Suite, TestCase, TestResult} from '@playwright/test/reporter';

interface Error {
  title: string;
  error: TestInfoError;
}

export default class GithubSummaryReporter implements Reporter {
  outputFile?: fs.WriteStream;
  errors: Error[];

  onBegin(config: FullConfig, suite: Suite) {
    const summaryFile = process.env.GITHUB_STEP_SUMMARY
    if (summaryFile) {
      this.outputFile = fs.createWriteStream(summaryFile, {flags: 'a'});
    }

    this.errors = [];
    this.writeOut("## Summary\n")
    this.writeOut("Case|Status|Duration")
    this.writeOut("----|------|--------")
  }

  onEnd(result: FullResult) {
    if (this.errors.length > 0) {
      let errorDetails = "\n## Errors\n"
      this.errors.forEach(({title, error}, attempt) => {
        errorDetails += `\n#### ${title} (#${attempt} attempt)`;
        errorDetails += "\n```diff\n";
        errorDetails += error.message!.replace(/\x1b\[[0-9;]*[a-zA-Z]/g, "")
        errorDetails += "\n```\n";
      })
      this.writeOut(errorDetails)
    }

    if (this.outputFile) {
      this.outputFile.end();
      this.outputFile.close();
    }
  }

  onTestEnd(test: TestCase, result: TestResult) {
    const title = test.titlePath().filter(v => v !== '').join(' > ');
    const status = result.status === 'passed' ? ':white_check_mark:' : ':x:';
    if (result.status !== 'passed') {
      result.errors.forEach(error => {
        this.errors.push({title, error})
      })
    }
    this.writeOut(`${title} (#${result.retry})|${status}|${result.duration}ms`)
  }

  private writeOut(value: string) {
    if (this.outputFile) {
      this.outputFile.write(value + "\n");
    } else {
      console.log(value)
    }
  }
}