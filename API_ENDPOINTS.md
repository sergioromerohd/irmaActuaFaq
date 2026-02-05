# Documentación de API para Panel de Administración

Esta documentación detalla los endpoints necesarios para implementar el panel de administración y el login en el frontend.

## 1. Autenticación (Login)

El login es común para todos los usuarios. Si el usuario tiene el rol `admin`, tendrá acceso a las rutas protegidas de administración.

### **POST** `/api/usuarios/login`
Inicia sesión y devuelve un token JWT (Bearer Token) que debe enviarse en los headers de las siguientes peticiones.

*   **Body:**
    ```json
    {
      "nombre": "admin_user",
      "contraseña": "password123"
    }
    ```
*   **Respuesta Exitosa (200 OK):**
    ```json
    {
      "mensaje": "Inicio de sesión exitoso",
      "token": "eyJhbGciOiJIUzI1NiIsInR...",
      "usuario": {
        "id": "60d5ec49f4...",
        "nombre": "admin_user",
        "email": "admin@example.com",
        "roles": ["admin", "user"]
      }
    }
    ```

---

## 2. Gestión de Usuarios (Admin Panel)

Todas las rutas siguientes requieren el header:
`Authorization: Bearer <TOKEN_DE_ADMIN>`

### **GET** `/api/admin/users`
Obtiene un listado paginado de todos los usuarios.

*   **Query Params (Opcionales):**
    *   `page`: Número de página (default: 1)
    *   `limit`: Usuarios por página (default: 20)
*   **Respuesta:**
    ```json
    {
      "data": [
        {
          "_id": "60d5ec...",
          "nombre": "Usuario1",
          "email": "user1@test.com",
          "roles": [{"nombre": "user"}],
          "subscriptionStatus": "free",
          "subscriptionPlan": null,
          "subscriptionEndDate": null,
          "lastLogin": "2023-10-01T10:00:00.000Z",
          "createdAt": "..."
        },
        ...
      ],
      "pagination": {
        "total": 50,
        "page": 1,
        "pages": 3
      }
    }
    ```

### **GET** `/api/admin/users/:id`
Obtiene los detalles completos de un usuario específico por su ID.

*   **Parámetros URL:**
    *   `:id` - ID del usuario.
*   **Respuesta:** Objeto completo del usuario (mismos campos que en el listado).

### **PUT** `/api/admin/users/:id`
Actualiza la información de un usuario (Roles, Suscripción, Datos básicos).
**Nota:** No usar para cambiar la contraseña (usar endpoint específico de perfil si existe).

*   **Parámetros URL:**
    *   `:id` - ID del usuario.
*   **Body (Enviar solo los campos a modificar):**
    ```json
    {
      "nombre": "Nuevo Nombre",
      "email": "nuevo@email.com",
      "subscriptionStatus": "premium",  // Opciones: 'free', 'premium', 'trial'
      "subscriptionPlan": "yearly",
      "subscriptionEndDate": "2025-01-01T00:00:00.000Z"
    }
    ```
    *Para gestionar roles, actualmente se modifica el array de roles, pero se recomienda cuidado al enviar IDs.*

*   **Respuesta:** Objeto del usuario actualizado.

### **DELETE** `/api/admin/users/:id`
Elimina permanentemente a un usuario.

*   **Parámetros URL:**
    *   `:id` - ID del usuario.
*   **Respuesta:**
    ```json
    {
      "mensaje": "Usuario eliminado correctamente",
      "id": "60d5ec..."
    }
    ```

---

## 3. Notas Adicionales para el Frontend
*   **Roles:** Verificar en el login si `usuario.roles` incluye `"admin"` para mostrar/ocultar el acceso al panel.
*   **Suscripciones:** Los campos `subscriptionStatus` pueden ser usados para mostrar badges o estados en la tabla de usuarios.
