//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
//
// console.log(obj);



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
  return console.log('unable to connect to mongoDB server');
  }

  console.log('connected to mongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text: 'something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //
  //   name: 'Ben',
  //   age: 23,
  //   location: 'Toronto'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('unable to insert user', err);
  //   }
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
  // });


  client.close();
});
