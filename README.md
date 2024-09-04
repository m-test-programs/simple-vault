# Vault App API – An Overview

The "Vault" application is an API developed in TypeScript using Node.js and Express, designed to simulate an environment where an authenticated user can request the tokenization and detokenization of specific information. The API provides clear error messages if the user submits invalid input or attempts to perform operations without being authenticated. For the tokenization/detokenization of information, the built-in Node.js library `crypto` was used. For authentication, `jsonwebtoken` was used.

## Prerequisites, Download and How to Start/Test the Application

## Installation prerequisites:

Node.js >= 20 (https://nodejs.org/en)

## Procedure to start the application:

From the project’s root folder, run the following commands:
1-npm install - Installs the necessary dependencies and libraries. This step might take some time to complete.
2.npm run dev - > start the application on port 3000
3.The application is now ready to be used. To test the endpoints described in the following chapter, it is highly recommended to use the Postman application: https://www.postman.com/downloads

## Endpoints Description

### `POST /authenticate`

**Description**:  
This endpoint is used to authenticate a user by verifying their credentials. If the credentials match the expected values, a JWT token is returned (test login: username: `johnny_deep`, password: `strongpwd`).

**Request**:

- **URL**: `/authenticate`
- **Method**: `POST`
- **Content-Type**: `application/json`

**Requested Body Format**:

```json
{
  "username": "string",
  "password": "string"
}
```

### `POST /tokenize`

**Description**:  
This endpoint is used to tokenize sensitive information provided by the user. The endpoint is protected by an authentication middleware that checks whether the user is authenticated. To access this endpoint, the user must provide a Bearer token in the Authorization header. The user must also provide a payload with a defined structure. If the data in the body does not have the correct structure, an error message will be returned.

**Request**:

- **URL**: `/tokenize`
- **Method**: `POST`
- **Content-Type**: `application/json`

**Authorization Header**:  
The request must include a Bearer token in the following format:

**Requested Body Format**:

```json
{
  "fullName": "string",
  "idNumber": "string | number",
  "creditCard": "string"
}
```

### `POST /detokenize`

**Description**:
This endpoint is used to detokenize previously tokenized information provided by the user. The endpoint is protected by an authentication middleware that checks whether the user is authenticated. To access this endpoint, the user must provide a Bearer token in the Authorization header. The user must also provide a payload with a defined structure. If the data in the body does not have the correct structure, an error message will be returned.

**Request**:

- **URL**: `/detokenize`
- **Method**: `POST`
- **Content-Type**: `application/json`

**Authorization Header**:
The request must include a Bearer token in the following format:

**Requested Body Format**:

```json
{
  "id": "string",
  "data": {
    "fullName": "string",
    "idNumber": "string",
    "creditCard": "string"
  }
}
```

If the request is successful, the endpoint returns a response with the following structure:

```json
{
  "id": "string",
  "data": {
    "fullName": { "value": "string", "found": true | false },
    "idNumber": { "value": "string", "found": true | false },
    "creditCard": { "value": "string", "found": true | false }
  }
}
```
