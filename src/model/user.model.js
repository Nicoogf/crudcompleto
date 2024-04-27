import { Schema , models , model} from "mongoose";
 
const UserSchema =  new Schema({
    username : {
        type: String,
        required: true,
        trim: true
    },
    email :{
        type: String,
        required: true,
        trim: true,
        unique : true
    },
    password:{
        type: String,
        required: true
    },
})


export default models.users || model("User" , UserSchema )