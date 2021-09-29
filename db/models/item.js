const mongoose = require('mongoose');

const item = new mongoose.Schema({
	title: { type: String, required: true },
	img: { type: String, required: true },
	category: { type: String, required: true },
	units: { type: String, required: true },
	offer: { type: Number, required: true },
	price: { type: Number, required: true },
	offerEndDate: { type: Number, required: true },
});

module.exports = mongoose.model('Item', item);
