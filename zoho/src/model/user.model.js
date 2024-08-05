const mongoose = require('mongoose')
const UserSchema = mongoose.Schema({
    tid:
    {
        type:Number,
        required:true
    },
    tage:
    {
        type:Number,
         required: true
    },
    tname:
    {
        type:String,
        required: true
     },
    taddress:
    {
        type:String,
        required: true
     },
    tphone:
    {
        type:String,
        required: true
    },
    temail:
    {
        type:String,
         required: true
     },
    tdob:
    {
        type:Date,
        required: true
     },
    is_active: { type: Boolean, default: false },
    is_verified: { type: Boolean, default: false },
    is_deleted: { type: Boolean, default: false },

},
{
    timestamps: true
});

module.exports = mongoose.model('Topper', UserSchema.set('collection', 'Topper'));
 