import { expect, Page } from '@playwright/test';

export class DashboardPage {

  constructor(private page: Page) {}

  async verifyDashboard() {

    await expect(
      this.page
    ).toHaveURL(/dashboard/);

  }

}