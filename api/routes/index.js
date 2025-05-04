const express = require('express');
const router = express.Router();

router.get('/top-customers', require('../queries/topCustomers'));
router.get('/monthly-sales', require('../queries/monthlySales'));
router.get('/products-never-ordered', require('../queries/neverOrderedProducts'));
router.get('/avg-order-value', require('../queries/avgOrderValue'));
router.get('/frequent-buyers', require('../queries/frequentBuyers'));

module.exports = router;
