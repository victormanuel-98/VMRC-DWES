# Gestor de Notas

Proyecto desarrollado en la asignatura **DWES**, ampliado progresivamente con lo visto en el tema 23.

El objetivo del proyecto es implementar un **gestor de notas** con funcionalidades de gestión de ficheros y una **API REST documentada mediante OpenAPI (Swagger)**.

## Funcionalidades implementadas

* Importación (subida) de uno o varios ficheros con extensión `.note`.
* Exportación de notas para su descarga en formato fichero.
* Filtrado de notas para mejorar la usabilidad.
* Implementación de una API REST para la gestión de notas.
* Documentación técnica completa de la API utilizando **OpenAPI 3.x (Swagger)**.
* Integración de **Swagger UI** para la visualización y prueba de los endpoints.

---

## Instalación

Se parte del proyecto desarrollado en el **tema 21**, ampliado en el **tema 22**, y extendido en el **tema 23** con la documentación Swagger.

## Documentación de la API (OpenAPI / Swagger)

El proyecto incluye documentación técnica de la API REST conforme a la especificación **OpenAPI 3.x**.

### Contenido documentado

* Endpoints de la API para la gestión de notas.
* Métodos HTTP (`GET`, `POST`, `PUT`, `DELETE`).
* Parámetros de ruta, consulta y cuerpo de las peticiones.
* Definición de schemas de datos.
* Responses de éxito y error.
* Ejemplos de uso.
* Definición del sistema de seguridad.

### Acceso a Swagger UI

Una vez iniciado el servidor, la documentación interactiva está disponible en:

```
http://localhost:3000/api-docs
```

El puerto puede variar según la configuración definida en el archivo `.env`.

---

## Ejecución y resultados

### Arranque del servidor

El servidor se levanta correctamente desde la terminal de VS Code utilizando bash.

![server up](./samples/images/notasServerUp.png)

---

### Visualización de la documentación Swagger

La interfaz Swagger UI permite consultar y probar los endpoints de la API de forma interactiva.

![swagger ui](./samples/images/swaggerUI.png)

---

### Visualización de notas con extensión `.note`

Listado de notas almacenadas en el sistema.

![Todas las notas](./samples/images/notasContenidoNotas.png)

---

### Visualización de archivos con extensión `.pdf`

Listado de archivos exportados en formato PDF.

![notas pdf](./samples/images/notasArchivosPdf.png)

---

Si quieres, en el próximo mensaje puedo:

* Ajustarlo aún más a **formato rúbrica** (muy típico de ADAITS), o
* Redactarte un **texto corto de justificación del Tema 23** para pegarlo directamente en la entrega.
