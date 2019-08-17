const request = require('request');


/* const url = 'https://api.nal.usda.gov/ndb/search/?format=json&q=steak&sort=n&max=25&offset=0&api_key=vwcPzSUv21ybgA92oPhyzOhadGE1xRtqAGYp1tEq';

request({ url, json:true }, (error, response) => {
    if (error) {
        callback('Unable to connect to USDA database!', undefined)
    }
    else {
        console.log(response.body.list.item[0].name);
        console.log(response.body.list.item[0].ndbno);
    }
    // const data = JSON.parse(response.body);
    // const ndbno = data.list.item[0].ndbno;
    // console.log(ndbno);
}); */

//copy
const foodSearch = (food, callback) => {
    const url = 'https://api.nal.usda.gov/ndb/search/?format=json&q=' + encodeURIComponent(food) + '&sort=n&max=25&offset=0&api_key=vwcPzSUv21ybgA92oPhyzOhadGE1xRtqAGYp1tEq';

    request({url:url, json:true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to USDA database!', undefined);
        } else if (body.errors) {
            callback(body.errors.error[0].message);
        }
        for (var key in body.list.item) {
            var valName = body.list.item[key].name;
            var valNum = body.list.item[key].ndbno;
            if (valName === food){
                callback(undefined,{
                    foodName: valName,
                    foodNum: valNum
                });          
            }
           //callback(undefined, {foodNumber: val.ndbno});
        }        
    });
};


/* foodSearch('AHI TUNA STEAKS, UPC: 653849094541', (error, data) => {
    if (error) {
        return console.log('Error', error);
    } else {
        console.log(data);
    }
}) */


module.exports = foodSearch;

