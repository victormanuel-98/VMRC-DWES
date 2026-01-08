# API seleccionada

Crisis Core Fusion API

1. Enlace

https://www.freepublicapis.com/crisis-core-fusion-api

2. Descripción general

La Crisis Core Fusion API es una API pública orientada a proporcionar información relacionada con el sistema de fusiones del videojuego Crisis Core (Final Fantasy VII).

Permite consultar datos estructurados que pueden ser consumidos desde aplicaciones externas mediante peticiones HTTP, devolviendo las respuestas en formato JSON.

3. Tipo de API

- Tipo: API REST
- Acceso: Pública
- Autenticación: No requiere API Key
- Formato de respuesta: JSON
- Método principal: GET

4. Documentación

La documentación de la API se encuentra publicada en:

- Free Public APIs (catálogo)
- Documentación accesible desde el propio endpoint

En ella se describen los recursos disponibles y cómo realizar las peticiones.

5. Uso previsto en el ejercicio

Esta API se utilizará para:

- Integrarla en un servidor Node.js
- Crear una ruta GET que actúe como intermediaria entre el usuario y la API externa
- Obtener y mostrar información relacionada con las fusiones

Aplicar, si procede:

- filtros
- ordenación
- paginado

6. Ejemplo de petición directa (exploración)

Ejemplo de acceso a la API desde navegador o cliente HTTP:

GET <endpoint de la API>

La respuesta se recibe en formato JSON, lo que facilita su tratamiento desde JavaScript.

7. Justificación de la elección

Puedes poner esto tal cual en la entrega:

Se ha elegido la Crisis Core Fusion API por tratarse de una API pública, accesible sin autenticación y bien adaptada al consumo desde Node.js. Proporciona datos en formato JSON y permite practicar la integración de servicios externos mediante peticiones HTTP, cumpliendo los requisitos del Tema 27 de DWES.
