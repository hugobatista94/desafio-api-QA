describe("Usuários - Cenários Críticos", () => {
  it("Criar usuário com sucesso", () => {
    cy.api("POST", "/usuarios", {
      nome: "Usuário Novo QA",
      email: `usuario${Date.now()}@test.com`,
      password: "123456",
      administrador: "true",
    }).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body.message).to.eq("Cadastro realizado com sucesso")
    })
  })

  it("Criar usuário com email já existente", () => {
  cy.api({
    method: "POST",
    url: "/usuarios",
    failOnStatusCode: false, // Permite continuar mesmo com status 400
    body: {
      nome: "Usuário Duplicado",
      email: "teste@qa.com.br",
      password: "123456",
      administrador: "true"
    }
  }).then((response) => {
    expect(response.status).to.eq(400);
    expect(response.body.message).to.eq("Este email já está sendo usado");
  });
});

})
