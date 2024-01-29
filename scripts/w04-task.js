/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: 'Richard Sam',
    photo: 'images/placeholder.png',
    favoriteFoods: [
        'Ekpang Nkukwo',
        'Jellof Rice',
        'Beans',
        'Ice cream'
    ],
    hobbies:[
        'Reading',
        'Surfing the Internet',
        'Listening to Music'
    ],
    placesLived:[]
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Uyo, Nigeria',
        length: '26 years'
    },
    {
        place: 'Owerri, Nigeria',
        length: '1 year'
    },
    {
        place: 'Lagos, Nigeria',
        length: '1 year'
    },
    {
        place: 'Port Harcourt, Nigeria',
        length: '10 years'
    }
);

console.log(myProfile);


/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
  });
  
/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
  });  

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
  
    let dd = document.createElement('dd');
    dd.textContent = place.length;
  
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
  });

