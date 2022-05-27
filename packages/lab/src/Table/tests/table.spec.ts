// eslint-disable-next-line import/no-extraneous-dependencies
import { test, expect } from "@playwright/test";
// eslint-disable-next-line import/no-relative-packages
import { testingThemes } from "../../../../core/config/playwright-utils";

testingThemes.forEach(async (theme: string) => {
  test.describe(`Table ${theme}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(
        `/iframe.html?id=lab-table--list-row&viewMode=story&eyes-storybook=true&eyes-variation=theme:${theme}`
      );
    });

    test(`List Row: check row number and column number`, async ({ page }) => {
      const NUM_ROWS = 5;
      const NUM_COLS = 9;

      await expect(page.locator(`div.HvTableContainer-root`)).toBeVisible();
      const rows = await page.locator(".HvTableRow-root");
      expect(rows).toHaveCount(NUM_ROWS);
      const count = await rows.count();
      for (let i = 1; i < count; i += 1) {
        const cells = rows.nth(i).locator("td");
        expect(cells).toHaveCount(NUM_COLS);
      }
    });

    test(`List Row: check focus checkbox`, async ({ page }) => {
      const checks = await page.locator("input[type=checkbox]");
      const count = await checks.count();
      expect(checks).toHaveCount(4);

      expect(await checks.nth(0).isChecked());
      for (let i = 1; i < count; i += 1) {
        // eslint-disable-next-line no-await-in-loop
        expect(await checks.nth(i).isChecked()).toBeFalsy();
      }

      const table = await page.locator(".HvTable-root");
      await table.press(" ");
      await table.press("ArrowDown");
      await table.press("ArrowDown");
      await table.press("ArrowDown");
      await table.press(" ");

      for (let i = 0; i < count - 1; i += 1) {
        // eslint-disable-next-line no-await-in-loop
        expect(await checks.nth(i).isChecked()).toBeFalsy();
      }
      expect(await checks.nth(count - 1).isChecked());
    });

    test(`List Row: check focus actions`, async ({ page }) => {
      expect(await page.locator(".HvPanel-root")).toBeHidden();

      const table = await page.locator(".HvTable-root");
      await table.press("Tab");
      await table.press("Tab");
      await table.press("Tab");
      await table.press("Enter");

      expect(await page.locator(".HvPanel-root")).toBeVisible();
    });
  });
});
