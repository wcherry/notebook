var mongoose = require("mongoose");

var noteBookSchema = new mongoose.Schema({
	title:{type: String},
	notes:{type: Array}
});

module.exports = mongoose.model("Notebook", noteBookSchema);
