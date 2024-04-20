// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import utils from "./utils";
require("cypress-xpath");

Cypress.Commands.add("login", (username, password) => {
  cy.visit(`${utils.webUrl}/login`);
  cy.get(utils.loginSelectors.usernameInput).type(username);
  cy.get(utils.loginSelectors.passwordInput).type(password);
  cy.get(utils.loginSelectors.loginButton).click();
  cy.contains("h1", "Dashboard");
});

Cypress.Commands.add("new_user", (name, username, password, roles) => {
  setAuthCookies();

  cy.visit(`${utils.webUrl}/users-edit`, {
    onBeforeLoad(win) {
      setAuthSessionStorage(win);
    },
  });
  cy.get(utils.createNewUserSelectors.name).click({ force: true }).type(name);
  cy.get(utils.createNewUserSelectors.username).type(username);
  cy.get(utils.createNewUserSelectors.password).type(password);
  cy.get(utils.createNewUserSelectors.passwordConfirmation).type(password);
  cy.get(utils.createNewUserSelectors.roles).type(roles);
  cy.get(utils.sharedSelectors.submit).click({ force: true });
  cy.xpath(utils.sharedSelectors.panel_success).should("be.visible");
});

function setAuthCookies() {
  cy.setCookie("user.id", String(Cypress.env("auth.user.id")));
  cy.setCookie("token", String(Cypress.env("auth.token").replace(" ", "%20")));
  cy.request(`${utils.webUrl}/authorize`);
}

function setAuthSessionStorage(win) {
  win.sessionStorage.setItem("user.id", Cypress.env("auth.user.id"));
  win.sessionStorage.setItem("token", Cypress.env("auth.token"));
}

Cypress.Commands.add(
  "new_customer",
  (
    name,
    email,
    company,
    salary,
    city,
    state,
    address,
    // country,
    zipCode,
    phoneNumber
  ) => {
    //API doesn't return country options

    setAuthCookies();

    cy.visit(`${utils.webUrl}/customers-edit`, {
      onBeforeLoad(win) {
        setAuthSessionStorage(win);
      },
    });
    cy.xpath(utils.newCustomersSelectors.name)
      .click({ force: true })
      .type(name);
    cy.xpath(utils.newCustomersSelectors.email)
      .click({ force: true })
      .type(email);
    cy.xpath(utils.newCustomersSelectors.company)
      .click({ force: true })
      .type(company);
    cy.xpath(utils.newCustomersSelectors.salary)
      .click({ force: true })
      .type(salary);
    cy.xpath(utils.newCustomersSelectors.city)
      .click({ force: true })
      .type(city);
    cy.xpath(utils.newCustomersSelectors.state)
      .click({ force: true })
      .type(state);
    cy.xpath(utils.newCustomersSelectors.address)
      .click({ force: true })
      .type(address);
    // cy.xpath(utils.newCustomersSelectors.country).select(country);
    cy.xpath(utils.newCustomersSelectors.zipCode)
      .click({ force: true })
      .type(zipCode);
    cy.xpath(utils.newCustomersSelectors.phoneNumber)
      .click({ force: true })
      .type(phoneNumber);
    cy.get(utils.sharedSelectors.submit).click({ force: true });
    cy.xpath(utils.sharedSelectors.panel_error).should("be.visible");
  }
);
