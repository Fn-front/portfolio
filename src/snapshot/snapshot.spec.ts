import { test } from '@playwright/test';
test.describe.configure({ mode: 'parallel' });

const x = 200
const y = 80
const width = 1920
const height = 1080

test('Screen Shot input checkBox', async ({ page }) => {
  await page.goto('http://localhost:2937/code/codeView/ui/form/checkBox/');
  await page.screenshot({ path: 'public/assets/img/code/codeView/ui/form/checkBox.png', clip: { x: x, y: y, width: width, height: height } });
});
test('Screen Shot input inputText', async ({ page }) => {
  await page.goto('http://localhost:2937/code/codeView/ui/form/inputText/');
  await page.screenshot({ path: 'public/assets/img/code/codeView/ui/form/inputText.png', clip: { x: x, y: y, width: width, height: height } });
});
test('Screen Shot input radio', async ({ page }) => {
  await page.goto('http://localhost:2937/code/codeView/ui/form/radio/');
  await page.screenshot({ path: 'public/assets/img/code/codeView/ui/form/radio.png', clip: { x: x, y: y, width: width, height: height } });
});
test('Screen Shot layout cardList', async ({ page }) => {
  await page.goto('http://localhost:2937/code/codeView/ui/layout/cardList/');
  await page.screenshot({ path: 'public/assets/img/code/codeView/ui/layout/cardList.png', clip: { x: x, y: y, width: width, height: height } });
});
test('Screen Shot useCase startingStyle', async ({ page }) => {
  await page.goto('http://localhost:2937/code/codeView/useCase/startingStyle/');
  await page.screenshot({ path: 'public/assets/img/code/codeView/useCase/startingStyle.png', clip: { x: x, y: y, width: width, height: height } });
});
