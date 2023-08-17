//show dbs - > List all the dbs

// use dbName -> creating & switching to db

//db - current db

// C - Create - Post - insertOne, inserMany
// R - Read - GET - findone, find
// U - Update-PUT - updateOne,updateMany
// D  - Delete-  DELETE - 

db.dashboard.insertMany([
    {
      "id": 1,
      "title": "iPhone 9",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      "images": "https://i.dummyjson.com/data/products/1/1.jpg"
    },
    {
      "id": 2,
      "title": "iPhone X",
      "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      "price": 899,
      "discountPercentage": 17.94,
      "rating": 4.44,
      "stock": 34,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      "images": "https://i.dummyjson.com/data/products/2/1.jpg"
    },
    {
      "id": 3,
      "title": "Samsung Universe 9",
      "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
      "price": 1249,
      "discountPercentage": 15.46,
      "rating": 4.09,
      "stock": 36,
      "brand": "Samsung",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
      "images": "https://i.dummyjson.com/data/products/3/1.jpg"
    },
    {
      "id": 4,
      "title": "OPPOF19",
      "description": "OPPO F19 is officially announced on April 2021.",
      "price": 280,
      "discountPercentage": 17.91,
      "rating": 4.3,
      "stock": 123,
      "brand": "OPPO",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      "images": "https://i.dummyjson.com/data/products/4/1.jpg"
    },
    {
      "id": 5,
      "title": "Huawei P30",
      "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      "price": 499,
      "discountPercentage": 10.58,
      "rating": 4.09,
      "stock": 32,
      "brand": "Huawei",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
      "images": "https://i.dummyjson.com/data/products/5/1.jpg"
    },
    {
      "id": 6,
      "title": "MacBook Pro",
      "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
      "price": 1749,
      "discountPercentage": 11.02,
      "rating": 4.57,
      "stock": 83,
      "brand": "Apple",
      "category": "laptops",
      "thumbnail": "https://i.dummyjson.com/data/products/6/thumbnail.png",
      "images": "https://i.dummyjson.com/data/products/6/1.png"
    },
    {
      "id": 7,
      "title": "Samsung Galaxy Book",
      "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
      "price": 1499,
      "discountPercentage": 4.15,
      "rating": 4.25,
      "stock": 50,
      "brand": "Samsung",
      "category": "laptops",
      "thumbnail": "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
      "images": "https://i.dummyjson.com/data/products/7/1.jpg"
    },
    {
      "id": 8,
      "title": "Microsoft Surface Laptop 4",
      "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
      "price": 1499,
      "discountPercentage": 10.23,
      "rating": 4.43,
      "stock": 68,
      "brand": "Microsoft Surface",
      "category": "laptops",
      "thumbnail": "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
      "images": "https://i.dummyjson.com/data/products/8/1.jpg"
    },
    {
      "id": 9,
      "title": "Infinix INBOOK",
      "description": "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
      "price": 1099,
      "discountPercentage": 11.83,
      "rating": 4.54,
      "stock": 96,
      "brand": "Infinix",
      "category": "laptops",
      "thumbnail": "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
      "images": "https://i.dummyjson.com/data/products/9/1.jpg"
    },
    {
      "id": 10,
      "title": "HP Pavilion 15-DK1056WM",
      "description": "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
      "price": 1099,
      "discountPercentage": 6.18,
      "rating": 4.43,
      "stock": 89,
      "brand": "HP Pavilion",
      "category": "laptops",
      "thumbnail": "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
      "images": "https://i.dummyjson.com/data/products/10/1.jpg"
    }
])


db.Test.insertMany([
 {
  _id: ObjectId("61ba25cbfe687fce2f042414"),
  item: 'nuts',
  quantity: 30,
  carrier: { name: 'Shipit', fee: 3 }
},
{
  _id: ObjectId("61ba25cbfe687fce2f042415"),
  item: 'bolts',
  quantity: 50,
  carrier: { name: 'Shipit', fee: 4 }
}
])
  


db.Test.updateOne({"carrier.fee":{$gt:2}})


