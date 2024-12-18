// npx playwright test tests/examples/locators.spec.js --trace on --headed

import { test, expect } from '@playwright/test';

// Run with live server
const localUrl = "http://127.0.0.1:5500/tests/examples/test.html"

test('test_locating_elements', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const getStartedButton = page.getByRole('link', { name: 'Get started' });
  
  await getStartedButton.hover();
  await getStartedButton.click();
});

test('test_locate_by_role', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByText('Node.jsNode.jsPythonJava.NET').hover();
  
  // <a role="button" class="navbar__link">Python</a>
  await page.getByLabel('Main', { exact: true }).getByRole('link', { name: 'Python' }).click();
  await page.getByRole('banner').click();
  await page.getByRole('link', { name: 'Get started' }).click();
});

test('test_locate_by_label', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  
  // <a ... aria-label="GitHub repository"></a>
  await page.getByLabel('GitHub repository').click();
});

test('test_locate_by_placeholder', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  
  // <input ... placeholder="Search docs" >
  await page.getByLabel('Search').click();
  await page.getByPlaceholder('Search docs').click();
});

test('test_locate_by_text', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  
  // <span>Playwright</span>
  await page.getByText('Playwright', { exact: true }).nth(1).click();
});

test('test_locate_by_alt_text', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  
  // <img src="img/logos/Browsers.png" alt="Browsers (Chromium, Firefox, WebKit)">
  await expect(page.getByAltText('Browsers (Chromium, Firefox,')).toBeVisible();
});

async function closeDropdown(page) {
  await page.locator('header').click();
}

test('test_locate_by_css', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  
  // <div class="navbar__item dropdown dropdown--hoverable">...</div>
  
  // Using Class Attribute
  await page.locator('.navbar__item.dropdown').click();
  await closeDropdown(page);
  
  // Using Attribute Selector
  await page.locator("[class*='navbar__item'][class*='dropdown']").click();
  await closeDropdown(page);
  
  // Using Combination of Tag and Class
  await page.locator('div.navbar__item.dropdown').click();
  await closeDropdown(page);
  
  // Using XPath
  await page.locator("//div[contains(@class, 'navbar__item') and contains(@class, 'dropdown')]").click();
  await closeDropdown(page);
});

test('test_filter_by_text', async ({ page }) => {
  await page.goto('https://playwright.dev/python/docs/locators');
  /*
  <ul class="table-of-contents table-of-contents__left-border">
      <li><a class="table-of-contents__link toc-highlight">Locating elements</a>
          <ul>
              <li><a class="table-of-contents__link toc-highlight">Locate by role</a></li>
              <li><a class="table-of-contents__link toc-highlight">Locate by text</a></li>
          </ul>
      </li>
  </ul>
  */
  
  // <li><a>Locating elements</a></li>
  await page.getByRole('listitem').filter({ hasText: 'Locating elements' }).click();
});

test('test_filter_by_not_text', async ({ page }) => {
  await page.goto('https://playwright.dev/python/docs/locators');
  /*
  <ul class="table-of-contents table-of-contents__left-border">
      <li><a class="table-of-contents__link toc-highlight">Locating elements</a>
          <ul>
              <li><a class="table-of-contents__link toc-highlight">Locate by role</a></li>
              <li><a class="table-of-contents__link toc-highlight">Locate by text</a></li>
          </ul>
      </li>
  </ul>
  */
  
  // <li><a>Locating elements</a></li>
  console.log(`Count: ${await page.getByRole('listitem').filter({ hasNotText: 'Locating elements' }).count()}`);
  // Count: 122
});

test('test_filter_by_child', async ({ page }) => {
  await page.goto('https://playwright.dev/python/docs/locators');
  /*
   <ul>
     <li>
         <a>Locating elements</a>
     </li>
   </ul>
  */
  await page.getByRole('list').filter({ has: page.getByRole('listitem').filter({ hasText: 'Locating elements' }) }).click();
});

test('test_filter_by_child_has_only_one', async ({ page }) => {
  await page.goto('https://playwright.dev/python/docs/locators');
  /*
   <ul>
     <li>
         <a>Locating elements</a>
     </li>
   </ul>
  */
  await expect(page.getByRole('list').filter({ has: page.getByRole('listitem').filter({ hasText: 'Locating elements' }) })).toHaveCount(1);
});

test('test_filter_by_has_not_child', async ({ page }) => {
  await page.goto('https://playwright.dev/python/docs/locators');
  /*
   <ul>
     <li>
         <a>Locating elements</a>
     </li>
   </ul>
  */
  console.log(`Count: ${await page.getByRole('list').filter({ hasNot: page.getByRole('listitem').filter({ hasText: 'Locating elements' }) }).count()}`);
  // Count: 23
});

test('test_chaining_filters', async ({ page }) => {
  await page.goto(localUrl);
  const rowLocator = page.getByRole('listitem');
  await rowLocator.filter({ hasText: 'Mary' }).filter({ has: page.getByRole('button', { name: 'Say goodbye' }) }).click();
});

test('test_trigger_action', async ({ page }) => {
  await page.goto(localUrl);
  const listitems = page.locator('.fruit');
  const count = await listitems.count();
  for (let i = 0; i < count; i++) {
    console.log(await listitems.nth(i).textContent());
  }
});