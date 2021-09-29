const express = require('express');
const cors = require('cors');

require('./db');
require('dotenv').config();

//routers
const categoryRouter = require('./routers/routes/category');
const saleRouter = require('./routers/routes/sale');

const app = express();

//built-in middlewares
app.use(express.json());

//third-party middlewares
app.use(cors());

// router middleware
app.use('/categories', categoryRouter);
app.use('/sales', saleRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`server on ${PORT}`);
});
