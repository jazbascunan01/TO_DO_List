# 📝 TO-DO List App - Challenge Academia ForIT 2025

![GitHub repo size](https://img.shields.io/github/repo-size/jazbascunan01/TO_DO_List?color=brightgreen&style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/jazbascunan01/TO_DO_List?style=flat-square)
![GitHub license](https://img.shields.io/github/license/jazbascunan01/TO_DO_List?style=flat-square)
![Made with](https://img.shields.io/badge/Made%20with-React%20%26%20Express-blue?style=flat-square&logo=react)

---

## 🎯 Descripción del Proyecto

Este proyecto es una aplicación web simple de lista de tareas, desarrollada como parte del **Challenge de ingreso a la Academia ForIT 2025**. La app permite **crear, ver, editar y eliminar tareas** utilizando una arquitectura basada en frontend (React) y backend (Node.js con Express). 

El foco principal es demostrar conocimientos básicos sobre:
- Git y GitHub
- JavaScript moderno
- Node.js y Express
- React y manejo de estado con hooks
- Estructura de carpetas frontend/backend
- Consumo de APIs REST

---

## 🚀 Funcionalidades Principales

✅ Ver todas las tareas  
✅ Crear nuevas tareas  
✅ Editar tareas existentes  
✅ Eliminar tareas  
✅ Interfaz reactiva y simple  
✅ API REST con almacenamiento en memoria  
✅ Manejo básico de errores

---

## 📂 Estructura del Proyecto

```bash
TO_DO_List/
├── backend/              # API REST - Node.js + Express
│   ├── server.js
│   └── routes/
├── frontend/             # Interfaz de usuario - React + Vite
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskForm.jsx
│   │   │   ├── TaskItem.jsx
│   │   │   └── TaskList.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── vite.config.js
├── .env
└── README.md
```

---

## ⚙️ Tecnologías Utilizadas

| Frontend 🖥️            | Backend ⚙️          |
|-------------------------|---------------------|
| React (con Vite)        | Node.js             |
| React Router            | Express             |
| JavaScript ES6+         | dotenv              |
| CSS básico              | Middleware custom   |

---

## 🔧 Instalación y Ejecución

### 🔹 1. Clonar el repositorio

```bash
git clone https://github.com/jazbascunan01/TO_DO_List.git
cd TO_DO_List
```

---

### 🔹 2. Ejecutar el Backend

```bash
cd backend
npm install
npm run dev
```

> 📌 Asegurate de tener un archivo `.env` con la siguiente variable:

```env
PORT=3000
```

---

### 🔹 3. Ejecutar el Frontend

```bash
cd frontend
npm install
npm run dev
```

> 📌 También creá un archivo `.env` en `/frontend`:

```env
VITE_API_URL=http://localhost:3000/api
```

---

## 🖼️ Capturas de Pantalla

### 📋 Vista general de la lista
![Task List](https://github.com/jazbascunan01/TO_DO_List/blob/test/screenshoots/taskList.png)

### 📝 Formulario para nueva tarea
![Task Form](https://raw.githubusercontent.com/jazbascunan01/TO_DO_List/main/screenshots/task-form.png)

---

## 🧪 Endpoints de la API

| Método | Endpoint            | Descripción                       |
|--------|---------------------|-----------------------------------|
| GET    | `/api/tasks`        | Obtener todas las tareas          |
| POST   | `/api/tasks`        | Crear una nueva tarea             |
| PUT    | `/api/tasks/:id`    | Editar una tarea existente        |
| DELETE | `/api/tasks/:id`    | Eliminar una tarea por ID         |

---

## 🧠 Conocimientos Aplicados

- Configuración de servidor básico con Express
- Rutas RESTful y manejo de métodos HTTP
- Comunicación cliente-servidor con `fetch`
- Uso de Hooks (`useState`, `useEffect`)
- Modularización de componentes React
- Enrutamiento con `react-router-dom`
- Control de versiones con Git (commits descriptivos, ramas)
- Configuración de variables de entorno

---

## 🎁 Bonus

💡 Características extra que se podrían agregar en el futuro:
- Filtros por tareas completadas o pendientes
- Validaciones de formulario
- Persistencia en base de datos (ej. sqlite3)
- Modo oscuro 🌙
- Uso de Tailwind CSS o Bootstrap
- TypeScript

---

## 📄 Licencia

Este proyecto está licenciado bajo la [MIT License](./LICENSE).

---

## 📬 Contacto

Desarrollado por **Jazmín Bascuñan**  
📧 jazbascunan01@gmail.com  
🔗 [Mi GitHub](https://github.com/jazbascunan01)

---
