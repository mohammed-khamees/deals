const mongoose = require('mongoose');

const category = new mongoose.Schema({
	title: { type: String, required: true },
	img: { type: String, required: true },
});

module.exports = mongoose.model('Category', category);
