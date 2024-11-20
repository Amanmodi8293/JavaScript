show dbs 
use amankart 
show collection
db.items.find({price: 2200})

// Deleting items form the mongodb Database
// Dleting one item before first searching
db.items.deleteOne({rating: 4.5})
db.items.deleteMany({rating:32.5})
