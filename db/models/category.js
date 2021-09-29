const mongoose = require('mongoose');

const category = new mongoose.Schema({
	title: { type: String, required: true },
	img: { type: String, required: true },
	color: { type: String },
});

module.exports = mongoose.model('Category', category);
