const foodForm = document.querySelector('form');
const search = document.querySelector('input');
//const messageOne = document.querySelector('#messageOne');
const foodName = document.querySelector('#foodName');

const protein = document.querySelector('#protein');
const proteinContent = document.querySelector('#proteinContent');

const carb = document.querySelector('#carb');
const carbContent = document.querySelector('#carbContent');

const sugar = document.querySelector('#sugar');
const sugarContent = document.querySelector('#sugarContent');

const fat = document.querySelector('#fat');
const fatContent = document.querySelector('#fatContent');


// const messageThree = document.querySelector('#message-3');
// const messageThree = document.querySelector('#message-3');


foodForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const food = search.value;
    
    fetch('http://localhost:3000/fetchFoods?food=' + food).then((response) => {
        response.json().then((data) => {
            if (food) {
                if (data.error) {
                    foodName.textContent = data.error;
                } else {
                    const foodNameJSON = data.foodName;

                    const proteinJSON = data.nutrients.protein;
                    const proteinContentJSON = data.nutrients.proteinContent;

                    const carbJSON = data.nutrients.carb;
                    const carbContentJSON = data.nutrients.carbContent;

                    const sugarJSON = data.nutrients.sugar;
                    const sugarContentJSON = data.nutrients.sugarContent;

                    const fatJSON = data.nutrients.fat;
                    const fatContentJSON = data.nutrients.fatContent;
                    
                    foodName.textContent = foodNameJSON; 

                    protein.textContent = proteinJSON;
                    proteinContent.textContent = proteinContentJSON;

                    carb.textContent = carbJSON;
                    carbContent.textContent = carbContentJSON;

                    sugar.textContent = sugarJSON;
                    sugarContent.textContent = sugarContentJSON;

                    fat.textContent = fatJSON;
                    fatContent.textContent = fatContentJSON;
                    
                    
                    //messageThree.textContent = protein;
                    // console.log(data.foodName);
                    // console.log(data.foodNum);
                    console.log(data.nutrients);

                    /* for (var key in data.foodGroup.length){
                        foodGroups.push(data.foodName[key]);
                        
                        e.preventDefault();    
                    } return foodGroups; */
                    
                    /* callback(undefined,{
                        foodName: data.foodName 
                    });
                    e.preventDefault(); */
                }
            }             
        });
    });
    
    // messageTwo.textContent = '';
    // messageThree.textContent = '';
});