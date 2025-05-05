Detailed Project Documentation

### 1. System Overview

This project demonstrates:  
- **Provisioning** a MySQL instance on AWS RDS  
- **Defining** a normalized schema for customers, products, orders, and order items  
- **Loading** sample data  
- **Running** complex analytical queries (top spenders, monthly sales, unused products, etc.)  


### 2. Installation & Prerequisites

1. **Environment**: Ubuntu 22.04 LTS or similar  
2. **Tools**:  
   - MySQL client (install via `sudo apt install mysql-client`)  
   - (Optional) MySQL Workbench for GUI management :contentReference[oaicite:7]{index=7}.  
3. **AWS Setup**:  
   - Create RDS instance (MySQL, free tier)  
   - Configure security group to allow port 3306 from your IP  

### 3. Database Schema

#### 3.1 Tables & Relationships

Main Tables:

	customers

	orders

	order_items

	products

Relationships:

	customers → orders (1:N)

	orders → order_items (1:N)

	products → order_items (1:N)


### 4. SQL Scripts

- **setup_db.sql**: Drops existing tables, creates database objects  
- **insert_data.sql**: Inserts sample records for demonstration  
- **queries.sql**: Contains five analytical queries (top customers, monthly sales, etc.)  


### 5. API Endpoints 

| Endpoint                 | Method | Description                         |
|--------------------------|--------|-------------------------------------|
| `/top-customers`         | GET    | Returns customers ranked by spend   |
| `/monthly-sales`         | GET    | Sales totals for shipped/delivered |
| `/products-never-ordered`| GET    | Lists products with zero orders     |
| `/avg-order-value`       | GET    | AOV grouped by customer country     |
| `/frequent-buyers`       | GET    | Customers with >1 order             |


### 6. Usage Examples

```bash
# List top customers
curl https://api.example.com/top-customers

### 6. Folder Structure

Project Root/
├── api/
│   ├── app.js               # Main Express server setup
│   ├── db.js                # DB connection logic
│   ├── node_modules/        # Node dependencies
│   ├── package.json         # Node dependencies
│   ├── package-lock.json    # Version lock
│   ├── queries/             # SQL query integration
│   ├── README.md            # API-specific info
│   └── routes/              # Express route definitions
├── frontend/                # (Reserved for frontend implementation)
├── mysql/
│   ├── insert_data.sql      # Data population
│   ├── queries.sql          # Analytical queries
│   ├── README.md            # DB-specific info
│   └── setup_db.sql         # Schema setup
├── screenshots/             # Screenshots of outputs/results
└── README.md                # Project overview

