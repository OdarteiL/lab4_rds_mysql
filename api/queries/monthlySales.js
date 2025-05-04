const pool = require('../db');

module.exports = async (req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT 
        DATE_FORMAT(o.order_date, '%Y-%m') AS month,
        SUM(oi.quantity * oi.unit_price) AS total_sales
      FROM orders o
      JOIN order_items oi ON o.order_id = oi.order_id
      WHERE o.status IN ('Shipped', 'Delivered')
      GROUP BY month
      ORDER BY month;
    `);
    res.json(rows);
  } catch (error) {
    console.error('Error fetching monthly sales report:', error);
    res.status(500).json({ error: 'Failed to retrieve monthly sales report' });
  }
};
