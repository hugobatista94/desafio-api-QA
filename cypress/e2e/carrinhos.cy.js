describe("Carrinhos - Cenários Críticos", () => {
  let token

  before(() => {
    cy.token().then((t) => {
      token = t
    })
  })

  it.skip("Criar carrinho com sucesso", () => {
    cy.api({
      method: "POST",
      url: "/carrinhos",
      headers: { authorization: token },
      body: {
        produtos: [{ idProduto: "BeeJh5lz3k6kSIzA", quantidade: 1 }],
      },
    }).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body.message).to.eq("Cadastro realizado com sucesso")
    })
  })

  it.skip("Cancelar carrinho", () => {
  cy.api({
    method: "DELETE",
    url: "/carrinhos/cancelar-compra",
    headers: { authorization: token },
  }).then((response) => {
    expect(response.status).to.eq(200)
    expect(response.body.message).to.eq(
      "Registro excluído com sucesso. Estoque dos produtos reabastecido"
    )
  })
})

})
