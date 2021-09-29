const mongoose = require('mongoose');

const sale = new mongoose.Schema({
	title: { type: String, required: true },
	img: { type: String, required: true },
	title: { type: String, required: true },
	units: { type: String, required: true },
	offer: { type: Number, required: true },
	price: { type: Number, required: true },
	offerEndDate: { type: Number, required: true },
	category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
});

module.exports = mongoose.model('Sale', sale);
