const mongoose = require('mongoose');
const config = require('config');

const connectDB = async () => {
    try {
        await mongoose.connect(config.get('mongoURI'), 
        {   useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('MongoDB Connected')
    } catch (err) {
        console.error(err.message);
    };
};

module.exports = connectDB;
