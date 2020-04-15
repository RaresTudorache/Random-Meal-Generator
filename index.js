const get_meal_btn = document.getElementById("get-meal");
const meal_container= document.getElementById("meal");

get_meal_btn.addEventListener('click', () =>{
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then(res => {
        createMeal(res.meals[0]);
    })
    .catch(e => {
        console.warn(e);
    });
});

const createMeal = meal => {
    const ingredients = [];

    //get all the ingredients from the object
    for(let i =1;i<=20;i++){
        if(meal[`strIngredient${i}`]){
            ingredients.push(
                `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
            );
        }else {
            break;}
    }
};

