-- INSERT CUSTOMERS
INSERT INTO customers VALUES
(1, 'Alice Smith', 'alice@example.com', 'USA'),
(2, 'Bob Jones', 'bob@example.com', 'Canada'),
(3, 'Charlie Zhang', 'charlie@example.com', 'UK');

-- INSERT PRODUCTS
INSERT INTO products VALUES
(1, 'Laptop', 'Electronics', 1200.00),
(2, 'Smartphone', 'Electronics', 800.00),
(3, 'Desk Chair', 'Furniture', 150.00),
(4, 'Coffee Maker', 'Appliances', 85.50);

-- INSERT ORDERS
INSERT INTO orders VALUES
(1, 1, '2023-11-15', 'Shipped'),
(2, 2, '2023-11-20', 'Pending'),
(3, 1, '2023-12-01', 'Delivered'),
(4, 3, '2023-12-03', 'Cancelled');

-- INSERT ORDER ITEMS
INSERT INTO order_items VALUES
(1, 1, 1, 1, 1200.00),
(2, 1, 4, 2, 85.50),
(3, 2, 2, 1, 800.00),
(4, 3, 3, 2, 150.00),
(5, 4, 1, 1, 1200.00);
