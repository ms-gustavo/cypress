describe("users should login", () => {
  let data;

  before(() => {
    cy.fixture("login").then((tData) => {
      data = tData;
    });
  });

  it("by api application successfully", () => {
    cy.login_api(data.username, data.password);
  });
});
