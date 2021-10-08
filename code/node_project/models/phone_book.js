const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Person = new Schema ({
        name: { type: String, required: true },
        number: { type: String, required: true },
	age: {type: String, required: true},
});



module.exports = mongoose.model('Person', Person)
