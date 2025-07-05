# API Restaurant

API para gerenciar pedidos de um restaurante, desenvolvida em Node.js com Express, Knex e SQLite3.

## Índice
- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Rodar o Projeto](#como-rodar-o-projeto)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Endpoints da API](#endpoints-da-api)
- [Licença](#licença)

## Sobre o Projeto

Esta API permite o gerenciamento de pedidos de um restaurante, incluindo cadastro de produtos, mesas, sessões de mesas e pedidos. Utiliza banco de dados SQLite3 e Knex para queries SQL.

## Tecnologias Utilizadas
- Node.js
- Express
- Knex
- SQLite3
- TypeScript

## Como Rodar o Projeto

1. **Clone o repositório:**
   ```sh
   git clone <url-do-repositorio>
   cd api-restaurant
   ```
2. **Instale as dependências:**
   ```sh
   npm install
   ```
3. **Rode o projeto em modo desenvolvimento:**
   ```sh
   npm run dev
   ```
   O servidor será iniciado em http://localhost:3333

## Scripts Disponíveis
- `npm run dev`: Inicia o servidor em modo desenvolvimento usando `tsx`.

## Estrutura do Projeto
```
api-restaurant/
├── src/
│   ├── controllers/
│   ├── database/
│   ├── middlewares/
│   ├── routes/
│   └── server.ts
├── package.json
├── tsconfig.json
└── README.md
```

### Fluxograma da aplicação

https://excalidraw.com/#json=wRmQJz48jgZ08vzHYL1gh,JqVo7Ush8BOEjtU6GZB1tA

## Endpoints da API

### Produtos (`/products`)
- **GET /**
  - Lista todos os produtos. Aceita filtro por nome via query param `name`.
  - Exemplo: `GET /products?name=pizza`
- **POST /**
  - Cria um novo produto.
  - Body JSON: `{ "name": "Pizza Margherita", "price": 39.9 }`
- **PUT /:id**
  - Atualiza um produto pelo ID.
  - Body JSON: `{ "name": "Pizza Calabresa", "price": 42.0 }`
- **DELETE /:id**
  - Remove um produto pelo ID.

### Mesas (`/tables`)
- **GET /**
  - Lista todas as mesas cadastradas.

### Sessão de Mesas (`/tables-session`)
- **POST /**
  - Abre uma nova sessão para uma mesa.
  - Body JSON: `{ "table_id": 1 }`
- **GET /**
  - Lista todas as sessões de mesas.
- **PUT /:id**
  - Fecha uma sessão de mesa pelo ID.

### Pedidos (`/orders`)
- **POST /**
  - Cria um novo pedido para uma sessão de mesa.
  - Body JSON: `{ "table_session_id": 1, "product_id": 2, "quantity": 3 }`
- **GET /table-session/:table_session_id**
  - Lista todos os pedidos de uma sessão de mesa.
- **GET /table-session/:table_session_id/total**
  - Retorna o valor total dos pedidos de uma sessão de mesa.

## Licença

Este projeto está licenciado sob a licença ISC.

---
Desenvolvido por Regis. 