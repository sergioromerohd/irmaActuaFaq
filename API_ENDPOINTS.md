# Documentación de API para Panel de Administración (Actualizado)

Documentación basada en `usuarioRoutes.js` y `adminRoutes.js`.

## Base URL
`/api-backend` (Proxy hacia `https://irmaback.dbblab.es`)

## 1. Autenticación y Perfil

### **POST** `/api/usuarios/login`
*   **Body:** `{ "nombre": "...", "contraseña": "..." }`
*   **Respuesta:** `{ "token": "...", "usuario": { ... } }`

## 2. Gestión de Usuarios (Admin Routes)
Montado en `/api/admin` (Asunción)

### **GET** `/api/admin/users`
*   **Query:** `page`, `limit`
*   **Respuesta:** `{ "data": [...], "pagination": {...} }`

### **GET** `/api/admin/users/:id`
*   **Respuesta:** Objeto usuario completo.

### **PUT** `/api/admin/users/:id`
*   **Body:** Campos a actualizar (excluyendo contraseña).
    *   `nombre`, `email`
    *   `subscriptionStatus`: 'free', 'premium', 'trial'
    *   `subscriptionEndDate`: ISO Date
    *   `roles`: Array de IDs de rol (si se pasa completo) - *Nota: El backend hace un `findByIdAndUpdate` directo con el body, así que se puede actualizar roles enviando el array de IDs.*

### **DELETE** `/api/admin/users/:id`
*   Elimina usuario. Protegido contra auto-eliminación.

## 3. Rutas de Usuario Específicas
Montado en `/api/usuarios`

### **POST** `/api/usuarios/crear`
*   Registrar nuevo usuario.
*   **Body:** `{ "nombre": "...", "email": "...", "contraseña": "..." }`

### **GET** `/api/usuarios/roles`
*   Obtener lista de todos los roles disponibles.
*   **Respuesta:** `[{ "_id": "...", "nombre": "..." }]`

### **POST** `/api/usuarios/rol/crear`
*   Crear nuevo rol.
*   **Body:** `{ "nombre": "..." }`
*   **Auth:** Requires Admin.

### **POST** `/api/usuarios/usuario/:usuarioNombre/rol`
*   Asignar un rol a un usuario.
*   **Body:** `{ "rolId": "..." }`

### **DELETE** `/api/usuarios/usuario/:usuarioNombre/rol`
*   Quitar un rol a un usuario.
*   **Body:** `{ "rolId": "..." }`
