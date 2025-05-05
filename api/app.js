const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.json());
app.use('/api', routes);

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to the MySQL RDS Lab API. Visit /top-customers, /monthly-sales, and other endpoints for insights.');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
