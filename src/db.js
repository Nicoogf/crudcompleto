import mongoose from "mongoose"

const url_database = "mongodb://localhost:27017/crud"

export const ConnectMongoDB = async () => {
    try {
        await mongoose.connect(url_database)
        console.log("Conexion exitosa a la base de datos")
    } catch (error) {
        console.log("Fallo la conexion a la base de datos")
    }
}