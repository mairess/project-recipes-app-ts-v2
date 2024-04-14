# <p align="center">Projeto App de Receitas</p>

<div align="center">
  
| Statements                  | Branches                | Functions                 | Lines                |
| --------------------------- | ----------------------- | ------------------------- | -------------------- |
| ![Statements](https://img.shields.io/badge/Coverage-95.15%25-brightgreen.svg) | ![Branches](https://img.shields.io/badge/Coverage-84.69%25-yellow.svg) | ![Functions](https://img.shields.io/badge/Coverage-91.66%25-brightgreen.svg) | ![Lines](https://img.shields.io/badge/Coverage-95.15%25-brightgreen.svg)    |

</div>

## Contexto

Esse é projeto foi originalmente realizado em [grupo](https://github.com/mairess/project-recipes-app-ts), mas eu gostei tanto dele que fiz uma versão solo. Essa é uma aplicação versátil, que permite aos usuários explorar, buscar, filtrar, favoritar, compartilhar e acompanhar o processo de preparação de receitas e drinks. Utilizei duas APIs distintas, uma para comidas e outra para bebidas, garantindo uma ampla variedade de opções para os usuários. Usei `context api` para compartilhamento do estado da aplicação, `custom hooks`, `react router` e para testes usei `react testing library`, `vitest`, a estilização foi realizada com `styled-components` por meio de protótipo disponibilizado pela [Trybe](https://betrybe.com).

```
O layout foi projetado com foco em dispositivos móveis apenas (360px de largura por 640px de altura).
```

<details>

<summary><strong>O app</strong></summary><br>

![App meals page](app-meals-page.png)

</details>

<details>

<summary><strong>Rode o projeto localmente</strong></summary><br>

> ⚠️ É preciso ter o [Node](https://nodejs.org/en) instalado em sua máquina.

Primeiro, clone o repositório:

```SEHLL
git clone git@github.com:mairess/project-recipes-app-ts-v2.git
```

Instale as dependências:

```SEHLL
npm install
```

Inicie o vite server:

```SEHLL
npm run dev
```

</details>

<details>

<summary><strong>Rode o projeto com o docker</strong></summary><br>

> ⚠️ É preciso ter o [Docker](https://www.docker.com/get-started/) instalado em sua máquina.

Primeiro, clone o repositório:

```SEHLL
git clone git@github.com:mairess/project-recipes-app-ts-v2.git
```

Suba o container:

```SEHLL
docker compose up -d
```

O vite server estará disponível na porta `3000`:

```SEHLL
http://localhost:3000
```

</details>

<details>

<summary><strong>Rode os testes</strong></summary><br>

Rode os testes com:

```SHELL
npm test
```

Rode a cobertura:

```SHELL
npm run coverage
```

</details>

## Tecnologias utilizadas

- React
- Typescript
- React testing library
- Vitest
- Styled components
- Docker
