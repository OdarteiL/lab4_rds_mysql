const pool = require('../db');

module.exports = async (req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT 
        c.customer_id,
        c.name AS customer_name,
        COUNT(o.order_id) AS order_count
      FROM customers c
      JOIN orders o ON c.customer_id = o.customer_id
      GROUP BY c.customer_id, c.name
      HAVING order_count > 1;
    `);
    res.json(rows);
  } catch (error) {
    console.error('Error fetching frequent buyers:', error);
    res.status(500).json({ error: 'Failed to retrieve frequent buyers' });
  }
};
