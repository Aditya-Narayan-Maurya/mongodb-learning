const mongoose = require('mongoose');

main()
.then(()=>{
    console.log("connection bulid successfully");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema= new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
})

const User= mongoose.model("User",userSchema);

User.findOneAndDelete({name:'eve'}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})

// User.findByIdAndUpdate('65ef21095ab6c4754e24fb8a',{name:'eve'},{new:true}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// User.findById('65ef21095ab6c4754e24fb8a').then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// const Employee=mongoose.model("Employee",userSchema);
// User.insertMany([
//     {name:"Tony",email:"tony@gamil.com",age:56},
//     {name:"Bruce",email:"Bruce@gamil.com",age:47},
//     {name:"Peter",email:"peter@gamil.com",age:30},
// ]).then((result)=>{
//     console.log(result);
// })

// const user2=new User({
//     name:"eve",
//     email:"eve@yahoo.in",
//     age:48,
// })
// user2.save().then((result)=>{
//  console.log(result);
// }).catch((err)=>{
//       console.log(err);
// })