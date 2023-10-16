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
            console.log(selectedRoast)
        } else if(selectedRoast === 'All Roasts'){
            filteredCoffees.push(coffee)
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

//The searchIt() function searches coffees by name
function searchIt () {
    document.addEventListener('keyup', function (event) {
        let searcher = document.getElementById('searchBar')
        let filter = searcher.value.toLowerCase()
        let newList = []
        coffees.forEach(function(coffee) {
            let searchCoff = coffee.name.toLowerCase()
            let x = searchCoff.includes(filter)
            if (x) {
                newList.push(coffee)
                tbody.innerHTML = renderCoffees(newList)
            }
        })
    })
}

const addCoffeeButton = document.querySelector('#submitNew');

const newCoffeeName = document.getElementById("coffeeName").value;

const newCoffeeRoast = document.getElementById("add-roast");

let id = 15
addCoffeeButton.addEventListener('click', event => {
    event.preventDefault();
    addCoffee();
});

function addCoffee(){
    console.log(    {id: `${id}`, name: `${newCoffeeName}`, roast: `${newCoffeeRoast}`}, )
    id++
}

tbody.innerHTML = renderCoffees(coffees);
submitButton.addEventListener('click', updateCoffees)
