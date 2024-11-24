# Bike Store

This project implements a restful API for bike store. The API is build using Node js, Express JS, Typescript, and mongoDB with mongoose for handling data persistence.

## Project Structure

### 1. Server Setup (server.ts)
  - the main entry point of the application. It connects to mongoDB database using Mongoose. 

### 2. Product Model (product.model.ts)
   - Defines the MongoDB Schema for bike products using mongoose.

### 3. Product Interface (product.interface.ts)
   - Defines typescript types to ensure type safety throughout the application.

### 4. Routes (product.route.ts)
   - Defines Express route for managing CRUD(get:fetch all bike, POST: Create a new bike, GET/:productId: fetch a specific bike, PUT: update a bike, DELETE:delete a specific bike) operation

### 5. Controller(product.controller.ts)
   - The controller handle the request and response

### 6. Service(product.service.ts)
   - contains the database operation using mongoose model.  

## Key Features
- <strong>CRUD Operation:</strong> The API allows user to crete, read, update and get bike from database.

- <strong>Error Handling:</strong> Each route ensure that failed operation are caught and appropriate error message are returned to the user.

- <strong>Type Safety:</strong> Typescript is used throughout the project to provide strong type safety, making the development process more reliable. 