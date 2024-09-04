# Vault App API – An Overview

The "Vault" application is an API developed in TypeScript using Node.js and Express, designed to simulate an environment where an authenticated user can request the tokenization and detokenization of specific information. The API provides clear error messages if the user submits invalid input or attempts to perform operations without being authenticated. For the tokenization/detokenization of information, the built-in Node.js library `crypto` was used. For authentication, `jsonwebtoken` was used.

## Prerequisites, Download and How to Start/Test the Application

You can clone the repository and run the application locally:

```bash
git clone https://github.com/m-test-programs/simple-vault.git
```
