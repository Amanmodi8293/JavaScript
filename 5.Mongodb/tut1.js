// Inserting data in mongo db 

use amankart
db.items.insertOne({name: "samsung 30s" ,Price:22000 , rating:4.5 , qty:233, sold:98})

db.items.insertMany([{name: "samsung 30s", Price:22000 , rating:4.5 , qty:233, sold:98},{name: "realme 30s", Price:2200 , rating:32.5 , qty:213 , sold:558},{name: "redmi 30s",Price:22000 , rating:40.5 , qty:2313, sold:9558},{name: "iphone 30s", Price:22000, rating:3.51 , qty:213, sold:515}])
