var mongoose = require('mongoose');
mongoose.connect('mongodb://0.0.0.0/modi',
{useNewUrlParser: true,
 useUnifiedTopology: true,
});

var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
// db.once('open' ,function(){
//   console.log("we are connected Boss")
// });
var schema = new mongoose.Schema({
  name: String
});

schema.methods.speak = function(){
  var greeting = "My name is " + this.name
  console.log(greeting);
}

var user = mongoose.model('anshi',schema);
var anshi = new user({name: 'aman'});
// console.log(aman.name);
// aman.speak();
anshi.save();
user.find({name: 'aman'}).then((users)=>{
   console.log(users);
});
// user.find({name: 'aman'}).then((users)=>{
//   console.log('All user fetched: ')
//   console.log(users);
// }).catch((e)=>{
//   console.log(e);
// });