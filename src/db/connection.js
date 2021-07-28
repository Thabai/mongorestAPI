const mongoose = require('mongoose');
require('dotenv').config();

const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });
        console.log("Successfully connected");
    } catch (error) {
        console.log(error);
    }
};


const closeConnection = () => {
    mongoose.disconnect();
};


connection();

module.exports = {
    closeConnection,
};