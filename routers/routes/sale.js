const express = require('express');
const {
	getAllSale,
	getAnSaleById,
	createNewSale,
	updateAnSaleById,
	deleteSaleById,
} = require('./../controllers/sale');

const saleRouter = express.Router();

saleRouter.get('/', getAllSale);
saleRouter.get('/:id', getAnSaleById);
saleRouter.post('/', createNewSale);
saleRouter.put('/:id', updateAnSaleById);
saleRouter.delete('/:id', deleteSaleById);

module.exports = saleRouter;
