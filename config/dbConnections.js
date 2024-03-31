const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()
const uri = process.env.MONGO_URI
const port = process.env.PORT

const connectDb =async()=> {
    try{
        const connect = await mongoose.connect(uri)
        console.log(`Database is connected to : ${port} `)
    }
    catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDb