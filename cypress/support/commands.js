Cypress.Commands.add("token", () => {
  cy.request({
    method: "POST",
    url: "/login",
    failOnStatusCode: false, // <-- AQUI é o lugar certo
    body: {
      email: "admin@qa.com",
      password: "123456"
    }
  }).then((response) => {
    return response.body.authorization;
  });
});



