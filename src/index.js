import app from "./app.js" ;
import { ConnectMongoDB } from "./db.js";

ConnectMongoDB()
app.listen( 4000 )
console.log("Server on Port : " , 4000)