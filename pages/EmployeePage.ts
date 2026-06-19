import { Page } from '@playwright/test';

import { BasePage } from './BasePage';

export class EmployeePage extends BasePage {

  constructor(page: Page) {

    super(page);

  }

  async openPIM() {

    await this.click(

      this.page.getByRole(

        'link',

        {

          name: 'PIM'

        }

      )

    );

  }

  async addEmployee(

    firstName: string,

    middleName: string,

    lastName: string

  ) {

    await this.page.getByRole(

      'button',

      {

        name: 'Add'

      }

    ).click();

    await this.page.locator(

      'input[name="firstName"]'

    ).fill(firstName);

    await this.page.locator(

      'input[name="middleName"]'

    ).fill(middleName);

    await this.page.locator(

      'input[name="lastName"]'

    ).fill(lastName);

    await this.page.getByRole(

      'button',

      {

        name: 'Save'

      }

    ).click();

  }

  async searchEmployee(

    employeeName: string

  ) {

    await this.openPIM();

    await this.page

      .getByPlaceholder(

        'Type for hints...'

      )

      .first()

      .fill(employeeName);

    await this.page.getByRole(

      'button',

      {

        name: 'Search'

      }

    ).click();

  }

}