const MONGO_URI = "mongodb+srv://louiskok8888:louiskok8888@cluster0.bnclj30.mongodb.net/?retryWrites=true&w=majority"

import mongoose from 'mongoose'

const connectMongo = async () => {
    try{
        const{connection}=await mongoose.connect(MONGO_URI)

        if(connection.readyState==1){
            console.log("Database connected")
        }
    }catch(errors){
        return Promise.reject(errors)
    }
}

export default connectMongo;