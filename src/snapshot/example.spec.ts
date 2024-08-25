import { test } from '@playwright/test';
test.describe.configure({ mode: 'parallel' });

test('Screen Shot checkBox', async ({ page }) => {
  await page.goto('http://localhost:2937/codeView/ui/form/checkBox/');
  await page.screenshot({ path: "public/assets/img/codeView/ui/form/checkBox.png" });
});
test('Screen Shot inputText', async ({ page }) => {
  await page.goto('http://localhost:2937/codeView/ui/form/inputText/');
  await page.screenshot({ path: "public/assets/img/codeView/ui/form/inputText.png" });
});
