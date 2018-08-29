const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client)=>{
    if (err){
        return console.log('unable to connect to mongodb server');
    }
    console.log('connected to mongodb server');
    const db = client.db('TodoApp');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5b805f1c0910964d14bb6af3')})
    //     .toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err)=>{
    //      console.log('unable to find todos', err);
    // });

     db.collection('Todos').find().count()
        .then((docCount)=>{
        console.log(`Todos count: ${docCount}`);
        //console.log(JSON.stringify(docs, undefined, 2));
    }, (err)=>{
         console.log('unable to find todos', err);
    });
});