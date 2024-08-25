import { test, expect } from '@playwright/test';

test('codeView link check all', async ({ page }) => {
  await page.goto('http://localhost:2937/codeView');

  await page.getByRole('link', { name: 'codeView/ui/form/checkBox/' }).click()
  await expect(page.getByRole('heading', { name: 'チェックボックス', exact: true })).toBeVisible();


  await page.goto('http://localhost:2937/codeView');
  await page.getByRole('link', { name: 'codeView/ui/form/inputText/' }).click()
  await expect(page.getByRole('heading', { name: 'inputテキスト', exact: true })).toBeVisible();


  await page.goto('http://localhost:2937/codeView');
  await page.getByRole('link', { name: 'codeView/ui/form/radio/' }).click()
  await expect(page.getByRole('heading', { name: 'radio', exact: true })).toBeVisible();


  await page.goto('http://localhost:2937/codeView');
  await page.getByRole('link', { name: 'codeView/ui/layout/cardList/' }).click()
  await expect(page.getByRole('heading', { name: 'カード', exact: true })).toBeVisible();


  await page.goto('http://localhost:2937/codeView');
  await page.getByRole('link', { name: 'codeView/useCase/startingStyle/' }).click()
  await expect(page.getByRole('heading', { name: '@starting-style', exact: true })).toBeVisible();

});
