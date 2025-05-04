// const pool = require('../db');

// module.exports = async (req, res) => {
//   const [rows] = await pool.query(`
//     SELECT c.customer_id, c.name AS customer_name, 
//       SUM(oi.quantity * oi.unit_price) AS total_spent
//     FROM customers c
//     JOIN orders o ON c.customer_id = o.customer_id
//     JOIN order_items oi ON o.order_id = oi.order_id
//     WHERE o.status IN ('Shipped', 'Delivered')
//     GROUP BY c.customer_id, c.name
//     ORDER BY total_spent DESC;
//   `);
//   res.json(rows);
// };
const pool = require('../db');

module.exports = async (req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT c.customer_id, c.name AS customer_name, 
        SUM(oi.quantity * oi.unit_price) AS total_spent
      FROM customers c
      JOIN orders o ON c.customer_id = o.customer_id
      JOIN order_items oi ON o.order_id = oi.order_id
      WHERE o.status IN ('Shipped', 'Delivered')
      GROUP BY c.customer_id, c.name
      ORDER BY total_spent DESC;
    `);
    res.json(rows);
  } catch (error) {
    console.error("Error fetching top customers:", error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
};
