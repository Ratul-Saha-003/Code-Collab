import mongoose from 'mongoose';

export async function connect(){
    try{
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;
        connection.on('connected', () => {
            console.log("MongoDB connected successfully");
        })
        connection.on('error', (e) => {
            console.log("MongoDB connection error"+e);
            process.exit();
        })
    } catch(err){
        console.log("error in catch ");
        console.log(err);
    }
}