// import mongoose, { ConnectOptions } from "mongoose";

// import dotenv  from "dotenv"
// dotenv.config()

// // const options: ConnectOptions = {
// //     useNewUrlParser: true,
// //     useCreateIndex: true,
// //     useUnifiedTopology: true,
// // };

// const connectDb = async () => {
//     try {
//         await mongoose.connect(process.env.NEXT_MONGOS_URI!)
            
//         console.log("connected successfully !")
//     } catch (error) {
//         console.log(error);

//     }
// }


// export default connectDb;




import mongoose from 'mongoose';

export async function connectDb() {
    try {
        mongoose.connect(process.env.NEXT_MONGOS_URI!);
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log('MongoDB connected successfully');
        })

        connection.on('error', (err) => {
            console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
            process.exit();
        })

    } catch (error) {
        console.log('Something goes wrong!');
        console.log(error);
        
    }


}