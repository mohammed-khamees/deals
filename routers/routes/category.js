const express = require('express');
const {
	getAllCategory,
	getAnCategoryById,
	createNewCategory,
	updateAnCategoryById,
	deleteCategoryById,
} = require('./../controllers/category');

const categoryRouter = express.Router();

categoryRouter.get('/', getAllCategory);
categoryRouter.get('/:id', getAnCategoryById);
categoryRouter.post('/', createNewCategory);
categoryRouter.put('/:id', updateAnCategoryById);
categoryRouter.delete('/:id', deleteCategoryById);

module.exports = categoryRouter;
