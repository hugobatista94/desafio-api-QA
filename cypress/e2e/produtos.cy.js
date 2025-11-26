// cypress/e2e/produtos.cy.js
describe.skip("Produtos - Cenários Críticos", () => {
  let token;
  const admin = {
    nome: "Admin QA",
    email: "admin@qa.com",
    password: "123456",
    administrador: "true",
  };

  before(() => {
    // 1) Tenta criar o usuário admin — se já existir, não falha a suite
    cy.api({
      method: "POST",
      url: "/usuarios",
      failOnStatusCode: false, // não quebrar se já existir
      body: admin,
    }).then((resCreate) => {
      // opcional: log para depuração
      cy.log("create user status: " + resCreate.status);

      // 2) Faz login para obter token (deve acontecer APÓS tentar criar o usuário)
      cy.api({
        method: "POST",
        url: "/login",
        failOnStatusCode: false, // evita falha automática para podermos inspecionar
        body: {
          email: admin.email,
          password: admin.password,
        },
      }).then((resLogin) => {
        cy.log("login status: " + resLogin.status);
        // Verifica se login foi bem-sucedido
        if (resLogin.status !== 200) {
          // mostra resposta completa para ajudar no debug
          // e lança erro com mensagem clara para interromper a suite
          throw new Error(
            `Login falhou no before(): status ${resLogin.status} - mensagem: ${JSON.stringify(
              resLogin.body
            )}`
          );
        }

        // extrai token (Serverest retorna authorization no body)
        token = resLogin.body.authorization;
        if (!token) {
          throw new Error(
            `Token não encontrado na resposta de login: ${JSON.stringify(
              resLogin.body
            )}`
          );
        }
        cy.log("token recebido");
      });
    });
  });

  it.skip("Criar produto com sucesso", () => {
    // safety check: token definido
    if (!token) {
      throw new Error("Token indefinido no it() - verifique o before()");
    }

    cy.api({
      method: "POST",
      url: "/produtos",
      headers: { authorization: token }, // header esperado pela API
      body: {
        nome: `Produto QA ${Date.now()}`,
        preco: 100,
        descricao: "produto de teste",
        quantidade: 2,
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.message).to.eq("Cadastro realizado com sucesso");
    });
  });


  it.skip("Não deve permitir cadastro de produto duplicado", () => {
  const nomeDuplicado = `Produto QA ${Date.now()}`

  // 1º cadastro - sucesso
  cy.api({
    method: "POST",
    url: "/produtos",
    headers: { authorization: token },
    body: {
      nome: nomeDuplicado,
      preco: 100,
      descricao: "primeiro cadastro",
      quantidade: 5,
    },
  }).then((response) => {
    expect(response.status).to.eq(201)
    expect(response.body.message).to.eq("Cadastro realizado com sucesso")
  })

  // 2º cadastro - erro esperado
  cy.api({
    method: "POST",
    url: "/produtos",
    failOnStatusCode: false,
    headers: { authorization: token },
    body: {
      nome: nomeDuplicado,
      preco: 100,
      descricao: "segundo cadastro",
      quantidade: 5,
    },
  }).then((response) => {
    expect(response.status).to.eq(400)
    expect(response.body.message).to.eq("Já existe produto com esse nome")
  })
})


});
