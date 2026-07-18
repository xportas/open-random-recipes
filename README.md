<div align="center">

<img src="public/opr-banner.png" width="170" height="170" alt="OPR logo" />

# Open Random Recipes 🍽️

**Web application for recipe management and random weekly menu generation and the shopping list.**

_Simple. Private. Open Source. Not-for-profit._

![React](https://readmebadge.vercel.app/badges/react.svg)
![Next.js](https://readmebadge.vercel.app/badges/nextjs.svg)
![Tailwind CSS](https://readmebadge.vercel.app/badges/tailwind.svg)
![Javascript](https://readmebadge.vercel.app/badges/javascript.svg)

</div>

---

*Read this document in other languages: [Español](README.es.md), [Português](README.pt.md)*

## Table of Contents 📚

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage Guide](#usage-guide)
  - [Application Screens](#application-screens)
  - [Recipe Customization (`data/recipes.json`)](#recipe-customization-datarecipesjson)
- [Contributing](#contributing)
- [License](#license)

<h2 id="prerequisites">Prerequisites 🛠️</h2>

To install and run this project in your local environment, you will need the following tools:

- **Node.js**: JavaScript runtime environment (LTS version recommended, minimum v18+).
- **npm**: Node package manager (installed alongside Node.js).
- **Git**: Version control system.

<h2 id="installation">Installation 📦</h2>

Follow these steps to get the project running on your local machine:

1. **Clone the repository**:
   ```bash
   git clone <REPOSITORY_URL>
   cd open-random-recipes
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables**:
   Copy the example file to create your own `.env` file:
   ```bash
   cp .env.example .env
   ```
   
   Open the `.env` file and fill in the following variables for the authentication process:
   - `APP_PASSWORD_HASH_B64`: Base64 encoded bcrypt password hash. You can generate one using `bcryptjs` in a Node script or online tools. For example:
     ```javascript
     // Quick Node script to generate the hash:
     const bcrypt = require('bcryptjs');
     const hash = bcrypt.hashSync('your_secret_password', 10);
     const hashB64 = Buffer.from(hash).toString('base64');
     console.log(hashB64);
     ```
   - `SESSION_SECRET`: A 64-character random hexadecimal string. You can generate it in your terminal using:
     ```bash
     openssl rand -hex 32
     ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:3000`.

<h2 id="usage-guide">Usage Guide 📖</h2>

Below are the main features of the application.

<h3 id="application-screens">Application Screens 📱</h3>

#### 1. Home Screen 🏠
This is the main view when entering the application. It allows you to navigate to different sections.

<p align="center">
  <img src="https://private-user-images.githubusercontent.com/105586880/623586117-a39f4b80-6b5c-49e9-8950-07efac10f822.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicm93LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3ODQzOTgzMzUsIm5iZiI6MTc4NDM5ODAzNSwicGF0aCI6Ii8xMDU1ODY4ODAvNjIzNTg2MTE3LWEzOWY0YjgwLTZiNWMtNDllOS04OTUwLTA3ZWZhYzEwZjgyMi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNzE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDcxOFQxODA3MTVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03OThiZWJmZDU5ZmJiNmIxNmQxZmIxMmJkNzlmMDQ4NjYxYjZmZDU3YjFjNDk1YjY1NTRkOGJlMDQ3ZWY3YjFhJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.GNKX8Tf2uhHDnNmB2B7CanrH4BNP562epS6sXRujhvo" alt="Home" />
</p>

#### 2. Recipes List 📋
In this screen, you can view all the available recipes in the system, along with their images, names, and general information.

<p align="center">
  <img src="https://private-user-images.githubusercontent.com/105586880/623586119-4460c7d5-00ce-47c8-940e-e850ad4f910e.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicm93LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3ODQzOTgzMzUsIm5iZiI6MTc4NDM5ODAzNSwicGF0aCI6Ii8xMDU1ODY4ODAvNjIzNTg2MTE5LTQ0NjBjN2Q1LTAwY2UtNDdjOC05NDBlLWU4NTBhZDRmOTEwZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNzE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDcxOFQxODA3MTVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iZGJlMjYwYTY0MjlkNzIwMmE1Mjc2OWVmNGE5Yjc0NWNlOTZkOWJiZDM0NDlmMjRiMDg5NjY5MGFmNzg1MGM1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.6bDTul2fvWAIsMlu7nWusDEh02wJ8D4U0KxCALRnbww" alt="Recipes List" />
</p>

#### 3. Menu Generator 🍲
This is the core functionality. It allows you to generate a weekly menu randomly, taking into account restrictions and meal types (breakfast, lunch, dinner).

<p align="center">
  <img src="https://private-user-images.githubusercontent.com/105586880/623586115-af52ec8a-4ef3-4d51-851f-4f52f4ebee75.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicm93LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3ODQzOTgzMzUsIm5iZiI6MTc4NDM5ODAzNSwicGF0aCI6Ii8xMDU1ODY4ODAvNjIzNTg2MTE1LWFmNTJlYzhhLTRlZjMtNGQ1MS04NTFmLTRmNTJmNGViZWU3NS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNzE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDcxOFQxODA3MTVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mNzRkMDJhZDY0NWZhZjhlMDdlYmM1N2U0NWU0MWFlZjk1ZDAwMTdjZTc0ZTlkMmJkZmNkYzk3MjAzMDJhNDQ5JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.VbIuVQ6zCmomtojUI4ad2CO5-JuV25l3G6f3QJyL4MA" alt="Menu Generator" />
  &nbsp;&nbsp;&nbsp;&nbsp;
  <img src="https://private-user-images.githubusercontent.com/105586880/623586114-f2027fd0-fc06-44a7-8c42-c0b7e0cbbddf.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicm93LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3ODQzOTgzMzUsIm5iZiI6MTc4NDM5ODAzNSwicGF0aCI6Ii8xMDU1ODY4ODAvNjIzNTg2MTE0LWYyMDI3ZmQwLWZjMDYtNDRhNy04YzQyLWMwYjdlMGNiYmRkZi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNzE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDcxOFQxODA3MTVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yZGNjODUwZmE4NjgwYTc2YTQ4MjViNWY4ZmEwODY5MzBlMzlkODU1OWEwZjYwOGUwZDcwZjNmMzViNTM1ODZlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.I2z8xUcWALjWAKTKOCAMZ5-FL-8-9dRDVBoY-hrPDNA" alt="Menu Generator 2" />
</p>

#### 4. Shopping List 🛒
Based on the generated menu, this screen groups all the necessary ingredients categorized by their grocery section (produce, meat, dairy, etc.).

<p align="center">
  <img src="https://private-user-images.githubusercontent.com/105586880/623586120-58efb475-85e7-4ea3-baa5-262f3da3c6a2.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicm93LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3ODQzOTgzMzUsIm5iZiI6MTc4NDM5ODAzNSwicGF0aCI6Ii8xMDU1ODY4ODAvNjIzNTg2MTIwLTU4ZWZiNDc1LTg1ZTctNGVhMy1iYWE1LTI2MmYzZGEzYzZhMi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNzE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDcxOFQxODA3MTVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yYmFmYzg0MDMxNjZkMTg3Y2UxMGNkNTI0YzNkZDIzYTQxM2YzY2QwNjA3NTI4NTBhMTFlYTZjM2U1Zjk5NDM3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.AooVjnkt-BvhpfUfUXZ0NIdC8uYzIOqaRIMzV5NXRoQ" alt="Shopping List" />
  &nbsp;&nbsp;&nbsp;&nbsp;
  <img src="https://private-user-images.githubusercontent.com/105586880/623586116-ef6798c3-31ad-4c6f-99a9-62d6b0c34bbc.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicm93LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3ODQzOTgzMzUsIm5iZiI6MTc4NDM5ODAzNSwicGF0aCI6Ii8xMDU1ODY4ODAvNjIzNTg2MTE2LWVmNjc5OGMzLTMxYWQtNGM2Zi05OWE5LTYyZDZiMGMzNGJiYy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNzE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDcxOFQxODA3MTVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zMzM5OTczY2ZjYmY5MzMzZmZjMTZjMmI5NzliYTA4MTQ5MGFhOWE5ZTA2NTVlYjZmZjM0NjZmYmI0MTUxOWNiJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.i5eEGxNEMCds5gz5JlZRPgRAYKquDWtigMvBhoZ7HNs" alt="Shopping List 2" />
</p>

#### 5. Settings ⚙️
In this screen, you can customize the application behavior:
- **Theme**: Toggle between light and dark mode.
- **Language**: Change the application's interface language.
- **Training Days**: Set which days of the week you train to generate specific meals according to your active days.

<p align="center">
  <img src="https://private-user-images.githubusercontent.com/105586880/623586118-b69b0c48-72f1-418d-8f40-82471320a0e1.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicm93LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3ODQzOTgzMzUsIm5iZiI6MTc4NDM5ODAzNSwicGF0aCI6Ii8xMDU1ODY4ODAvNjIzNTg2MTE4LWI2OWIwYzQ4LTcyZjEtNDE4ZC04ZjQwLTgyNDcxMzIwYTBlMS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNzE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDcxOFQxODA3MTVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wZDNkMWQ3YzE5MTE0MzgwODU4MmY1YWI0MTc3OGJiOGVhMDA1ZjU2ZWRiZjVjMmUzODdlZTJmM2QwZjE2OTM0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.7XLUZnuQV83TvBDT651-wmUns9eI7ZVqM9i96RAT4-0" alt="Settings" />
</p>

<h3 id="recipe-customization-datarecipesjson">Recipe Customization (`data/recipes.json`) 📂</h3>

The entire recipe database is managed through the static `data/recipes.json` file. It is structured as a JSON array of objects, where each object represents a recipe.

To add your own recipes so the app uses them when generating menus, simply edit or add new objects following this structure:

- **`id`** *(number)*: A unique identifier for the recipe.
- **`name`** *(string)*: The title of the recipe.
- **`steps`** *(string)*: Preparation instructions.
- **`restrictions`** *(array of strings | null)*: Tags to restrict when this recipe can be suggested. Possible values: `["weekend"]`, `["dinner"]`, etc. If there are no restrictions, use `null`.
- **`servings`** *(number)*: Number of servings.
- **`type`** *(string)*: Main protein category of the recipe, used to prevent two main meals (`lunch` and `dinner`) of the same category within the same day. Allowed values:
  - `"meet"` → recipes whose main ingredient is meat (red, white, jamón, etc.).
  - `"fish"` → recipes whose main ingredient is fish or seafood.
  - `"other"` → any other recipe (vegetables, eggs, legumes, breakfasts, snacks, etc.).
- **`breakfast`, `lunch`, `snack`, `dinner`** *(boolean)*: Set to `true` or `false` to indicate which meals of the day this recipe fits into.
- **`ingredients`** *(array of objects)*: List of ingredients. Each ingredient has:
  - `name` *(string)*: Name of the ingredient or category.
  - `quantity` *(number | null)*: Required quantity.
  - `unit_of_measure` *(string | null)*: Unit (e.g., "grams", "ml").
  - `required` *(boolean)*: Whether the ingredient is mandatory.
  - `grocery_section` *(string)*: Supermarket section to organize the shopping list (e.g., `"Frutas y Verduras"`, `"Carnicería"`, `"Lácteos"`, `"Cereales y Granos"`).
  - `options` *(array of strings, optional)*: If it's an open recipe (e.g., "White meat"), list the possible options here (e.g., `["Chicken breast", "Turkey"]`).
- **`img`** *(string)*: Path to the recipe image (usually saved in the `public/recipes/` folder).

**Example of adding a recipe:**
```json
{
  "id": 99,
  "name": "Tomato Toast",
  "steps": "Toast the bread, grate the tomato, and add oil and salt.",
  "restrictions": null,
  "servings": 1,
  "type": "other",
  "breakfast": true,
  "lunch": false,
  "snack": true,
  "dinner": false,
  "ingredients": [
    {
      "name": "Bread",
      "quantity": 2,
      "unit_of_measure": "slices",
      "required": true,
      "grocery_section": "Panadería"
    },
    {
      "name": "Tomato",
      "quantity": 1,
      "unit_of_measure": "unit",
      "required": true,
      "grocery_section": "Frutas y Verduras"
    }
  ],
  "img": "/recipes/tomato-toast.jpg"
}
```

<h2 id="contributing">Contributing 🤝</h2>

Contributions are welcome! If you want to collaborate with the project:

1. Check the **Issues** tab to see pending tasks or report a new bug/feature.
2. Fork the repository.
3. Create a new branch for your feature (`git checkout -b feature/new-feature`).
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature/new-feature`).
6. Open a **Pull Request** detailing your changes.

<h2 id="license">License 📄</h2>

This project is licensed under the **GNU Affero General Public License v3.0 (AGPL-3.0)**.

**License Summary:**
- **You can**: Use, modify, and distribute this software publicly or privately (not comercially).
- **You must**:
  - Provide the complete source code to any user interacting with the software over a network (such as a web server).
  - Keep the same license (AGPL-3.0) if you distribute or publish a modified version.
  - Include the copyright notice and the original license declaration.
- **You cannot**: Close the source code if you offer the software as a public web service.

For more details, see the full [LICENSE](LICENSE) file in the repository.
