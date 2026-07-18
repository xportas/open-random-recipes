<div align="center">

<img src="public/opr-banner.png" width="170" height="170" alt="OPR logo" />

# Open Random Recipes 🍽️

**Aplicación web para la gestión de recetas, la generación aleatoria de menús semanales y la lista de la compra.**

_Sencillo. Privado. De código abierto. Sin ánimo de lucro._

![React](https://readmebadge.vercel.app/badges/react.svg)
![Next.js](https://readmebadge.vercel.app/badges/nextjs.svg)
![Tailwind CSS](https://readmebadge.vercel.app/badges/tailwind.svg)
![Javascript](https://readmebadge.vercel.app/badges/javascript.svg)

</div>

---

*Leer este documento en otros idiomas: [English](README.md), [Português](README.pt.md)*

## Índice 📚

- [Pre-requisitos](#pre-requisitos)
- [Instalación](#instalación)
- [Guía de Uso](#guía-de-uso)
  - [Pantallas de la Aplicación](#pantallas-de-la-aplicación)
  - [Personalización de Recetas (`data/recipes.json`)](#personalización-de-recetas-datarecipesjson)
- [Contribución](#contribución)
- [Licencia](#licencia)

<h2 id="pre-requisitos">Pre-requisitos 🛠️</h2>

Para poder instalar y ejecutar este proyecto en tu entorno local, necesitarás tener instaladas las siguientes herramientas:

- **Node.js**: Entorno de ejecución para JavaScript (se recomienda la versión LTS más reciente, como mínimo v18+).
- **npm**: Gestor de paquetes de Node (se instala junto con Node.js).
- **Git**: Sistema de control de versiones.

<h2 id="instalación">Instalación 📦</h2>

Sigue los siguientes pasos para poner el proyecto en marcha en tu máquina local:

1. **Clona el repositorio**:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd open-random-recipes
   ```

2. **Instala las dependencias**:
   ```bash
   npm install
   ```

3. **Configura las variables de entorno**:
   Copia el archivo de ejemplo para crear tu propio archivo `.env`:
   ```bash
   cp .env.example .env
   ```
   
   Abre el archivo `.env` y rellena las siguientes variables para el proceso de autenticación:
   - `APP_PASSWORD_HASH_B64`: Hash de la contraseña codificado en Base64. Puedes generar uno usando `bcryptjs` en un script de Node o herramientas online. Por ejemplo:
     ```javascript
     // Script rápido en Node para generar el hash:
     const bcrypt = require('bcryptjs');
     const hash = bcrypt.hashSync('tu_contraseña_secreta', 10);
     const hashB64 = Buffer.from(hash).toString('base64');
     console.log(hashB64);
     ```
   - `SESSION_SECRET`: Una cadena hexadecimal aleatoria de 64 caracteres. Puedes generarla en tu terminal usando:
     ```bash
     openssl rand -hex 32
     ```

4. **Inicia el servidor de desarrollo**:
   ```bash
   npm run dev
   ```
   La aplicación estará disponible en `http://localhost:3000`.

<h2 id="guía-de-uso">Guía de Uso 📖</h2>

A continuación se explican las principales funcionalidades de la aplicación. 

> **TO-DO**: insertar capturas de pantalla de la aplicación en funcionamiento para ilustrar la guía. Guardar las imágenes en `public/docs/`

<h3 id="pantallas-de-la-aplicación">Pantallas de la Aplicación 📱</h3>

#### 1. Pantalla de Inicio (Home) 🏠
Aquí se muestra la vista principal al entrar en la aplicación. Permite navegar a las diferentes secciones.
![Home](https://private-user-images.githubusercontent.com/105586880/623586117-a39f4b80-6b5c-49e9-8950-07efac10f822.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3ODQzOTgzMzUsIm5iZiI6MTc4NDM5ODAzNSwicGF0aCI6Ii8xMDU1ODY4ODAvNjIzNTg2MTE3LWEzOWY0YjgwLTZiNWMtNDllOS04OTUwLTA3ZWZhYzEwZjgyMi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNzE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDcxOFQxODA3MTVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03OThiZWJmZDU5ZmJiNmIxNmQxZmIxMmJkNzlmMDQ4NjYxYjZmZDU3YjFjNDk1YjY1NTRkOGJlMDQ3ZWY3YjFhJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.GNKX8Tf2uhHDnNmB2B7CanrH4BNP562epS6sXRujhvo)

#### 2. Lista de Recetas 📋
En esta pantalla se pueden visualizar todas las recetas disponibles en el sistema, con sus imágenes, nombres e información general.
![Lista de Recetas](https://private-user-images.githubusercontent.com/105586880/623586119-4460c7d5-00ce-47c8-940e-e850ad4f910e.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3ODQzOTgzMzUsIm5iZiI6MTc4NDM5ODAzNSwicGF0aCI6Ii8xMDU1ODY4ODAvNjIzNTg2MTE5LTQ0NjBjN2Q1LTAwY2UtNDdjOC05NDBlLWU4NTBhZDRmOTEwZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNzE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDcxOFQxODA3MTVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iZGJlMjYwYTY0MjlkNzIwMmE1Mjc2OWVmNGE5Yjc0NWNlOTZkOWJiZDM0NDlmMjRiMDg5NjY5MGFmNzg1MGM1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.6bDTul2fvWAIsMlu7nWusDEh02wJ8D4U0KxCALRnbww)

#### 3. Generador de Menú 🍲
Esta es la funcionalidad core. Te permite generar un menú semanal de forma aleatoria, teniendo en cuenta las restricciones y tipos de comida (desayuno, comida, cena).
*![Generador de Menú](https://private-user-images.githubusercontent.com/105586880/623586115-af52ec8a-4ef3-4d51-851f-4f52f4ebee75.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3ODQzOTgzMzUsIm5iZiI6MTc4NDM5ODAzNSwicGF0aCI6Ii8xMDU1ODY4ODAvNjIzNTg2MTE1LWFmNTJlYzhhLTRlZjMtNGQ1MS04NTFmLTRmNTJmNGViZWU3NS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNzE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDcxOFQxODA3MTVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mNzRkMDJhZDY0NWZhZjhlMDdlYmM1N2U0NWU0MWFlZjk1ZDAwMTdjZTc0ZTlkMmJkZmNkYzk3MjAzMDJhNDQ5JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.VbIuVQ6zCmomtojUI4ad2CO5-JuV25l3G6f3QJyL4MA)*
![Generador Menú 2](https://private-user-images.githubusercontent.com/105586880/623586114-f2027fd0-fc06-44a7-8c42-c0b7e0cbbddf.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3ODQzOTgzMzUsIm5iZiI6MTc4NDM5ODAzNSwicGF0aCI6Ii8xMDU1ODY4ODAvNjIzNTg2MTE0LWYyMDI3ZmQwLWZjMDYtNDRhNy04YzQyLWMwYjdlMGNiYmRkZi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNzE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDcxOFQxODA3MTVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yZGNjODUwZmE4NjgwYTc2YTQ4MjViNWY4ZmEwODY5MzBlMzlkODU1OWEwZjYwOGUwZDcwZjNmMzViNTM1ODZlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.I2z8xUcWALjWAKTKOCAMZ5-FL-8-9dRDVBoY-hrPDNA)

#### 4. Lista de la Compra 🛒
A partir del menú generado, esta pantalla agrupa todos los ingredientes necesarios clasificados por su sección de supermercado (frutería, carnicería, lácteos, etc.).
*![Lista de la Compra](https://private-user-images.githubusercontent.com/105586880/623586120-58efb475-85e7-4ea3-baa5-262f3da3c6a2.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3ODQzOTgzMzUsIm5iZiI6MTc4NDM5ODAzNSwicGF0aCI6Ii8xMDU1ODY4ODAvNjIzNTg2MTIwLTU4ZWZiNDc1LTg1ZTctNGVhMy1iYWE1LTI2MmYzZGEzYzZhMi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNzE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDcxOFQxODA3MTVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yYmFmYzg0MDMxNjZkMTg3Y2UxMGNkNTI0YzNkZDIzYTQxM2YzY2QwNjA3NTI4NTBhMTFlYTZjM2U1Zjk5NDM3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.AooVjnkt-BvhpfUfUXZ0NIdC8uYzIOqaRIMzV5NXRoQ)*
![Lista de la Compra 2](https://private-user-images.githubusercontent.com/105586880/623586116-ef6798c3-31ad-4c6f-99a9-62d6b0c34bbc.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3ODQzOTgzMzUsIm5iZiI6MTc4NDM5ODAzNSwicGF0aCI6Ii8xMDU1ODY4ODAvNjIzNTg2MTE2LWVmNjc5OGMzLTMxYWQtNGM2Zi05OWE5LTYyZDZiMGMzNGJiYy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNzE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDcxOFQxODA3MTVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zMzM5OTczY2ZjYmY5MzMzZmZjMTZjMmI5NzliYTA4MTQ5MGFhOWE5ZTA2NTVlYjZmZjM0NjZmYmI0MTUxOWNiJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.i5eEGxNEMCds5gz5JlZRPgRAYKquDWtigMvBhoZ7HNs)

#### 5. Ajustes ⚙️
En esta pantalla puedes configurar el comportamiento de la aplicación:
- **Tema**: Cambia entre el modo claro y el modo oscuro.
- **Idioma**: Selecciona el idioma en el que deseas visualizar la interfaz.
- **Días de entrenamiento**: Configura qué días de la semana entrenas para que el generador tenga en cuenta tus días activos al proponer ciertas comidas.
*![Ajustes](https://private-user-images.githubusercontent.com/105586880/623586118-b69b0c48-72f1-418d-8f40-82471320a0e1.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3ODQzOTgzMzUsIm5iZiI6MTc4NDM5ODAzNSwicGF0aCI6Ii8xMDU1ODY4ODAvNjIzNTg2MTE4LWI2OWIwYzQ4LTcyZjEtNDE4ZC04ZjQwLTgyNDcxMzIwYTBlMS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNzE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDcxOFQxODA3MTVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wZDNkMWQ3YzE5MTE0MzgwODU4MmY1YWI0MTc3OGJiOGVhMDA1ZjU2ZWRiZjVjMmUzODdlZTJmM2QwZjE2OTM0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.7XLUZnuQV83TvBDT651-wmUns9eI7ZVqM9i96RAT4-0)*

<h3 id="personalización-de-recetas-datarecipesjson">Personalización de Recetas (`data/recipes.json`) 📂</h3>

Toda la base de datos de recetas se gestiona a través del archivo estático `data/recipes.json`. Está estructurado como un array (lista) de objetos JSON, donde cada objeto representa una receta.

Para añadir tus propias recetas y que la app las utilice al generar los menús, simplemente edita o añade nuevos objetos siguiendo esta estructura:

- **`id`** *(número)*: Un identificador único para la receta.
- **`name`** *(string)*: El título de la receta.
- **`steps`** *(string)*: Instrucciones de preparación.
- **`restrictions`** *(array de strings | null)*: Etiquetas para restringir cuándo se puede sugerir esta receta. Posibles valores: `["weekend"]`, `["dinner"]`, etc. Si no tiene restricciones, usa `null`.
- **`servings`** *(número)*: Número de raciones.
- **`type`** *(string)*: Categoría principal de proteína de la receta. Se utiliza para evitar que en un mismo día coincidan dos comidas principales (`lunch` y `dinner`) de la misma categoría. Valores permitidos:
  - `"meet"` → recetas cuyo ingrediente principal es carne (roja, blanca, jamón, etc.).
  - `"fish"` → recetas cuyo ingrediente principal es pescado o marisco.
  - `"other"` → cualquier otra receta (verduras, huevos, legumbres, desayunos, meriendas, etc.).
- **`breakfast`, `lunch`, `snack`, `dinner`** *(boolean)*: Pon a `true` o `false` para indicar en qué comidas del día encaja esta receta.
- **`ingredients`** *(array de objetos)*: Lista de ingredientes. Cada ingrediente tiene:
  - `name` *(string)*: Nombre del ingrediente o categoría.
  - `quantity` *(número | null)*: Cantidad necesaria.
  - `unit_of_measure` *(string | null)*: Unidad (ej: "gramos", "ml").
  - `required` *(boolean)*: Si el ingrediente es obligatorio.
  - `grocery_section` *(string)*: Sección del supermercado para organizar la lista de la compra (ej: `"Frutas y Verduras"`, `"Carnicería"`, `"Lácteos"`, `"Cereales y Granos"`).
  - `options` *(array de strings, opcional)*: Si es una receta abierta (ej. "Carne blanca"), aquí se listan las opciones posibles (ej. `["Pechuga de pollo", "Pavo"]`).
- **`img`** *(string)*: Ruta de la imagen de la receta (generalmente guardada en la carpeta `public/recipes/`).

**Ejemplo de cómo añadir una receta:**
```json
{
  "id": 99,
  "name": "Tostadas con tomate",
  "steps": "Tostar el pan, rallar el tomate y añadir aceite y sal.",
  "restrictions": null,
  "servings": 1,
  "type": "other",
  "breakfast": true,
  "lunch": false,
  "snack": true,
  "dinner": false,
  "ingredients": [
    {
      "name": "Pan",
      "quantity": 2,
      "unit_of_measure": "rebanadas",
      "required": true,
      "grocery_section": "Panadería"
    },
    {
      "name": "Tomate",
      "quantity": 1,
      "unit_of_measure": "unidad",
      "required": true,
      "grocery_section": "Frutas y Verduras"
    }
  ],
  "img": "/recipes/tostadas-tomate.jpg"
}
```

<h2 id="contribución">Contribución 🤝</h2>

¡Las contribuciones son bienvenidas! Si deseas colaborar con el proyecto:

1. Revisa la pestaña de **Issues** para ver si hay tareas pendientes o reportar un nuevo bug/funcionalidad.
2. Haz un fork del repositorio.
3. Crea una nueva rama para tu funcionalidad (`git checkout -b feature/nueva-funcionalidad`).
4. Haz commit de tus cambios (`git commit -m 'Añade nueva funcionalidad'`).
5. Sube tu rama (`git push origin feature/nueva-funcionalidad`).
6. Abre un **Pull Request** explicando detalladamente tus cambios.

<h2 id="licencia">Licencia 📄</h2>

Este proyecto está licenciado bajo la **GNU Affero General Public License v3.0 (AGPL-3.0)**.

**Resumen de la licencia:**
- **Puedes**: Usar, modificar y distribuir públicamente o de forma privada este software (no comercialmente).
- **Debes**:
  - Proporcionar el código fuente completo a cualquier usuario que interactúe con el software a través de una red (como un servidor web).
  - Mantener la misma licencia (AGPL-3.0) si distribuyes o haces pública una versión modificada.
  - Incluir el aviso de copyright y la declaración de la licencia original.
- **No puedes**: Cerrar el código si ofreces el software como un servicio web al público.

Para más detalles, consulta el archivo [LICENSE](LICENSE) completo en el repositorio.
