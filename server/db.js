const mongoose = require('mongoose');
const env = require('dotenv');
env.config({ path: `${__dirname}/.env` });

const mongoURI =  "mongodb+srv://shikalgarafrin7:cqcYmbCBezVzmMe3@cluster0.v53vtdk.mongodb.net/cloudpad";

const connectToMongo = ()=> {

    mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true },(error)=> {
        if (error) {
            console.log(error.message);
        } else {
            console.log("Conected to mongo cloud successfully");
        }
    });
    
}

module.exports = connectToMongo;