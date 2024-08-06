
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    
    dept_id: String
});

const User = mongoose.model('User', userSchema);

User.getJoinData = async function() {
    const db = mongoose.connection;

    const result = await db.collection('user').aggregate([
        {
            $lookup: {
                from: 'dept',
                localField: 'dept_id',
                foreignField: '_id',
                as: 'departmentDetails'
            }
        }
    ]).toArray();

    return result;
};

module.exports = User;
