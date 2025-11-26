# 📌 Desafio API QA – Automação de Testes Serverest

Projeto de automação de testes de API utilizando **Cypress**, desenvolvidos como parte do desafio técnico de QA.

---

## 🚀 Tecnologias Utilizadas

* **Node.js**
* **Cypress** (testes de API e2e)
* **REST API Serverest** — [https://serverest.dev](https://serverest.dev)

---

## 📋 Pré-requisitos para executar o projeto

| Requisito | Versão mínima |
| --------- | ------------- |
| Node.js   | 18.12.1       |
| npm       | 8.19.2        |
| Git       | Configurado   |

---

## 🧠 Instalação e execução

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/hugobatista94/desafio-api-QA.git
cd desafio-api-QA
```

### 2️⃣ Instale as dependências

```bash
npm install
```

### 3️⃣ Verifique o Cypress

```bash
npx cypress verify
```

### 4️⃣ Executar os testes com interface gráfica

```bash
npx cypress open
# OU	npm run cy:open
```

### 5️⃣ Executar testes em modo headless

```bash
npm run cy:run
```

---

# 📍 Levantamento dos Cenários (Critérios técnicos selecionados)

## 🔐 Login

* **Login com sucesso**
* **Login com senha inválida**

## 👤 Usuários

* **Cadastrar usuário com sucesso**
* **Cadastrar usuário já existente**


## 📦 Produtos

* **Cadastrar produto com sucesso**
* **Cadastrar produto duplicado**


## 🛒 Carrinhos

* **Criar carrinho com produto válido**
* **Cancelar compra e validar retorno**

> Todos os cenários foram escolhidos com foco em **criar cobertura crítica** das operações principais do fluxo real de uma API comercial.

---

# 🎯 Justificativa Técnica da Escolha dos Cenários

Como QA, selecionei cenários que representam **maior risco ao negócio** e **alta criticidade operacional**, pois testam:

* **Validação de autenticação e segurança de acesso** (Login, Autorizações)
* **Operações CRUD essenciais** para funcionamento básico do sistema
* **Cenários de erro realistas** que garantem robustez e prever comportamentos inesperados
* **Fluxo completo de compra**, representando o objetivo final de uma aplicação e-commerce

Essas escolhas refletem princípios fundamentais de qualidade:

| Critério QA                     | Aplicação prática                |
| ------------------------------- | -------------------------------- |
| Cobertura de maior risco        | Testar login, compra e cadastros |
| Independência dos testes        | Nenhum teste depende do outro    |
| Validação positiva e negativa   | Sucesso + Erros esperados        |
| Simplicidade e manutenibilidade | Estrutura limpa e reutilizável   |
| Foco no valor de negócio        | Prioridade para fluxo principal  |

---

# 📦 Estrutura do Projeto

```
cypress/
 ├── e2e
 │   ├── login.cy.js
 │   ├── usuarios.cy.js
 │   ├── produtos.cy.js
 │   └── carrinhos.cy.js
 ├── fixtures
 │   └── users.json
 └── support
     └── commands.js
```

---

## 🧪 Boas práticas aplicadas

* Testes independentes
* Reutilização com `Cypress.Commands`
* Dados centralizados em fixtures
* Validação completa de status code + response body
* Código limpo e objetivo

---

## 📅 Prazo de entrega

⏳ **2 dias**, conforme solicitado no desafio

---

## ✉ Autor

**Hugo Batista** – QA Engineer

---

**Última atualização:** 25/11/2024
