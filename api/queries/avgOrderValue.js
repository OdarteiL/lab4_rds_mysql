const pool = require('../db');

module.exports = async (req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT 
        c.country,
        AVG(order_total) AS avg_order_value
      FROM (
        SELECT 
          o.order_id,
          c.country,
          SUM(oi.quantity * oi.unit_price) AS order_total
        FROM orders o
        JOIN customers c ON o.customer_id = c.customer_id
        JOIN order_items oi ON o.order_id = oi.order_id
        GROUP BY o.order_id, c.country
      ) AS sub
      GROUP BY country;
    `);
    res.json(rows);
  } catch (error) {
    console.error('Error fetching average order value by country:', error);
    res.status(500).json({ error: 'Failed to retrieve average order value by country' });
  }
};
