import { test } from '@playwright/test';
test.describe.configure({ mode: 'parallel' });

test('Screen Shot checkBox', async ({ page }) => {
  await page.goto('http://localhost:2937/codeView/ui/form/checkBox/');
  await page.screenshot({ path: "public/assets/img/ui/checkBox.png" });
});
