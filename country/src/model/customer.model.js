const mongoose = require('mongoose')
const UserSchema = mongoose.Schema({
    cid:
    {
        type:Number,
        required:true
    },
    cadhar:
    {
        type:Number,
         required: true
    },
    cpan:
    {
        type:String,
        required: true
    },
    cdob:
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
UserSchema.set('collection', 'Customer')
module.exports = mongoose.model('Customer', UserSchema);
 