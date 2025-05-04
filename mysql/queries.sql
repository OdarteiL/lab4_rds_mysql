-- 1. Top Customers by Spending
SELECT c.name, SUM(oi.quantity * oi.unit_price) AS total_spent
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
JOIN order_items oi ON o.order_id = oi.order_id
GROUP BY c.customer_id
ORDER BY total_spent DESC;

-- 2. Monthly Sales Report (Only Shipped/Delivered)
SELECT DATE_FORMAT(order_date, '%Y-%m') AS month, 
       SUM(oi.quantity * oi.unit_price) AS total_sales
FROM orders o
JOIN order_items oi ON o.order_id = oi.order_id
WHERE status IN ('Shipped', 'Delivered')
GROUP BY month
ORDER BY month;

-- 3. Products Never Ordered
SELECT name
FROM products
WHERE product_id NOT IN (
  SELECT DISTINCT product_id FROM order_items
);

-- 4. Average Order Value by Country
SELECT c.country, 
       AVG(order_total) AS avg_order_value
FROM (
    SELECT o.order_id, o.customer_id, 
           SUM(oi.quantity * oi.unit_price) AS order_total
    FROM orders o
    JOIN order_items oi ON o.order_id = oi.order_id
    GROUP BY o.order_id
) order_totals
JOIN customers c ON c.customer_id = order_totals.customer_id
GROUP BY c.country;

-- 5. Frequent Buyers (More Than One Order)
SELECT c.name, COUNT(*) AS order_count
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
GROUP BY c.customer_id
HAVING COUNT(*) > 1;
