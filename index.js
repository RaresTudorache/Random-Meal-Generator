const get_meal_btn = document.getElementById("get-meal");
const meal_container= document.getElementById("meal");

get_meal_btn.addEventListener('click', () =>{
    fetch('https://www.themealdb.com/api/json/v1/1/random.php');
});