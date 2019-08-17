const request = require('request');

const fetchFoods = (food, callback) => {
    const url = 'https://api.nal.usda.gov/ndb/search/?format=json&q=' + encodeURIComponent(food) + '&sort=n&max=25&offset=0&api_key=vwcPzSUv21ybgA92oPhyzOhadGE1xRtqAGYp1tEq';

    request({url:url, json:true}, (error, {body}) => {
        
        if (error) {
            callback('Unable to connect to USDA database!', undefined);
        } else if (body.errors) {
            callback(body.errors.error[0].message);
        }

        //return stringified list of food names
         
        /* var foodName = body.list.item;
        // for (var i = 0; i < foodName.length; i++) 
        for (var key in foodName) {
            
            var foodList = JSON.stringify(foodName);
            return callback(undefined, {
                foodName: foodList[key].name,
                foodNum: foodList[key].ndbno
            });
            //console.log(foodList);
            // return callback(undefined, {
            //     foodName
            // })
        } */

        //new shit

        /* else {
            var foodItem = body.list.item;
            for(var i = 0; foodItem.length; i++) {
                for(var key in foodItem[i]) {
                    var foodGroup = [];
                    if (key === 'name'){
                        foodGroup.push([key, foodItem[i][key]])
                        
                        console.log(foodGroup[0])
                        //returns name key and value pair
                        foodName = foodItem[i][key];
                        //foodObjs = JSON.stringify(foodObj);
                        callback(undefined, {
                            foodName: foodName
                        })
                        //console.log({foodName});
                    }
                    //returns all item object array
                    //console.log(key +':'+ foodItem[i][key]);
                }
            }
            // callback(undefined, {
            //     foodName: foodItem
            // })
            //console.log(foodItem[0].name);
        } */

        //new shit
        else {
            var foodItem = body.list.item;
            for (var i = 0; i < foodItem.length; i++){
                // foodLists = JSON.stringify(foodItem);
                // foodList = JSON.parse(foodLists);
                // var name = foodList.name;
                //foodName = JSON.stringify(foodItem);
                
                return callback(undefined, {
                    foodName: foodItem[i].name,
                    foodNum: foodItem[i].ndbno
                })
                
                
                /* foodGroup.push(callback(undefined, {
                    foodName: foodItem[i].name
                })); */
                
                //foodNames = foodItem[i].name;
                //foodGroup.push(foodNames);
                /* var foodGroup = {
                    foodName: foodItem[i].name,
                    foodNum: foodItem[i].ndbno
                }; */
                
                // foodName = foodItem[i].name;
                // foodNum = foodItem[i].ndbno;
                // return console.log(foodName, foodNum);
                

                //returns one stringified item
                /* foodName = console.log(foodItem[i].name);
                foodNum = console.log(foodItem[i].ndbno);
                return {
                    foodName,
                    foodNum
                } */

                //console.log(name);
                //console.log(foodName[i].ndbno)
            }
        }       
    });
};

/* fetchFoods('steak', (error, data) => {
    if (error) {
        return console.log(error);
    } else {
        return console.log(data);
    }
}); */

module.exports = fetchFoods;