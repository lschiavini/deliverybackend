# Delivery API

## Quick Summary

This is a simple Node based API, using MySQL as a database and Prisma to act as a bridge between the database and the javascript code.

## Business Logic
To continue...

## Folder Description

The project consists of two main folders, prisma and src.

prisma folder holds the migrations and our schema at schema.prisma.

If you look at the schema.prisma, you'll have everything you need to understand the database entities.

Src folder contains all of our business logic regarding the three main entities: 
    - Delivery
    - Client
    - Deliveryman

## Dependencies to run
    - NodeJS - v16.14.0

## How to Run it
```
yarn install

yarn dev

```