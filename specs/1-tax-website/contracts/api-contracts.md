# API Contracts: Tax Consulting Firm Website

## Contact Form API

### POST /api/contact

**Description**: Submit a contact form entry to the tax consulting firm

**Request**:
- Method: POST
- Endpoint: `/api/contact`
- Content-Type: application/json

**Request Body**:
```json
{
  "name": "string (required, min 2 characters)",
  "email": "string (required, valid email format)",
  "phone": "string (optional, valid phone format)",
  "message": "string (required, 10-1000 characters)"
}
```

**Validation**:
- name: Required, minimum 2 characters
- email: Required, must be valid email format
- phone: Optional, if provided must be valid phone format
- message: Required, between 10 and 1000 characters

**Response**:
- Success: 200 OK
```json
{
  "success": true,
  "message": "Contact form submitted successfully",
  "id": "string (ID of the created submission)"
}
```

- Validation Error: 400 Bad Request
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": {
    "field": ["error message"]
  }
}
```

- Server Error: 500 Internal Server Error
```json
{
  "success": false,
  "message": "Internal server error"
}
```

## Content API

### GET /api/services

**Description**: Retrieve all tax services offered by the firm

**Request**:
- Method: GET
- Endpoint: `/api/services`

**Response**:
- Success: 200 OK
```json
[
  {
    "id": "string",
    "title": "string",
    "description": "string",
    "icon": "string (optional)",
    "order": "number"
  }
]
```

### GET /api/testimonials

**Description**: Retrieve all testimonials from happy clients

**Request**:
- Method: GET
- Endpoint: `/api/testimonials`

**Response**:
- Success: 200 OK
```json
[
  {
    "id": "string",
    "clientName": "string",
    "company": "string (optional)",
    "content": "string",
    "rating": "number (optional)",
    "date": "string (ISO date)",
    "featured": "boolean"
  }
]
```

### GET /api/team

**Description**: Retrieve all team members of the firm

**Request**:
- Method: GET
- Endpoint: `/api/team`

**Response**:
- Success: 200 OK
```json
[
  {
    "id": "string",
    "name": "string",
    "title": "string",
    "bio": "string (optional)",
    "image": "string (optional)",
    "order": "number"
  }
]
```