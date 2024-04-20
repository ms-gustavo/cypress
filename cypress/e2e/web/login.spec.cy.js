describe("users should login", () => {
  let data;

  before(() => {
    cy.fixture("login").then((tData) => {
      data = tData;
    });
  });
  it("by web application successfully", () => {
    cy.login(data.username, data.password);
  });
});
