## Se pide

### Ejercicios básicos

1. **Configurar ESLint 9**
   - Crear un proyecto Node.js.
   - Configurar **ESLint 9** con la nueva configuración *flat config*.
   - Añadir **reglas personalizadas** y **plugins recomendados**.

2. **FizzBuzz con tests**
   - Implementar el ejercicio FizzBuzz con **tests completos** usando el framework que prefieras (Vitest, Jest o AVA).
   - Requisitos:
     - Programa funcionando correctamente.
     - Tests con **cobertura de código 100%**.
     - Configuración de **ESLint** y **Prettier**.

3. **Comparación de fechas**
   - Crear una función `dateCompare` que:
     - Reciba **dos fechas** y devuelva cuál es anterior y cuál posterior:
       ```js
       { startDate: 'ISODateString', endDate: 'ISODateString' }
       ```
     - Si solo recibe una fecha, la compare con el momento actual.
     - Contar con **tests completos** con diferentes casos de uso.
     - Usar librería **Luxon** o nativa `Date`.

4. **FizzBuzz flexible**
   - Modificar FizzBuzz para recibir **condiciones dinámicas**:
     ```js
     const n = 100;
     const conditions = { 2: 'poo', 3: 'fizz', 5: 'buzz', 7: 'bar' };
     // Debe devolver combinaciones: 'poofizz' para 6, 'fizzbuzz' para 15, etc.
     
### Ejercicios avanzados

5. **Testing con mocks**
   - Crear una función que consulte una **API externa** (axios o fetch).
   - Escribir **tests usando mocks** para simular las respuestas.

6. **Calculadora con TDD**
   - Desarrollar una calculadora usando **TDD (Test-Driven Development)**.
   - Escribir los tests primero, luego implementar las funciones.
   - Operaciones: suma, resta, multiplicación, división.
   - Manejo de errores: división por cero, parámetros inválidos.

7. **Testing de funciones asíncronas**
   - Crear funciones **asíncronas** y testearlas:
     - Promesas
     - Async/await
     - Manejo de errores
     - Timeouts

### Ejercicios de integración

8. **Proyecto completo con calidad de código**
   - ESLint 9 configurado con plugins.
   - Prettier integrado.
   - Tests con Vitest o Jest.
   - Cobertura mínima del 80%.
   - SonarQube configurado con Docker.
   - GitHub Actions o GitLab CI para ejecutar tests automáticamente.

9. **Comparar frameworks**
   - Implementar los mismos tests en:
     - Vitest
     - Jest
     - AVA
   - Documentar diferencias, ventajas y desventajas de cada uno.

---

## Entregables

### En clase
- Ejercicios **1, 2 y 3**  
- Entrega del **proyecto FizzBuzz**:
  - Programa funcionando correctamente.
  - ESLint 9 con **flat config**.
  - Prettier configurado e integrado con ESLint.
  - Tests realizados (Vitest, Jest o AVA).
  - Cobertura de código **100%**.
  - Scripts en `package.json`:
    - `npm run lint` → Ejecutar linting
    - `npm run test` → Ejecutar tests
    - `npm run test:watch` → Ejecutar tests en modo watch
    - `npm run test:coverage` → Generar reporte de cobertura
  - Fichero `.gitignore` adecuado.
  - README.md con instrucciones de instalación y uso.

### Tarea
- Ejercicios **4 y 5**
  - **Ejercicio 4**: FizzBuzz flexible con condiciones dinámicas, tests completos.
  - **Ejercicio 5**: Testing con mocks. Implementar al menos 3 funciones que dependan de servicios externos y testearlas.

### Trabajo (opcional)
- Ejercicios **6, 7 y 8**
  - Proyecto completo con:
    - Docker Compose para SonarQube.
    - Configuración de SonarQube.
    - Scripts en `package.json`:
      - `npm run sonar:start` / `npm run sonar:stop` → Arrancar/parar SonarQube
      - `npm run sonar:full` → Ejecutar análisis completo
      - `npm run clean` → Limpiar artefactos
    - Documentación completa en README.md
    - Integración continua (GitHub Actions o GitLab CI) – opcional