db.Test.updateOne(
   { "carrier.fee": { $gt: 2 } }, { $set: { "price": 9.99 } }
)




//db.inventory.find( { quantity: { $in: [ 5, 15 ] } }, { _id: 0 } )


db.Task.find().pretty()

db.orders.find().pretty()
// stock > 50
db.dashboard.find({ stock: { $gte: 50 } }).pretty()

// Projection


//inclusion =1 
db.COMDrives.find({}, { Name: 1, Students: 1 }).pretty()

//exclusion  = 0
db.dashboard.find({}, { username: 0, status: 0 }).pretty()
// ignore _id
db.dashboard.find({}, { _id:0,username: 1, status: 1 }).pretty()
// sorting

// asc =1
db.dashboard.find().sort({brand:1}).pretty()

//dsc

db.dashboard.find().sort({ brand: -1 }).pretty()

// Limit

db.dashboard.find().sort({ brand: 1 }).limit(3).pretty()

// Skip
db.dashboard.find().sort({ brand: 1 }).limit(2).skip(2).pretty()


/// Embedded Document

//>> upto 100 levels of nesting => 1 doc can store upto 16 mb ={}


// exclusion of _id and inclusion of name , email and age
db.dashboard.find({}, { _id:0 ,name: 1, email: 1, age: 1 }).pretty()


// exclusion of _id and inclusion of name , email and age and

// sort by name , limit

db.dashboard.find({}, { _id:0 ,name: 1, email: 1, age: 1 }).sort({username:1}).pretty()

// exclusion of _id and inclusion of name , email and age and

// sort by name , limit and skip by 3
db.dashboard.find({}, { _id:0 ,name: 1, email: 1, age: 1 }).sort({username:1}).limit(3).skip(3).pretty()


// aggregate

db.orders.insertMany([
    { _id: 0, productName: "steelName", status: "new", quantity: 9 },
    { _id: 1, productName: "steel1", status: "Old", quantity: 8 },
    { _id: 2, productName: "steel2", status: "Data", quantity: 7 },
    { _id: 3, productName: "steel3", status: "Map", quantity: 10 },
    { _id: 4,productName:"steel4",status:"IOS",quantity:11}
])


// aggregate is method or function both are same only

// Stage -1

// $match -> status = "urgent"

db.orders.aggregate([{ $match: { status: "Old" } }])


// Stage -2
// $group -productName, Accumulator - $sum -> quantity


db.orders.aggregate([{ $match: { status: "Old" } }, { $group: { _id: "$productName", totalUrgentQuantity: { $sum: "$quantity" } } }])


// Task is for do to
//===================
// 1. update the language for all documents - English
// 2. update  the username from Jay to Peter
// 3. update the correct email id for all documents
// 4. delete all users with rating below 23
/*
Find all the topics and tasks which are thought in the month of October
Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
Find all the company drives and students who are appeared for the placement.
Find the number of problems solved by the user in codekata
Find all the mentors with who has the mentee's count more than 15
Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
*/

db.collection.findOne ( {
  $or: [
     { name: 1 },
     { age: 1 }
  ]
})




//Find all the company drives and students who are appeared for the placement.
db.COMDrives.aggregate([{ $match: { Palcements: "Yes" } }, {
  $group: {
    _id: {
      student: '$Students',
      CompanyName: '$Name',
       Palcements: '$Palcements',
    }
    }
  }])

  //Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020



db.COMDrives.aggregate([{ $match: { Month: { $gte: 10 / 11 / 23 } } },{ $group: { _id: "$Name", totalLikes: { $sum: "$Palcements" } }}]);

db.COMDrives.find( { Month: { $gt: 10 / 11 / 23 } } )

db.orders.aggregate([{
  $group: {
    _id:
    {
      CompanyName: "$Name",
       Students: "$Students",
    },
    totalUrgentQuantity:
    {
        $sum: "$quantity"
    }
  }
}])
  



//  Match Stage conditions


db.peaks.find({$match:{"location":{$in:["Nepal","China"]}}})