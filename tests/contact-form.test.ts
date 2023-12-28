import { test, expect } from '@playwright/test';


test.describe("Contact Form Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/contact');
  });

  test('page has correct title', async ({ page }) => {
    await expect(page).toHaveTitle("Contact - Wevalyn");
  });

  test('form has correct title', async ({ page }) => {
    // Use test id because there was a bug where the form couldn't be find by role
    const formLocator = page.getByTestId('form');
    const formTitleLocator = formLocator.getByRole("heading",{name:"Contact Form"});
    await expect(formTitleLocator).toBeVisible();
    await expect(formTitleLocator).toHaveText("Contact Form");
  });

});