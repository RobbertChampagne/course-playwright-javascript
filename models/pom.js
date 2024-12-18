import { test, expect } from '@playwright/test';

// Define a class
export class TodoList {
  // Constructor method that initializes the class object
  constructor(page) {
    this.page = page;
    this.inputNewItem = this.page.locator('input.new-todo');
    this.listItem = this.page.getByTestId('todo-title');
  }

  async navigate() {
    await this.page.goto('https://demo.playwright.dev/todomvc/');
  }

  async addItem(text) {
    await this.inputNewItem.fill(text);
    await this.inputNewItem.press('Enter');
  }

  async checkList(text) {
    await expect(this.listItem).toBeVisible();
    await expect(this.listItem).toContainText(text);
  }
}