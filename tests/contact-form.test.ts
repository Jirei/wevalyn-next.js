import prisma from "@/prisma/client";
import { test, expect } from "@playwright/test";
import type { Page } from "@playwright/test";

test.describe("Contact Form Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/contact");
  });

  test.beforeAll(async () => {
    await prisma.message.deleteMany();
  });

  test("page has correct title", async ({ page }) => {
    await expect(page).toHaveTitle("Contact - Wevalyn");
  });

  test("form has correct title", async ({ page }) => {
    const formTitleLocator = form(page).getByRole("heading", {
      name: "Contact Form",
    });
    await expect(formTitleLocator).toBeVisible();
    await expect(formTitleLocator).toHaveText("Contact Form");
  });

  test("correct feedback for form with wrong data", async ({ page }) => {
    const firstName = "Test first name";
    const lastName = "Test last name";
    const email = "testdoe@email.com";
    const messageContent = "test".repeat(1);
    await firstNameInput(page).fill(firstName);
    await lastNameInput(page).fill(lastName);
    await emailInput(page).fill(email);
    await messageTextArea(page).fill(messageContent);
    await formSubmitButton(page).click();
    await expect(form(page)).toHaveText(
      /Message must have at least 250 characters. There are currently 4 characters./,
    );
    await firstNameInput(page).fill("");
    await expect(form(page)).toHaveText(
      /First Name must have at least one character./,
    );
    await emailInput(page).fill("");
    await expect(form(page)).toHaveText(/Email is invalid./);
  });

  test.describe("form sending & checking saved data", () => {
    test.describe.configure({ mode: "serial" });
    const firstName = "Test first name";
    const lastName = "Test last name";
    const email = "testdoe@email.com";
    const messageContent = "test".repeat(63);
    test("form sends message correctly", async ({ page }) => {
      await firstNameInput(page).fill(firstName);
      await lastNameInput(page).fill(lastName);
      await emailInput(page).fill(email);
      await messageTextArea(page).fill(messageContent);
      await formSubmitButton(page).click();
      await expect(formFeedbackMessage(page)).toHaveText(
        "The message was sent successfully. Thank you for your message.",
      );
    });
    test("form data is saved correctly in the db", async () => {
      expect(await prisma.message.count()).toBe(1);
      const messageInDB = await prisma.message.findFirst();
      expect(messageInDB?.senderFirstName).toBe(firstName);
      expect(messageInDB?.senderLastName).toBe(lastName);
      expect(messageInDB?.senderEmail).toBe(email);
      expect(messageInDB?.message).toBe(messageContent);
    });
  });
});

function form(page: Page) {
  // Use test id because there was a bug where the form couldn't be find by role
  return page.getByTestId("form");
}

function firstNameInput(page: Page) {
  return form(page).getByLabel("First name *");
}

function lastNameInput(page: Page) {
  return page.getByLabel("Last name (not required)");
}
function emailInput(page: Page) {
  return page.getByLabel("Email *");
}
function messageTextArea(page: Page) {
  return page.getByLabel("Message *");
}

function formSubmitButton(page: Page) {
  return form(page).getByRole("button", { name: /submit/i });
}

function formFeedbackMessage(page: Page) {
  return page.getByTestId("form-feedback-message");
}
