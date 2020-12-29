const mongoose = require('mongoose'); // using mong to conn
const config = require('config'); // to be able to grab string from default.json
const db = config.get('mongoURI');

// to connect to mongodb, pass in value. Gives us back a promise
const connectDB = async () => { //need something to call in server.js
    try{
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true

        });

        console.log('MongoDB Connected...');
    } catch(err) {
        console.error(err.message);
        //Exit process with failure
        process.exit(1);
    }
}

module.exports = connectDB;
