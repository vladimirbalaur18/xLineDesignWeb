# API Protection Implementation

## Overview

The property management API endpoints have been secured with JWT-based authentication. Only authenticated admin users can create, update, or delete properties.

## Protected Endpoints

### Creating Properties

- **POST** `/api/properties`
- **POST** `/api/property/[slug]`

### Updating Properties

- **PUT** `/api/properties`
- **PUT** `/api/property/[slug]`

### Deleting Properties

- **DELETE** `/api/properties/[slug]`
- **DELETE** `/api/property/[slug]`

## Authentication

### How to Authenticate

1. **Login to Admin Panel**: First, login through the admin panel at `/admin`
2. **Get JWT Token**: After successful login, you'll receive a JWT token
3. **Include Token in Requests**: Add the token to your API requests

### Request Headers

Include the JWT token in the Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

### Example Request

```javascript
const response = await fetch("/api/properties", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer <your-jwt-token>",
  },
  body: JSON.stringify({
    slug: "new-property",
    title: "New Property",
    description: "Property description",
    // ... other property data
  }),
});
```

## Error Responses

### 401 Unauthorized

Returned when:

- No authentication token is provided
- Invalid or expired token
- Token format is incorrect

```json
{
  "error": "Authentication required"
}
```

### 403 Forbidden

Returned when:

- User doesn't have admin privileges

## Security Features

1. **JWT Token Validation**: Tokens are verified for authenticity and expiration
2. **Role-Based Access**: Only users with admin role can access protected endpoints
3. **Token Expiration**: Tokens expire after 24 hours for security
4. **Secure Token Storage**: Tokens are stored in HTTP-only cookies when possible

## Public Endpoints

The following endpoints remain public and don't require authentication:

- **GET** `/api/properties` - List all properties
- **GET** `/api/property/[slug]` - Get specific property details
- **POST** `/api/contact` - Submit contact form
- **POST** `/api/auth/send-otp` - Send OTP for admin login
- **POST** `/api/auth/verify-otp` - Verify OTP for admin login
- **POST** `/api/auth/logout` - Logout admin user

## Implementation Details

The protection is implemented using a middleware function `requireAdminAuth()` that:

1. Extracts the JWT token from the Authorization header or cookies
2. Verifies the token's authenticity and expiration
3. Checks that the user has admin role
4. Returns the authenticated user or throws an authentication error

This ensures that all property modification operations are properly secured while keeping read operations public for the website visitors.
