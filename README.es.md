# Random Recipes

Aplicación web para la gestión de recetas y generación aleatoria de menús semanales, junto con la lista de la compra. 

*Leer este documento en otros idiomas: [English](README.md), [Português](README.pt.md)*

## Índice

- [Pre-requisitos](#pre-requisitos)
- [Instalación](#instalación)
- [Guía de Uso](#guía-de-uso)
  - [Pantallas de la Aplicación](#pantallas-de-la-aplicación)
  - [Personalización de Recetas (`data/recipes.json`)](#personalización-de-recetas-datarecipesjson)
- [Contribución](#contribución)
- [Licencia](#licencia)

## Pre-requisitos

Para poder instalar y ejecutar este proyecto en tu entorno local, necesitarás tener instaladas las siguientes herramientas:

- **Node.js**: Entorno de ejecución para JavaScript (se recomienda la versión LTS más reciente, como mínimo v18+).
- **npm**: Gestor de paquetes de Node (se instala junto con Node.js).
- **Git**: Sistema de control de versiones.

## Instalación

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

## Guía de Uso

A continuación se explican las principales funcionalidades de la aplicación. 

> **TO-DO**: insertar capturas de pantalla de la aplicación en funcionamiento para ilustrar la guía. Guardar las imágenes en `public/docs/`

### Pantallas de la Aplicación

#### 1. Pantalla de Inicio (Home)
Aquí se muestra la vista principal al entrar en la aplicación. Permite navegar a las diferentes secciones.
*![Captura de pantalla del Home](public/docs/)* 

#### 2. Lista de Recetas
En esta pantalla se pueden visualizar todas las recetas disponibles en el sistema, con sus imágenes, nombres e información general.
*![Captura de pantalla de la Lista de Recetas](public/docs/)*

#### 3. Generador de Menú
Esta es la funcionalidad core. Te permite generar un menú semanal de forma aleatoria, teniendo en cuenta las restricciones y tipos de comida (desayuno, comida, cena).
*![Captura de pantalla del Generador de Menú](public/docs/)*

#### 4. Lista de la Compra
A partir del menú generado, esta pantalla agrupa todos los ingredientes necesarios clasificados por su sección de supermercado (frutería, carnicería, lácteos, etc.).
*![Captura de pantalla de la Lista de la Compra](public/docs/)*

#### 5. Ajustes
En esta pantalla puedes configurar el comportamiento de la aplicación:
- **Tema**: Cambia entre el modo claro y el modo oscuro.
- **Idioma**: Selecciona el idioma en el que deseas visualizar la interfaz.
- **Días de entrenamiento**: Configura qué días de la semana entrenas para que el generador tenga en cuenta tus días activos al proponer ciertas comidas.
*![Captura de pantalla de Ajustes](public/docs/)*

### Personalización de Recetas (`data/recipes.json`)

Toda la base de datos de recetas se gestiona a través del archivo estático `data/recipes.json`. Está estructurado como un array (lista) de objetos JSON, donde cada objeto representa una receta.

Para añadir tus propias recetas y que la app las utilice al generar los menús, simplemente edita o añade nuevos objetos siguiendo esta estructura:

- **`id`** *(número)*: Un identificador único para la receta.
- **`name`** *(string)*: El título de la receta.
- **`steps`** *(string)*: Instrucciones de preparación.
- **`restrictions`** *(array de strings | null)*: Etiquetas para restringir cuándo se puede sugerir esta receta. Posibles valores: `["weekend"]`, `["dinner"]`, etc. Si no tiene restricciones, usa `null`.
- **`servings`** *(número)*: Número de raciones.
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

## Contribución

¡Las contribuciones son bienvenidas! Si deseas colaborar con el proyecto:

1. Revisa la pestaña de **Issues** para ver si hay tareas pendientes o reportar un nuevo bug/funcionalidad.
2. Haz un fork del repositorio.
3. Crea una nueva rama para tu funcionalidad (`git checkout -b feature/nueva-funcionalidad`).
4. Haz commit de tus cambios (`git commit -m 'Añade nueva funcionalidad'`).
5. Sube tu rama (`git push origin feature/nueva-funcionalidad`).
6. Abre un **Pull Request** explicando detalladamente tus cambios.

## Licencia

Este proyecto está licenciado bajo la **GNU Affero General Public License v3.0 (AGPL-3.0)**.

**Resumen de la licencia:**
- **Puedes**: Usar, modificar y distribuir públicamente o de forma privada este software (no comercialmente).
- **Debes**:
  - Proporcionar el código fuente completo a cualquier usuario que interactúe con el software a través de una red (como un servidor web).
  - Mantener la misma licencia (AGPL-3.0) si distribuyes o haces pública una versión modificada.
  - Incluir el aviso de copyright y la declaración de la licencia original.
- **No puedes**: Cerrar el código si ofreces el software como un servicio web al público.

Para más detalles, consulta el archivo [LICENSE](LICENSE) completo en el repositorio.
