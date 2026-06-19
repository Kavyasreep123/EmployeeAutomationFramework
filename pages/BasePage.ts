import { Locator, Page } from '@playwright/test';

export class BasePage {

  constructor(protected page: Page) {}

  async click(locator: Locator) {

    await locator.waitFor();

    await locator.click();

  }

  async fill(locator: Locator, value: string) {

    await locator.fill(value);

  }

  async waitForPageLoad() {

    await this.page.waitForLoadState('networkidle');

  }

}