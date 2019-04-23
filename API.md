# DB Schema
![Schema Flowchart](/schema.svg)

# Register endpoints

## `POST /api/register`

### injest

```json
[
    {
        "userName": "string",
        "email": "string",
        "firstName": "string",
        "lastName": "string",
        "password": "string"
    }
]
```

### returns

```json
[
    {
        "userName": "string",
        "userId": "integer",
        "firstName": "string",
        "lastName": "string",
        "token": "string"
    }
]
```

# Login endpoints

## `POST /api/login`

### injest
```json
[
    {
        "userName": "string",
        "password": "string"
    }
]
```