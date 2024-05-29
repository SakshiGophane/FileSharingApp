import mongoose from "mongoose";


const DBConnection = async () => {
    

    // const MONGO_URI = `mongodb://admin:admin123@ac-1v7kmzx-shard-00-00.lzem2et.mongodb.net:27017,ac-1v7kmzx-shard-00-01.lzem2et.mongodb.net:27017,ac-1v7kmzx-shard-00-02.lzem2et.mongodb.net:27017/?ssl=true&replicaSet=atlas-84l1lv-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`;

    const MONGO_URI=`mongodb://admin:admin12345@ac-1v7kmzx-shard-00-00.lzem2et.mongodb.net:27017,ac-1v7kmzx-shard-00-01.lzem2et.mongodb.net:27017,ac-1v7kmzx-shard-00-02.lzem2et.mongodb.net:27017/?ssl=true&replicaSet=atlas-84l1lv-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`

    try {
        // .connect(url,object)
        await mongoose.connect(MONGO_URI);
        console.log('Database connected successfully');
    }
     catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}

export default DBConnection;
