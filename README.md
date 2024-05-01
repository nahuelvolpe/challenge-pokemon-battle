## Nota importante:
>Hola! quería aclarar que realice la aplicación con las tecnologías y requisitos pedidos, decidí no agregar más de eso para cumplir con los requisitos y no generar ninguna posible confusión. Por ejemplo no he agregado Typescript en la aplicación del frontend, sin embargo si ustedes desean puedo hacer una revisión y agregarlo como también el testing, y cualquier otra librería.

# Battle of Pokemon App

## Instrucciones

### 1. Descargar proyecto
- Crear una carpeta
- Clonar el repositorio en esa carpeta
   
### 2. Instalar dependencias

**Abrir una terminal**

**Backend**

- Dirigirse a la carpeta `/backend`
- Instalar las dependencias con `npm install`
- Instalar Nest CLI con `npm install -g @nestjs/cli`
   
**Frontend**
- Dirigirse a la carpeta `/frontend`
- Instalar las dependencias con `npm install`
   
### 3. Ejecutar aplicaciones
**Backend**

- Desde la carpeta `/backend` ejecutar el comando `nest start`

**Frontend**

- Desde la carpeta `/frontend` ejecutar el comando `npm run dev`

Una vez ejecutada las 2 aplicaciones se puede abrir la aplicación desde la URL indicada
en la terminal luego de ejecutar la aplicación del frontend.

## Base de datos
La base de datos se llama `sql`, está dentro de la carpeta `/backend/db`.
Con cualquier software para administrar base de datos SQLite se pueden observar las tablas
***pokemon*** que contiene todos los pokemons y ***battle*** que contiene el historial de batallas.
