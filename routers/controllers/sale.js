const saleModel = require('../../db/models/sale');

const getAllSale = (req, res) => {
	saleModel
		.find({})
		.then((result) => {
			res.status(200).json(result);
		})
		.catch((err) => {
			res.send(err);
		});
};

const getAnSaleById = (req, res) => {
	const _id = req.params.id;

	if (!_id) return res.status(404).json('not found');

	saleModel
		.findOne({ _id })
		.then((result) => {
			res.status(200).json(result);
		})
		.catch((err) => {
			res.send(err);
		});
};

const createNewSale = (req, res) => {
	const { title, img } = req.body;

	const sale = new saleModel({
		title,
		img,
	});

	sale
		.save()
		.then((result) => {
			res.status(201).json(result);
		})
		.catch((err) => {
			res.send(err);
		});
};

const updateAnSaleById = (req, res) => {
	const id = req.params.id;

	saleModel
		.findByIdAndUpdate(id, req.body, { new: true })
		.then((result) => {
			res.status(200).json(result);
		})
		.catch((err) => {
			res.send(err);
		});
};

const deleteSaleById = (req, res) => {
	const id = req.params.id;

	saleModel
		.findByIdAndDelete(id)
		.then((result) => {
			res.status(200).json({
				success: true,
				message: `Success Delete Sale with id => ${id}`,
			});
		})
		.catch((err) => {
			res.send(err);
		});
};

module.exports = {
	getAllSale,
	getAnSaleById,
	createNewSale,
	updateAnSaleById,
	deleteSaleById,
};
