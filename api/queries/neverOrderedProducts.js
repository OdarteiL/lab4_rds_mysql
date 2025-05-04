const pool = require('../db');

module.exports = async (req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT 
        p.product_id,
        p.name AS product_name
      FROM products p
      LEFT JOIN order_items oi ON p.product_id = oi.product_id
      WHERE oi.product_id IS NULL;
    `);
    res.json(rows);
  } catch (error) {
    console.error('Error fetching never ordered products:', error);
    res.status(500).json({ error: 'Failed to retrieve never ordered products' });
  }
};
