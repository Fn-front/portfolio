import { test } from '@playwright/test';

test('Screen Shots', async ({ page }) => {
  await page.goto('http://localhost:2937/codeView/ui/form/checkBox/');
  await page.screenshot({ path: "public/assets/img/ui/checkBox.png" });

});
