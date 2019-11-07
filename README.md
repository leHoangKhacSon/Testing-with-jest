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

Step 3: Install Robo 3T and create database test

Step 4: Create users collection users and add document:

```
{
  username: 'son123456',
  password: '123456'
}
```

Step 5: Create users collection books and add 4 document:

```
{
  title: 'book 1',
  author: 'author 1'
  price: 1000,
  quantity: 10,
  sale: 20
}

{
  title: 'book 2',
  author: 'author 2'
  price: 1500,
  quantity: 20,
  sale: 10
}

{
  title: 'book 3',
  author: 'author 3'
  price: 500,
  quantity: 1,
  sale: 20
}

{
  title: 'book 4',
  author: 'author 4'
  price: 3000,
  quantity: 15,
  sale: 5
}
```

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