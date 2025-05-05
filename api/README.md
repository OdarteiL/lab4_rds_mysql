Project Structure

├── api/ # Node.js backend application
│ ├── app.js # Entry point for Express server
│ ├── db.js # MySQL database connection
│ ├── queries/ # Raw SQL queries
│ ├── routes/ # API route handlers
│ └── README.md # API-specific documentation
│
├── frontend/ # Frontend (placeholder for future expansion)
│
├── mysql/ # SQL files for schema and data
│ ├── setup_db.sql # Database schema creation
│ ├── insert_data.sql# Sample data insertion
│ ├── queries.sql # Queries for insights and endpoints
│ └── README.md # Database documentation
│
├── screenshots/ # Screenshots for documentation
│
└── README.md # Project-level documentation (this file)


## Getting Started

### Prerequisites

- Node.js (v18 or later)
- MySQL client
- AWS RDS credentials (hostname, username, password)

### Setup Instructions

1. **Install Dependencies**

cd api
npm install

2. Set Up the Database

mysql -h [RDS_ENDPOINT] -u admin -p < mysql/setup_db.sql
mysql -h [RDS_ENDPOINT] -u admin -p < mysql/insert_data.sql

3. Run the Server

nodemon app.js


### API Overview
Base URL: http://localhost:3000

Endpoint	        Method	     	Description
/top-customers		GET		Top 5 customers by total spend
/monthly-sales		GET		Monthly sales for shipped/delivered orders
/products-never-ordered	GET		Products that have never been ordered
/avg-order-value	GET		Average order value by country
/frequent-buyers	GET		Customers with more than one order

Refer to api/README.md for full documentation.

4. Technologies Used
	Backend: Node.js, Express.js

	Database: MySQL (AWS RDS)

	Language: JavaScript (ES6+), SQL


5. Future Enhancements
	Add authentication (JWT)

	Containerization with Docker

	Frontend UI with React 

	API rate limiting and monitoring


