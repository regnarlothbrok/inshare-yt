require('dotenv').config();
const mongoose = require('mongoose');

function connectDB() {
    // Database Connection
    mongoose.connect(process.env.MONGO_CONNECTION_URL, {useNewUrlParser: true,useUnifiedTopology: true });
    const connection = mongoose.connection;
    connection.once('open', () => {
        console.log('Database connected.')
    })
    connection.on('error', (err) => {
        console.error('Database connection error:', err);
    });
}

module.exports = connectDB;