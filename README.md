# Express Train

## Instructions

1. Create an Express app.

   - Make a new directory called `expressTrain`.
   - Navigate inside the `expressTrain` folder.
   - Create an `app.js` file in the terminal using `touch`.
   - Initialize a Node.js project in the terminal using `npm init -y`.
   - Open the folder.
   - Install Express and Morgan as dependencies using `npm i` and require them in the `app.js` file.
   - Create a server using Express and use Morgan as a logger. Don't forget to use `.json()`.

Create an Express server with the following features:

- Implement a global store that contains product objects in the following format:

[
    {
        name: 'apple',
        price: 1.5
    }
]


### Routes:

1. **Root Route ("/")**:
   - Return everything in the store.

2. **Get All Products Route ("/get-all-products")**:
   - Return a list of all product names in an array.

3. **Get Product by Name Route ("/get-product/:productName")**:
   - Return the full object with name and price for the specified product.

4. **Create Product Route ("/create-product")**:
   - Add a new object to the store and return "Product added".

### Stretch Goals:

- Implement additional checks:
  - Check if the product already exists before adding.
  - If the product exists, return an error message in the response indicating that the item already exists.
  
- Implement a delete route for deleting an item by name:
  - Remove the specified product from the store.
