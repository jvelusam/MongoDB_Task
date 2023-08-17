
// Find the product price which are between 400 to 800
db.Product.aggregate([
  {
    $match:
      /**
       * query: The query in MQL.
       */
      {
        price: {
          $gte: 400,
          $lte: 800,
        },
      },
  },
])



// Find the product price which are not between 400 to 600.
db.Product.aggregate([
  {
    $match:
      /**
       * query: The query in MQL.
       */
      {
        price: {
          $not: {$gt:400,
                $lt:800}
        },
      },
  },
])
// List the four product which are grater than 500 in price 

db.Product.find({"price":{"$gt":500}})


// Find the product name and product material of each products

db.Product.find({"brand"})

// Find the product with a row id of 10



//Find only the product name and product material

db.Product.find({"brand"})

//Find all products which contain the value of soft in product material 

[
  {
    $match:
      /**
       * query: The query in MQL.
       */
      {
        productmaterial: "Soft",
      },
  },
]


// Find products which contain product color indigo  and product price 492.00


[
  {
    $match:
      /**
       * query: The query in MQL.
       */
      {
        productcolor: "indigo", 
      },
  },
]

// Delete the products which product price value are same