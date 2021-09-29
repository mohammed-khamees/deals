const categoryModel = require('./../../db/models/category');

const getAllCategory = (req, res) => {
	categoryModel
		.find({})
		.then((result) => {
			res.status(200).json(result);
		})
		.catch((err) => {
			res.send(err);
		});
};

const getAnCategoryById = (req, res) => {
	const _id = req.params.id;

	if (!_id) return res.status(404).json('not found');

	categoryModel
		.findOne({ _id })
		.then((result) => {
			res.status(200).json(result);
		})
		.catch((err) => {
			res.send(err);
		});
};

const createNewCategory = (req, res) => {
	const { title, img } = req.body;

	const category = new categoryModel({
		title,
		img,
	});

	category
		.save()
		.then((result) => {
			res.status(201).json(result);
		})
		.catch((err) => {
			res.send(err);
		});
};

const updateAnCategoryById = (req, res) => {
	const id = req.params.id;

	categoryModel
		.findByIdAndUpdate(id, req.body, { new: true })
		.then((result) => {
			res.status(200).json(result);
		})
		.catch((err) => {
			res.send(err);
		});
};

const deleteCategoryById = (req, res) => {
	const id = req.params.id;

	categoryModel
		.findByIdAndDelete(id)
		.then((result) => {
			res.status(200).json({
				success: true,
				message: `Success Delete category with id => ${id}`,
			});
		})
		.catch((err) => {
			res.send(err);
		});
};

module.exports = {
	getAllCategory,
	getAnCategoryById,
	createNewCategory,
	updateAnCategoryById,
	deleteCategoryById,
};
