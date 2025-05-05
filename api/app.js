const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.json());
app.use('/api', routes);

// Home route with clickable links
app.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to the MySQL RDS Lab API</h1>
    <p>Explore the available endpoints below:</p>
    <ul>
      <li><a href="http://3.249.48.122:3000/api/top-customers" target="_blank">/api/top-customers</a></li>
      <li><a href="http://3.249.48.122:3000/api/monthly-sales" target="_blank">/api/monthly-sales</a></li>
      <li><a href="http://3.249.48.122:3000/api/products-never-ordered" target="_blank">/api/products-never-ordered</a></li>
      <li><a href="http://3.249.48.122:3000/api/avg-order-value" target="_blank">/api/avg-order-value</a></li>
      <li><a href="http://3.249.48.122:3000/api/frequent-buyers" target="_blank">/api/frequent-buyers</a></li>
    </ul>
  `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
