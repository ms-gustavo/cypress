module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      hideCredentials: true,
      hideCredentialsOptions: {
        body: ["username", "password"],
      },
    },
  },
};
