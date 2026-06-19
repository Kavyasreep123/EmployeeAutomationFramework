import { test } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';

import { EmployeePage } from '../pages/EmployeePage';

import employeeData from '../fixtures/employeeData.json';

import { credentials } from '../constants/credentials';

import { Logger } from '../logger/Logger';

test('Employee business flow', async ({ page }) => {

  const login = new LoginPage(page);

  const employee = new EmployeePage(page);

  Logger.info('Navigating to application');

  await login.navigate();

  Logger.info('Logging into application');

  await login.login(

    credentials.username,

    credentials.password

  );

  Logger.info('Opening PIM module');

  await employee.openPIM();

  Logger.info('Creating employee');

  await employee.addEmployee(

    employeeData.firstName,

    employeeData.middleName,

    employeeData.lastName

  );

  Logger.info('Searching employee');

  await employee.searchEmployee(

    employeeData.firstName

  );

  Logger.info('Business flow completed');

});