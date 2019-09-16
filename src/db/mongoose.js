//Mongoose uses mongodb module behind the scenes, so everything done in mongoose.js is being implemented
//from mongodb

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/nutrition-application-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true
});



/* const me = new User({
    name: 'John',
    email: 'john@email.com',
    password: 'peaky123'
});

me.save().then(() => {
    console.log(me);
}).catch((e) => {
    console.log('error: ', e);
}) */