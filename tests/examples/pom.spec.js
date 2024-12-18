
// npx playwright test tests/examples/pom.spec.js --trace on --headed
import { test, expect } from '@playwright/test';
import { TodoList } from '../../models/pom';

test('test_pom', async ({ page }) => {
  const item = 'Buy milk';
  const todoList = new TodoList(page);
  
  // Navigate to the TodoMVC page
  await todoList.navigate();
  
  // Add a new item to the todo list
  await todoList.addItem(item);
  
  // Verify that the new item is added to the list
  await expect(page.getByTestId('todo-title')).toBeVisible();
  await expect(page.getByTestId('todo-title')).toContainText(item);
  
  // OR
  
  await todoList.checkList(item);
});
