import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
fullname:{
    type:String,
    required:true,
    min:6,
    max:30
},

username:{
    type:String,
    required:true,
    trim:true,
    unique:true,
    index:true,
    lowercase:true

},
email:{
    type:String,
    required:true,
    trim:true,
    unique:true,
    lowercase:true 
},
password:{
    type:String,
    required:true
},
phone:{
    type:String,

}

})

const User = mongoose.model('user',userSchema);
export default User;