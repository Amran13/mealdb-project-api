const acceptData = () => {
    const inputField = document.getElementById('input-field');
    const input = inputField.value ;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
    .then(res => res.json())
    .then(data => displayData(data.meals))
    inputField.value = '';
}



const displayData = (meals) => {
    const mealContainer = document.getElementById('col');
    mealContainer.textContent = '';
    for(const meal of meals){
        // console.log(meal);
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
        <img src="${meal.strMealThumb}" class="card-img-top p-3">
        <div class="card-body">
                  <h5 class="card-title my-3">${meal.strMeal}</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>

        
        `
        mealContainer.appendChild(mealDiv);
    }
}