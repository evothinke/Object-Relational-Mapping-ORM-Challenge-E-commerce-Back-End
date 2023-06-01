# E-commerce Back End Starter Code


This project includes the backend routes for managing categories, products, and tags in an e-commerce application.
<a href="https://drive.google.com/file/d/1EumTsiAfDx0uqumTm5Wb-C-J9v7WArxb/view">See the app in action</a>

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install and run this project, follow these steps:

1. Clone the repository.
2. Install the required dependencies.
3. Set up the database and configure the database connection.
4. Run the application using the command `npm start`.

## Usage

This project provides API endpoints for managing categories, products, and tags in an e-commerce application. It uses Express.js as the web framework and Sequelize as the ORM for interacting with the database.

### Categories

- `GET /api/categories`: Retrieves all categories and their associated products.
- `GET /api/categories/:id`: Retrieves a specific category by its ID and includes its associated products.
- `POST /api/categories`: Creates a new category.
- `PUT /api/categories/:id`: Updates a category by its ID.
- `DELETE /api/categories/:id`: Deletes a category by its ID.

### Products

- `GET /api/products`: Retrieves all products and includes their associated categories and tags.
- `GET /api/products/:id`: Retrieves a specific product by its ID and includes its associated categories and tags.
- `POST /api/products`: Creates a new product.
- `PUT /api/products/:id`: Updates a product by its ID.
- `DELETE /api/products/:id`: Deletes a product by its ID.

### Tags

- `GET /api/tags`: Retrieves all tags and includes their associated products.
- `GET /api/tags/:id`: Retrieves a specific tag by its ID and includes its associated products.
- `POST /api/tags`: Creates a new tag.
- `PUT /api/tags/:id`: Updates a tag by its ID.
- `DELETE /api/tags/:id`: Deletes a tag by its ID.

## Contributing

Contributions to this project are welcome. If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).