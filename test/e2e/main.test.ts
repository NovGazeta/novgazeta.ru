import { test, type Page } from "@playwright/test";
import { config } from "dotenv";

const DEBUG = process.env.NODE_ENV !== "production";
if (DEBUG) config({ quiet: true });

const { PUBLIC_APP_URL } = process.env;
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

test.describe.configure({ mode: "serial" });

let page: Page;

test.beforeAll(async ({ browser }) => {
  console.log("PUBLIC_APP_URL:", PUBLIC_APP_URL);
  page = await browser.newPage();
});

test.afterAll(async () => {
  if (page) await page.close();
  console.log("Done with e2e tests");
});

test("page check", async () => {
  test.slow();
  await page.goto(PUBLIC_APP_URL, { waitUntil: "domcontentloaded" });
  const title = await page.title();
  console.log("page title:", title);
});
