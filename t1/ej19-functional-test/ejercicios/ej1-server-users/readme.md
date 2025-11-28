# DWES19 - Users API

Este proyecto consiste en un servidor Node.js que permite gestionar usuarios a través de una API REST. Se han implementado los métodos CRUD: crear, obtener, actualizar y eliminar usuarios.  
El proyecto incluye la configuración del servidor, pruebas con Postman y ejecución de tests automáticos con Newman.

---

## Configuración del proyecto

**Requisitos:**

- Node.js >= 14
- npm
- Postman (o alternativa: Insomnia, Firecamp)

**Instalación:**

```
git clone <repositorio>
cd <ruta_del_proyecto>
npm install
```

**Ejecutar el servidor:**

```
npm run dev
```

**Captura 1:** Servidor corriendo en `http://localhost:3000`
![Servidor corriendo](./imagenes/ej1servercorriendo.png)

---

## API Endpoints

**Crear usuario (POST /users)**

Body de ejemplo:

```
{
  "name": "Prueba API",
  "email": "prueba@example.com"
}
```

**Captura 2:** Crear usuario en Postman
![Crear usuario](./imagenes/ej1postuser.png)

---

**Listar todos los usuarios (GET /users)**

**Captura 3:** Obtener todos los usuarios
![Listar usuarios](./imagenes/ej1arrayuser.png)

---

**Obtener usuario por ID (GET /users/:id)**

**Captura 4:** Obtener un usuario específico
![Get user by ID](./imagenes/ej1obteneruserid.png)

---

**Actualizar usuario (PUT /users/:id)**

Body de ejemplo:

```
{
  "name": "Prueba API Modificada",
  "email": "modificado@example.com"
}
```

**Captura 5:** Actualizar usuario
![Actualizar usuario](./imagenes/ej1updateuser.png)

---

**Eliminar usuario (DELETE /users/:id)**

**Captura 6:** Eliminar usuario y comprobar listado
![Eliminar usuario](./imagenes/ej1deleteuser.png)

---

## Pruebas automáticas con Newman

Se incluye la colección `collection.json` y el entorno `environment.json` para Postman.

Ejecutar tests automáticos:

```
newman run collection.json -e environment.json
```

**Captura 7:** Resultados de tests con Newman
![Tests Newman](./imagenes/ej1terminal.png)


