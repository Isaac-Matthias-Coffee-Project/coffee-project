"use strict"

function renderCoffee(coffee) {
    var html = '<tr class="coffee">';
    html += '<h1>' + coffee.name + '</h1>';
    html += '<p>' + coffee.roast + '</p>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

// let searcher = document.getElementById('#searchBar')
// // searcher.addEventListener('click')
// console.log(searcher)
document.addEventListener('keyup', function (event){
    let searcher = document.getElementById('searchBar')
    let filter = searcher.value.toLowerCase()
    // console.log(filter)
let newList = ''
   // let z = document.getElementById('coffees')

    const listItems = document.querySelector('#coffees');
// console.log(z)


    for(let i=0; i < coffees.length; i++){
        // console.log(coffees[i].name)
        let searchCoff = coffees[i].name.toLowerCase()

       let x = searchCoff.includes(filter)
        // console.log(x)
        if(x === true){
           let y = coffees[i].name
            console.log(y)
            // let p = y.push(newList)
            y.style.display = ""
        }
    }
})




tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
