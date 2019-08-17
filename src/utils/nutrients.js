const request = require('request');

const nutrients = (foodNum, callback) => {
    const url = 'https://api.nal.usda.gov/ndb/nutrients/?format=json&&nutrients=203&nutrients=205&nutrients=204&nutrients=208&nutrients=269&ndbno=' + encodeURIComponent(foodNum) + '&api_key=vwcPzSUv21ybgA92oPhyzOhadGE1xRtqAGYp1tEq';

    request({url:url, json:true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to USDA database!', undefined);
        } else if (body.errors) {
            callback(body.errors.error[0].message, undefined);
        } else {
            callback(undefined, {
                protein: body.report.foods[0].nutrients[1].nutrient,
                proteinContent: body.report.foods[0].nutrients[1].value,

                sugar: body.report.foods[0].nutrients[2].nutrient,
                sugarContent: body.report.foods[0].nutrients[2].value,

                fat: body.report.foods[0].nutrients[3].nutrient,
                fatContent: body.report.foods[0].nutrients[3].value,

                carb: body.report.foods[0].nutrients[4].nutrient,
                carbContent: body.report.foods[0].nutrients[4].value
            });
        }
    })
}

/* nutrients('!!#@$$#', (error, data) => {
    console.log('Error:', error);
    console.log(data);
}) */

module.exports = nutrients;