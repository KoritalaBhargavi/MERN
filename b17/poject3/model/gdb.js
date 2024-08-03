const mongoose = require('mongoose')
const Schema = mongoose.Schema
const passportLocalMongoose = require('passport-local-mongoose');
var ginfo = new Schema({
	username:{
		type:String
	},
	password:{
		type:String
	},
	email:{
		type:String
	},
	dob:{
		type:Date
	},
	age:{
		type:Number
	}
})

ginfo.plugin(passportLocalMongoose);

module.exports = mongoose.model('groomtable',ginfo)