//const MongoClient = require('mongodb').MongoClient;
const {
    MongoClient,
    ObjectID
} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server')
    const db = client.db('Todoapp')

    // deleteMany
    // db.collection('Users').deleteMany({
    //     name: 'Ashley'
    // }).then((result) => {
    //     console.log(result);
    // });

    //deleteOne
    db.collection('Users').deleteOne({
        _id: ObjectID('5a8f9acc99c8344e56e34fc0')
    }).then((resuslt) => {
        console.log(result);
    });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({
    //     completed: false
    // }).then((result) => {
    //     conssole.log(result);
    // });

    //client.close();
});