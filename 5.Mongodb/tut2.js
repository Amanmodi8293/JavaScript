// Searching for data in mongo db 

use amankart

// This querry will return  all the object with rating equal to 4.5
db.items.find({rating:4.5})
// gte greater then and equal
db.items.find({rating: {$gte: 4.5}})
// gt only greater then 
db.items.find({rating: {$gt: 4.5}})
// And operator
db.items.find({$and:[{price: {$lt: 22000}},{rating: {$gte: 4.5}}]})
db.items.find({price: {$gt: 22000}},{price: 1, rating: 1})
