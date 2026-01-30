# Aplicación Node.js - Despliegue en Vercel

Aplicación web desarrollada con Node.js y Express, desplegada en Vercel.

## 🚀 Tecnologías

- Node.js
- Express
- Vercel

## 📋 Características

La aplicación incluye las siguientes rutas:

- **GET /** - Página principal con mensaje de bienvenida
- **GET /api/info** - Información sobre la aplicación
- **GET /api/saludo/:nombre** - Saludo personalizado
- **GET /api/calcular** - Calculadora (parámetros: num1, num2, operacion)
- **POST /api/usuario** - Registro de usuario (JSON body)

## 🔧 Instalación local

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

## 📦 Despliegue en Vercel

### Opción 1: Desde la línea de comandos

1. Instalar Vercel CLI:
```bash
npm install -g vercel
```

2. Iniciar sesión:
```bash
vercel login
```

3. Desplegar:
```bash
vercel
```

### Opción 2: Desde el dashboard de Vercel

1. Sube tu código a un repositorio de GitHub
2. Ve a [vercel.com](https://vercel.com)
3. Haz clic en "Add New Project"
4. Importa tu repositorio de GitHub
5. Vercel detectará automáticamente la configuración
6. Haz clic en "Deploy"

## 📝 Ejemplos de uso

### Saludo personalizado
```
GET https://tu-app.vercel.app/api/saludo/Juan
```

### Calculadora
```
GET https://tu-app.vercel.app/api/calcular?num1=10&num2=5&operacion=suma
```

### Registro de usuario
```
POST https://tu-app.vercel.app/api/usuario
Content-Type: application/json

{
  "nombre": "Juan",
  "email": "juan@ejemplo.com",
  "edad": 25
}
```

## 📌 URLs del Proyecto

- **Repositorio**: [Añadir URL del repositorio]
- **Aplicación desplegada**: [Añadir URL de Vercel]

## 👤 Autor

VMRC-DWES - T2 - Ejercicio 47
