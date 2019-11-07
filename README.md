# Testing API with Jestjs

## Introduce

This project use jest for testing Nodejs API. Server use Express, mongoose, Jsonwebtoken and bcrypt. Server provide three API for testing:

```
POST/api/user/register

POST/api/user/login

GET/api/books
```
## Installation

using npm:
```
$ npm install
```

using yarn:
```
$ yarn install
```
## Setting

Step 1: Create .env file in server folder 

Step 2: Create key PORT={value} and key SECRECT_KEY={random value}

Step 3: Completed

## Running test

Using npm:
```
In patch */Testing-with-jest/server

$ npm run dev

In patch */Testing-with-jest/test

$ npm test
```

Using yarn:
```
In patch */Testing-with-jest/server

$ yarn run dev

In patch */Testing-with-jest/test

$ yarn test
```