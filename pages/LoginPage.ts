import { Page } from '@playwright/test';

import qa from '../config/qa.json';

export class LoginPage {

  constructor(private page: Page) {}

  async navigate() {

    await this.page.goto(

      qa.url

    );

  }

  async login(

    username: string,

    password: string

  ) {

    await this.page

      .getByPlaceholder('Username')

      .fill(username);

    await this.page

      .getByPlaceholder('Password')

      .fill(password);

    await this.page

      .getByRole(

        'button',

        { name: 'Login' }

      )

      .click();

  }

}