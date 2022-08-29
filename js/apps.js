const makeCard = (search) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then(res => res.json())
        .then(data => getContent(data.meals))
}
const getContent = (contents) => {
    const div = document.getElementById('container');
    div.innerHTML = ``;
    contents.forEach(content => {
        const makeDiv = document.createElement('div');
        makeDiv.innerHTML = `
        <div class="col">
                    <div class="card">
                        <img src= '${content.strMealThumb}' class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${content.strMeal}</h5>
                            <p class="card-text">${content.strInstructions.slice(0,200)}</p>
                        </div>
                    </div>
                </div>
        `
        div.appendChild(makeDiv);

    });
}

const searchButton = document.getElementById('search-btn');
searchButton.addEventListener('click', function () {
    const searchItem = document.getElementById('input-search');
    makeCard(searchItem.value);
    searchItem.value = '';
})

makeCard('a');