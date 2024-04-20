import { faker } from "@faker-js/faker";

describe("user should register new customers", () => {
  before(() => {
    cy.authentication_bypass_api();
  });
  it("by form application successfully", () => {
    //API doesn't return country options
    cy.new_customer(
      faker.person.fullName(),
      faker.internet.email(),
      faker.company.name(),
      faker.number.int(100),
      faker.location.city(),
      faker.location.state(),
      faker.location.streetAddress(),
      // faker.location.country(),
      faker.location.zipCode(),
      faker.phone.number()
    );
  });
});
