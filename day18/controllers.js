const User = require('./model');

exports.getJoinData = async (req, res) => {
    try {
        const data = await User.getJoinData();
        res.json(data);
    } catch (error) {
        res.status(500).send('Error fetching data');
}
};