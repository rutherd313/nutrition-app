const {MongoClient, ObjectID} = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'nutrition-application';

// const id = new ObjectId()
// console.log(id);

MongoClient.connect(connectionURL, {useNewUrlParser:true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!');
    }

    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'John',
    //     age: 25
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user');
    //     }

    //     console.log(result.ops);
    // });

    db.collection('users').findOne({ _id: new ObjectID("5d2a69cc38862f1f04e0797f")}, (error, user) => {
        if (error) {
            return console.log('unable to fetch');
        }

        console.log(user);
    });
});