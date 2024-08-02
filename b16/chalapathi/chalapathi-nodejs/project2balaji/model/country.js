const mongoose = require('mongoose')
const Schema = mongoose.Schema
const passportLocalMongoose = require('passport-local-mongoose');
var country = new Schema({
	userid:{
		type:Number
	},
	username:{
		type:String
	},
	address:{
		type:String
	},
	dob:{
		type:Date
	},
	password:{
		type:String
	}

})

country.plugin(passportLocalMongoose);

module.exports = mongoose.model('Country', country)