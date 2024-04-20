module.exports = {
  webUrl: "https://curso-automacao-web-app.herokuapp.com",
  apiUrl: "https://curso-automacao-user-service.herokuapp.com",
  sharedSelectors: {
    submit: "#submit",
    panel_success: "//div[@id='alert-success']",
    panel_error: "//div[@id='alert-error']",
  },

  loginSelectors: {
    usernameInput: "#yourUsername",
    passwordInput: "#yourPassword",
    loginButton: "#logginButton",
  },
  createNewUserSelectors: {
    name: "#userName1",
    username: "#userName2",
    password: "#userPassword1",
    passwordConfirmation: "#userPasswordConfirmation",
    roles: "#userRoles",
  },
  newCustomersSelectors: {
    name: "//input[@id='customerName']",
    email: "//input[@id='customerEmail']",
    company: "//input[@id='customerCompany']",
    salary: "//input[@id='customerSalary']",
    city: "//input[@id='customerCity']",
    state: "//input[@id='customerState']",
    address: "//input[@id='customerAddress']",
    country: "//select[@id='customerCountry']",
    zipCode: "//input[@id='customerZipCode']",
    phoneNumber: "//input[@id='customerPhoneNumber']",
  },
};
