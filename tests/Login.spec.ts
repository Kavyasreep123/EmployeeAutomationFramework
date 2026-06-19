import { test } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';

import { DashboardPage } from '../pages/DashboardPage';

test('Login test', async ({ page }) => {

  const login = new LoginPage(page);

  const dashboard = new DashboardPage(page);

  await login.navigate();

  await login.login(
    'Admin',
    'admin123'
  );

  await dashboard.verifyDashboard();

});