/* W02-Task - Profile Home Page */



/* Step 1 - Setup type tasks - no code required */



/* Step 2 - Variables */
let fullName = 'Richard Sam';
let currentYear = new Date().getFullYear();
let profilePicture = 'images/placeholder.png';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
const altText = `Profile image of ${fullName}`;
imageElement.setAttribute('alt', altText);

/* Step 5 - Array */
let favoriteFoods = ['Ekpang Nkukwo','Jellof Rice','Beans','Ice cream'];
 
// Display the initial array
foodElement.innerHTML = `${favoriteFoods}`;


let newFavoriteFood = 'Burger';
favoriteFoods.push(newFavoriteFood);

 // Display the initial array
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.shift();

// Display the array after removing the first element
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.pop();

// Display the final modified array after removing the last element
foodElement.innerHTML += `<br>${favoriteFoods}`;
