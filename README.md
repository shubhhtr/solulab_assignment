Design:

The API is built using Node.js and Mongoose, which is a package that simplifies working with MongoDB. It is designed to provide RESTful endpoints that allow users to create, read, update, and delete Product and Category data. The Product and Category models are created in Mongoose and have required fields and references to each other. The API endpoints are implemented using Express, which is a popular web framework for Node.js.

The API follows the typical RESTful API design patterns, where each endpoint corresponds to a specific HTTP method and route. The /create endpoint is used to create a new Product and Category, the /read/:name endpoint reads a particular Product record with its corresponding Category, the /readAll endpoint reads all Product records with their corresponding Categories, the /update/:id endpoint updates a particular Product record, and the /delete/:id endpoint deletes a particular Product record.

The API also includes unit tests and API documentation, which makes it easier for developers to understand how to use the API.

How to Run the Code:

To run the API, you will need to follow these steps:

1.Install Node.js and MongoDB on your computer.

2.Clone the repository that contains the API code.

3.Install the required dependencies using the npm install command.

4.Create a .env file in the root directory of the project with the following environment variables:
MONGODB_URI=mongodb://localhost:27017/exampledb
PORT=3000


The MONGODB_URI variable should contain the URI for your MongoDB database, and PORT should be set to the port number that you want the API to listen on.

Start the API by running the npm start command.
Once the API is running, you can test the endpoints using a tool like Postman.