# Random Recipes 🍽️

Aplicativo web para gestão de receitas e geração aleatória de menus semanais, juntamente com a lista de compras.

*Leia este documento em outros idiomas: [English](README.md), [Español](README.es.md)*

## Índice 📚

- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Guia de Uso](#guia-de-uso)
  - [Telas do Aplicativo](#telas-do-aplicativo)
  - [Personalização de Receitas (`data/recipes.json`)](#personalização-de-receitas-datarecipesjson)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Pré-requisitos 🛠️

Para poder instalar e executar este projeto em seu ambiente local, você precisará das seguintes ferramentas:

- **Node.js**: Ambiente de execução para JavaScript (versão LTS recomendada, no mínimo v18+).
- **npm**: Gerenciador de pacotes do Node (instalado junto com o Node.js).
- **Git**: Sistema de controle de versão.

## Instalação 📦

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

## Guia de Uso 📖

Abaixo estão explicadas as principais funcionalidades do aplicativo. 


### Telas do Aplicativo 📱

#### 1. Tela Inicial (Home) 🏠
Aqui é mostrada a visualização principal ao entrar no aplicativo. Permite navegar para diferentes seções.
*![Captura de tela da Home](public/docs/)* 

#### 2. Lista de Receitas 📋
Nesta tela você pode visualizar todas as receitas disponíveis no sistema, com suas imagens, nomes e informações gerais.
*![Captura de tela da Lista de Receitas](public/docs/)*

#### 3. Gerador de Menu 🍲
Esta é a funcionalidade principal. Permite gerar um menu semanal aleatoriamente, levando em consideração as restrições e tipos de refeição (café da manhã, almoço, jantar).
*![Captura de tela do Gerador de Menu](public/docs/)*

#### 4. Lista de Compras 🛒
Com base no menu gerado, esta tela agrupa todos os ingredientes necessários classificados pela sua seção do supermercado (hortifrúti, açougue, laticínios, etc.).
*![Captura de tela da Lista de Compras](public/docs/)*

#### 5. Configurações ⚙️
Nesta tela, você pode personalizar o comportamento do aplicativo:
- **Tema**: Alterne entre o modo claro e escuro.
- **Idioma**: Mude o idioma da interface do aplicativo.
- **Dias de Treino**: Configure quais dias da semana você treina para que o gerador considere seus dias ativos ao sugerir refeições.
*![Captura de tela de Configurações](public/docs/)*

### Personalização de Receitas (`data/recipes.json`) 📂

Toda a base de dados de receitas é gerenciada através do arquivo estático `data/recipes.json`. É estruturado como um array (lista) de objetos JSON, onde cada objeto representa uma receita.

Para adicionar suas próprias receitas e fazer com que o aplicativo as use ao gerar menus, basta editar ou adicionar novos objetos seguindo esta estrutura:

- **`id`** *(número)*: Um identificador único para a receita.
- **`name`** *(string)*: O título da receita.
- **`steps`** *(string)*: Instruções de preparação.
- **`restrictions`** *(array de strings | null)*: Tags para restringir quando esta receita pode ser sugerida. Valores possíveis: `["weekend"]`, `["dinner"]`, etc. Se não houver restrições, use `null`.
- **`servings`** *(número)*: Número de porções.
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

## Contribuição 🤝

Contribuições são bem-vindas! Se você deseja colaborar com o projeto:

1. Verifique a guia **Issues** para ver tarefas pendentes ou relatar um novo bug/recurso.
2. Faça um fork do repositório.
3. Crie uma nova branch para seu recurso (`git checkout -b feature/novo-recurso`).
4. Faça o commit de suas alterações (`git commit -m 'Adiciona novo recurso'`).
5. Faça o push da sua branch (`git push origin feature/novo-recurso`).
6. Abra um **Pull Request** explicando detalhadamente suas alterações.

## Licença 📄

Este projeto está licenciado sob a **GNU Affero General Public License v3.0 (AGPL-3.0)**.

**Resumo da licença:**
- **Você pode**: Usar, modificar e distribuir este software de forma pública ou privada (não comercialmente).
- **Você deve**:
  - Fornecer o código fonte completo a qualquer usuário que interaja com o software através de uma rede (como um servidor web).
  - Manter a mesma licença (AGPL-3.0) se distribuir ou tornar pública uma versão modificada.
  - Incluir o aviso de direitos autorais e a declaração da licença original.
- **Você não pode**: Fechar o código se oferecer o software como um serviço web ao público.

Para mais detalhes, consulte o arquivo [LICENSE](LICENSE) completo no repositório.
