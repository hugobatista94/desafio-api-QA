describe("Login - Cenários Críticos", () => {
  it("Login com sucesso", () => {
    cy.api({
      method: "POST",
      url: "/login",
      body: {
        email: "fulano@qa.com",
        password: "teste"
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eq("Login realizado com sucesso");
      expect(response.body.authorization).to.exist;
    });
  });

  it("Login com senha inválida", () => {
    cy.api({
      method: "POST",
      url: "/login",
      failOnStatusCode: false,
      body: {
        email: "fulano@qa.com",
        password: "senhaErrada"
      }
    }).then((response) => {
      expect(response.status).to.eq(401);
      expect(response.body.message).to.eq("Email e/ou senha inválidos");
    });
  });
});
