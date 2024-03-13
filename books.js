const mongoose = require('mongoose');

main()
.then(()=>{
    console.log("connection bulid successfully in book");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    author:{
        type:String,
    },
    price:{
        type:Number,
        min:[1,"this is to less for amazon sell"],
    },
    catagory:{
        type:String,
        enum:["fiction","Non fiction"],
    },
superheros:[String],
})

const Book=mongoose.model("Book",bookSchema);

// const book1=new Book({
//     title:"dc comics",
//     author:"games gun",
//     price:2300,
//     catagory:"fiction",
//     superheros:["supeman","batman"]
// })
// book1.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

Book.updateOne({title:"marvel comics"},{price:-100},{runValidators:true}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err.errors.price.properties.message);
})
