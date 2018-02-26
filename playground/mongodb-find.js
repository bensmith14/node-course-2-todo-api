//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
  return console.log('unable to connect to mongoDB server');
  }

  console.log('connected to mongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5a9344cda6d17a03ec96d1f8')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('unable to fetch ToDos', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`todos count: ${count}`);
  //
  // }, (err) => {
  //   console.log('unable to fetch ToDos', err);
  // });


  db.collection('Users').find({
    name: 'Ben'
  }).toArray().then((docs) => {
    console.log('Users:');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('unable to fetch ToDos', err);
  });


  // client.close();
});
