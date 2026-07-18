<div align="center">

<img src="public/opr-banner.png" width="170" height="170" alt="OPR logo" />

# Open Random Recipes 🍽️

**Aplicação web para a gestão de receitas, a criação aleatória de ementas semanais e a lista de compras.**

_Simples. Privado. Código aberto. Sem fins lucrativos._

![React](https://readmebadge.vercel.app/badges/react.svg)
![Next.js](https://readmebadge.vercel.app/badges/nextjs.svg)
![Tailwind CSS](https://readmebadge.vercel.app/badges/tailwind.svg)
![Javascript](https://readmebadge.vercel.app/badges/javascript.svg)

</div>

---

*Leia este documento em outros idiomas: [English](README.md), [Español](README.es.md)*

## Índice 📚

- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Guia de Uso](#guia-de-uso)
  - [Telas do Aplicativo](#telas-do-aplicativo)
  - [Personalização de Receitas (`data/recipes.json`)](#personalização-de-receitas-datarecipesjson)
- [Contribuição](#contribuição)
- [Licença](#licença)

<h2 id="pré-requisitos">Pré-requisitos 🛠️</h2>

Para poder instalar e executar este projeto em seu ambiente local, você precisará das seguintes ferramentas:

- **Node.js**: Ambiente de execução para JavaScript (versão LTS recomendada, no mínimo v18+).
- **npm**: Gerenciador de pacotes do Node (instalado junto com o Node.js).
- **Git**: Sistema de controle de versão.

<h2 id="instalação">Instalação 📦</h2>

Siga as etapas abaixo para executar o projeto em sua máquina local:

1. **Clone o repositório**:
   ```bash
   git clone <URL_DO_REPOSITÓRIO>
   cd open-random-recipes
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**:
   Copie o arquivo de exemplo para criar seu próprio arquivo `.env`:
   ```bash
   cp .env.example .env
   ```
   
   Abra o arquivo `.env` e preencha as seguintes variáveis para o processo de autenticação:
   - `APP_PASSWORD_HASH_B64`: Hash da senha codificado em Base64. Você pode gerar um usando `bcryptjs` em um script Node ou em ferramentas online. Por exemplo:
     ```javascript
     // Script rápido em Node para gerar o hash:
     const bcrypt = require('bcryptjs');
     const hash = bcrypt.hashSync('sua_senha_secreta', 10);
     const hashB64 = Buffer.from(hash).toString('base64');
     console.log(hashB64);
     ```
   - `SESSION_SECRET`: Uma string hexadecimal aleatória de 64 caracteres. Você pode gerá-la no seu terminal usando:
     ```bash
     openssl rand -hex 32
     ```

4. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```
   O aplicativo estará disponível em `http://localhost:3000`.

<h2 id="guia-de-uso">Guia de Uso 📖</h2>

Abaixo estão explicadas as principais funcionalidades do aplicativo. 


<h3 id="telas-do-aplicativo">Telas do Aplicativo 📱</h3>

#### 1. Tela Inicial (Home) 🏠
Aqui é mostrada a visualização principal ao entrar no aplicativo. Permite navegar para diferentes seções.

<p align="center">
  <img src="https://private-user-images.githubusercontent.com/105586880/623586117-a39f4b80-6b5c-49e9-8950-07efac10f822.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicm93LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3ODQzOTgzMzUsIm5iZiI6MTc4NDM5ODAzNSwicGF0aCI6Ii8xMDU1ODY4ODAvNjIzNTg2MTE3LWEzOWY0YjgwLTZiNWMtNDllOS04OTUwLTA3ZWZhYzEwZjgyMi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNzE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDcxOFQxODA3MTVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03OThiZWJmZDU5ZmJiNmIxNmQxZmIxMmJkNzlmMDQ4NjYxYjZmZDU3YjFjNDk1YjY1NTRkOGJlMDQ3ZWY3YjFhJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.GNKX8Tf2uhHDnNmB2B7CanrH4BNP562epS6sXRujhvo" alt="Tela Inicial" />
</p>

#### 2. Lista de Receitas 📋
Nesta tela você pode visualizar todas as receitas disponíveis no sistema, com suas imagens, nomes e informações gerais.

<p align="center">
  <img src="https://private-user-images.githubusercontent.com/105586880/623586119-4460c7d5-00ce-47c8-940e-e850ad4f910e.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicm93LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3ODQzOTgzMzUsIm5iZiI6MTc4NDM5ODAzNSwicGF0aCI6Ii8xMDU1ODY4ODAvNjIzNTg2MTE5LTQ0NjBjN2Q1LTAwY2UtNDdjOC05NDBlLWU4NTBhZDRmOTEwZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNzE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDcxOFQxODA3MTVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iZGJlMjYwYTY0MjlkNzIwMmE1Mjc2OWVmNGE5Yjc0NWNlOTZkOWJiZDM0NDlmMjRiMDg5NjY5MGFmNzg1MGM1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.6bDTul2fvWAIsMlu7nWusDEh02wJ8D4U0KxCALRnbww" alt="Lista de Receitas" />
</p>

#### 3. Gerador de Menu 🍲
Esta é a funcionalidade principal. Permite gerar um menu semanal aleatoriamente, levando em consideração as restrições e tipos de refeição (café da manhã, almoço, jantar).

<p align="center">
  <img src="https://private-user-images.githubusercontent.com/105586880/623586115-af52ec8a-4ef3-4d51-851f-4f52f4ebee75.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicm93LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3ODQzOTgzMzUsIm5iZiI6MTc4NDM5ODAzNSwicGF0aCI6Ii8xMDU1ODY4ODAvNjIzNTg2MTE1LWFmNTJlYzhhLTRlZjMtNGQ1MS04NTFmLTRmNTJmNGViZWU3NS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNzE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDcxOFQxODA3MTVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mNzRkMDJhZDY0NWZhZjhlMDdlYmM1N2U0NWU0MWFlZjk1ZDAwMTdjZTc0ZTlkMmJkZmNkYzk3MjAzMDJhNDQ5JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.VbIuVQ6zCmomtojUI4ad2CO5-JuV25l3G6f3QJyL4MA" alt="Gerador de Menu" />
  &nbsp;&nbsp;&nbsp;&nbsp;
  <img src="https://private-user-images.githubusercontent.com/105586880/623586114-f2027fd0-fc06-44a7-8c42-c0b7e0cbbddf.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicm93LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3ODQzOTgzMzUsIm5iZiI6MTc4NDM5ODAzNSwicGF0aCI6Ii8xMDU1ODY4ODAvNjIzNTg2MTE0LWYyMDI3ZmQwLWZjMDYtNDRhNy04YzQyLWMwYjdlMGNiYmRkZi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNzE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDcxOFQxODA3MTVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yZGNjODUwZmE4NjgwYTc2YTQ4MjViNWY4ZmEwODY5MzBlMzlkODU1OWEwZjYwOGUwZDcwZjNmMzViNTM1ODZlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.I2z8xUcWALjWAKTKOCAMZ5-FL-8-9dRDVBoY-hrPDNA" alt="Gerador de Menu 2" />
</p>

#### 4. Lista de Compras 🛒
Com base no menu gerado, esta tela agrupa todos os ingredientes necessários classificados pela sua seção do supermercado (hortifrúti, açougue, laticínios, etc.).

<p align="center">
  <img src="https://private-user-images.githubusercontent.com/105586880/623586120-58efb475-85e7-4ea3-baa5-262f3da3c6a2.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicm93LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3ODQzOTgzMzUsIm5iZiI6MTc4NDM5ODAzNSwicGF0aCI6Ii8xMDU1ODY4ODAvNjIzNTg2MTIwLTU4ZWZiNDc1LTg1ZTctNGVhMy1iYWE1LTI2MmYzZGEzYzZhMi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNzE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDcxOFQxODA3MTVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yYmFmYzg0MDMxNjZkMTg3Y2UxMGNkNTI0YzNkZDIzYTQxM2YzY2QwNjA3NTI4NTBhMTFlYTZjM2U1Zjk5NDM3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.AooVjnkt-BvhpfUfUXZ0NIdC8uYzIOqaRIMzV5NXRoQ" alt="Lista de Compras" />
  &nbsp;&nbsp;&nbsp;&nbsp;
  <img src="https://private-user-images.githubusercontent.com/105586880/623586116-ef6798c3-31ad-4c6f-99a9-62d6b0c34bbc.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicm93LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3ODQzOTgzMzUsIm5iZiI6MTc4NDM5ODAzNSwicGF0aCI6Ii8xMDU1ODY4ODAvNjIzNTg2MTE2LWVmNjc5OGMzLTMxYWQtNGM2Zi05OWE5LTYyZDZiMGMzNGJiYy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNzE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDcxOFQxODA3MTVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zMzM5OTczY2ZjYmY5MzMzZmZjMTZjMmI5NzliYTA4MTQ5MGFhOWE5ZTA2NTVlYjZmZjM0NjZmYmI0MTUxOWNiJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.i5eEGxNEMCds5gz5JlZRPgRAYKquDWtigMvBhoZ7HNs" alt="Lista de Compras 2" />
</p>

#### 5. Configurações ⚙️
Nesta tela, você pode personalizar o comportamento do aplicativo:
- **Tema**: Alterne entre o modo claro e escuro.
- **Idioma**: Mude o idioma da interface do aplicativo.
- **Dias de Treino**: Configure quais dias da semana você treina para que o gerador considere seus dias ativos ao sugerir refeições.

<p align="center">
  <img src="https://private-user-images.githubusercontent.com/105586880/623586118-b69b0c48-72f1-418d-8f40-82471320a0e1.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicm93LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3ODQzOTgzMzUsIm5iZiI6MTc4NDM5ODAzNSwicGF0aCI6Ii8xMDU1ODY4ODAvNjIzNTg2MTE4LWI2OWIwYzQ4LTcyZjEtNDE4ZC04ZjQwLTgyNDcxMzIwYTBlMS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNzE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDcxOFQxODA3MTVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wZDNkMWQ3YzE5MTE0MzgwODU4MmY1YWI0MTc3OGJiOGVhMDA1ZjU2ZWRiZjVjMmUzODdlZTJmM2QwZjE2OTM0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.7XLUZnuQV83TvBDT651-wmUns9eI7ZVqM9i96RAT4-0" alt="Configurações" />
</p>

<h3 id="personalização-de-receitas-datarecipesjson">Personalização de Receitas (`data/recipes.json`) 📂</h3>

Toda a base de dados de receitas é gerenciada através do arquivo estático `data/recipes.json`. É estruturado como um array (lista) de objetos JSON, onde cada objeto representa uma receita.

Para adicionar suas próprias receitas e fazer com que o aplicativo as use ao gerar menus, basta editar ou adicionar novos objetos seguindo esta estrutura:

- **`id`** *(número)*: Um identificador único para a receita.
- **`name`** *(string)*: O título da receita.
- **`steps`** *(string)*: Instruções de preparação.
- **`restrictions`** *(array de strings | null)*: Tags para restringir quando esta receita pode ser sugerida. Valores possíveis: `["weekend"]`, `["dinner"]`, etc. Se não houver restrições, use `null`.
- **`servings`** *(número)*: Número de porções.
- **`type`** *(string)*: Categoria principal de proteína da receita. É usada para evitar que, no mesmo dia, coincidam duas refeições principais (`lunch` e `dinner`) da mesma categoria. Valores permitidos:
  - `"meet"` → receitas cujo ingrediente principal é carne (vermelha, branca, jamón, etc.).
  - `"fish"` → receitas cujo ingrediente principal é peixe ou marisco.
  - `"other"` → qualquer outra receita (vegetais, ovos, leguminosas, cafés da manhã, lanches, etc.).
- **`breakfast`, `lunch`, `snack`, `dinner`** *(boolean)*: Defina como `true` ou `false` para indicar em quais refeições do dia esta receita se encaixa.
- **`ingredients`** *(array de objetos)*: Lista de ingredientes. Cada ingrediente possui:
  - `name` *(string)*: Nome do ingrediente ou categoria.
  - `quantity` *(número | null)*: Quantidade necessária.
  - `unit_of_measure` *(string | null)*: Unidade (ex: "gramas", "ml").
  - `required` *(boolean)*: Se o ingrediente é obrigatório.
  - `grocery_section` *(string)*: Seção do supermercado para organizar a lista de compras (ex: `"Frutas y Verduras"`, `"Carnicería"`, `"Lácteos"`, `"Cereales y Granos"`).
  - `options` *(array de strings, opcional)*: Se for uma receita aberta (ex. "Carne branca"), liste as opções possíveis aqui (ex. `["Pechuga de pollo", "Pavo"]`).
- **`img`** *(string)*: Caminho da imagem da receita (geralmente salva na pasta `public/recipes/`).

**Exemplo de como adicionar uma receita:**
```json
{
  "id": 99,
  "name": "Torrada com Tomate",
  "steps": "Toste o pão, rale o tomate e adicione azeite e sal.",
  "restrictions": null,
  "servings": 1,
  "type": "other",
  "breakfast": true,
  "lunch": false,
  "snack": true,
  "dinner": false,
  "ingredients": [
    {
      "name": "Pão",
      "quantity": 2,
      "unit_of_measure": "fatias",
      "required": true,
      "grocery_section": "Panadería"
    },
    {
      "name": "Tomate",
      "quantity": 1,
      "unit_of_measure": "unidade",
      "required": true,
      "grocery_section": "Frutas y Verduras"
    }
  ],
  "img": "/recipes/torrada-tomate.jpg"
}
```

<h2 id="contribuição">Contribuição 🤝</h2>

Contribuições são bem-vindas! Se você deseja colaborar com o projeto:

1. Verifique a guia **Issues** para ver tarefas pendentes ou relatar um novo bug/recurso.
2. Faça um fork do repositório.
3. Crie uma nova branch para seu recurso (`git checkout -b feature/novo-recurso`).
4. Faça o commit de suas alterações (`git commit -m 'Adiciona novo recurso'`).
5. Faça o push da sua branch (`git push origin feature/novo-recurso`).
6. Abra um **Pull Request** explicando detalhadamente suas alterações.

<h2 id="licença">Licença 📄</h2>

Este projeto está licenciado sob a **GNU Affero General Public License v3.0 (AGPL-3.0)**.

**Resumo da licença:**
- **Você pode**: Usar, modificar e distribuir este software de forma pública ou privada (não comercialmente).
- **Você deve**:
  - Fornecer o código fonte completo a qualquer usuário que interaja com o software através de uma rede (como um servidor web).
  - Manter a mesma licença (AGPL-3.0) se distribuir ou tornar pública uma versão modificada.
  - Incluir o aviso de direitos autorais e a declaração da licença original.
- **Você não pode**: Fechar o código se oferecer o software como um serviço web ao público.

Para mais detalhes, consulte o arquivo [LICENSE](LICENSE) completo no repositório.
