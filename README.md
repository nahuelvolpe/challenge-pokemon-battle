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
