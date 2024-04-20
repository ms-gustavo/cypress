import { faker } from "@faker-js/faker";

describe("admin should register new users", () => {
  before(() => {
    cy.authentication_bypass_api();
  });

  it("by form application successfully", () => {
    const password = faker.internet.password({ length: 10 });

    cy.new_user(
      faker.person.fullName(),
      faker.internet.email(),
      password,
      "ADMIN"
    );
  });
});
