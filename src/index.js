const express = require('express');
//listens to heroku
const port = process.env.PORT || 3000;
const path = require('path');
const hbs = require('hbs');
const foodSearch = require('./utils/foodSearch');
const nutrients = require('./utils/nutrients');
const fetchFoods = require('./utils/fetchFoods');
const userRouter = require('./routers/user');

//initiates mongodb
require('./db/mongoose');
const User = require('./models/user');

console.log(path.join(__dirname, '../public'));
const app = express(__dirname, '../templates');

//root file
const publicDirectoryPath = path.join(__dirname, '../public');
const viewspath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

//sets up handlebars
app.set('view engine', 'hbs');

app.set('views', viewspath);
//takes path to directory where partials live
hbs.registerPartials(partialsPath);

/* //registering middleware
app.use((req, res, next) => {
    if (req.method === 'GET') {
        res.send('GET requests are disabled');
    } else {
        //asserts middleware
        next()
    }
})

app.use((req, res, next) => {
    res.status(503).send('Site is currently down!');
}) */

//matches index.html
app.use(express.static(publicDirectoryPath));
app.use(express.json());
app.use(userRouter);


//handlebars
app.get('', (req, res) => {
   res.render('index', {
        title: 'Nutrition App',
        greeting: 'Welcome to my App!',
        name: 'John Dueno'
   }); 
});

app.get('/fetchFoods', (req, res) => {
    if (!req.query.food){
        return res.send({
            error: 'You must provide a food!'
        });
        //console.log('sth');
    }
    /* foodSearch(req.query.food, (error, {foodNum, foodName} = {}) => {
        if (error) {
            return res.send({ error });
        }

        nutrients(foodNum, (error, nutrientData) => {
            if (error) {
                return res.send({ error });
            }

            res.send({
                foodName,
                nutrients: nutrientData
            });
        });
    }); */
    fetchFoods(req.query.food, (error, {foodName, foodNum} = {}) => {
        
        if (error) {
            return res.send({error});
        } 
        
        nutrients(foodNum, (error, nutrientData) => {
            if (error) {
                return res.send({ error });
            }

            res.send({
                foodName,
                nutrients: nutrientData
            });
        });
    });    
});

//todo: try fetchFoods.js to gather the date for nutrients

app.get('/login', (req, res) => {
    res.render('login', {
        title: 'Login Page',
        name: 'John Dueno'
    });
})

app.get('/profile', (req, res) => {
    res.render('profile', {
        title: 'Profile Page',
        greeting: 'Welcome to your profile!',
        name: 'John Dueno'
    });
});

app.get('/signup', (req, res) => {
    res.render('signup', {
        title: 'SignUp Page',
        name: 'John Dueno'
    });
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404 Error',
        errorMessage: 'Error. Link is invalid'
    });
})

//console.log(process.argv);

//video 45

/* const foodName = process.argv[2]

if (!foodName) {
    console.log("Please provide a food name");
} else {
    foodSearch(foodName, (error, data) => {
        if (error) {
            return console.log('Error', error);
        } else {
            console.log(data);
        }
        nutrients(data.foodNum, (error, foodSearchData) => {
            if (error) {
                return console.log('Error:', error);
            } else {
                console.log(foodSearchData);
            }
        });
    });
} */


//how to use the terminal
//node index.js "AIDELLS, BREAKFAST LINKS SMOKED CHICKEN SAUSAGE, CHORIZO, UPC: 764014374006"

/* 
app.get('/profile', (req, res) => {
    res.send('<h1>Welcome to your profile!</h1>');
}); */

app.listen(port, () => console.log(`Listening on port ${port}`));