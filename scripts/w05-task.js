/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples"); 
let templeList = [];


/* async display Temples Function */
const displayTemples = (temples) => {
    // Iterate through each temple in the array using forEach method
    temples.forEach((temple) => {
        
      // 1. Create an HTML <article> element (createElement).
      const article = document.createElement("article");
  
      // 2. Create an HTML <h3> element and add the temple's templeName property to this new element.
      const h3 = document.createElement("h3");
      h3.textContent = temple.templeName;
  
      // 3. Create an HTML <img> element and add the temple's imageUrl property to the src attribute
      //    and the temple's location property to the alt attribute.
      const img = document.createElement("img");
      img.src = temple.imageUrl;
      img.alt = temple.location;
  
      // 4. Append the <h3> element and the <img> element to the <article> element as children.
      article.appendChild(h3);
      article.appendChild(img);
  
    // 5. Append the <article> element to the global templesElement variable declared in Step 2.
      templesElement.appendChild(article);
    });
};


/* async getTemples Function using fetch()*/

    // 1. Create another function expression called getTemples. Make it an async anonymous, arrow function.
const getTemples = async () => {

    // 2. In the function, declare a const variable named response
const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    // 3. Convert your fetch response into a JavaScript object (.json)
    //    and assign the result to the templeList global array variable
    //    you declared in Step 3 above. Make sure the execution waits here as well.
templeList = await response.json();
    // Now you can use the displayTemples function to display the temple data
    displayTemples(templeList);
};

// Test your code

console.log(templeList); // Use console.log to review the results in the browser console   
  

/* reset Function */

// 1. Declare a function expression named reset that clears all of the <article> elements from the templesElement.
const reset = () => {
    templesElement.innerHTML = ""; // This clears all child elements within templesElement
  };
  

/* filterTemples Function */

// 1. Declare a function expression named filterTemples.
// 2. The function should accept an argument in a parameter named temples.
const filterTemples = (temples) => {
    // 3. In this function, first call the reset function to clear the output.
    reset();
  
    // 4. Define a variable named filter that obtains the value of the HTML element with the ID of filtered.
    const filter = document.getElementById("filtered").value; // Replace "filtered" with the actual ID of your select element.
  
    // 5. Use a switch statement that uses the filter value as the selector responding to four (4) cases.
    switch (filter) {
      case "utah":
        // 6. For each case, call the displayTemples function using a filter statement that filters the temples parameter.
        //    "utah": filter for temples where the location contains "Utah" as a string.
        displayTemples(temples.filter((temple) => temple.location.includes("Utah")));
        break;
  
      case "notutah":
        // 6. "nonutah": filter for temples where the location does not contain "Utah" as a string.
        displayTemples(temples.filter((temple) => !temple.location.includes("Utah")));
        break;
        
  
      case "older":
        // 6. "older": filter for temples where the dedicated date is before 1950.
        //    (compare versus new Date(1950, 0, 1)).
        displayTemples(temples.filter((temple) => new Date(temple.dedicated) < new Date(1950, 0, 1)));
        break;
  
      case "all":
        // 6. "all": no filter. Just use temples as the argument.
        displayTemples(temples);
        break;
  
      default:
        // Handle any unexpected cases
        console.error("Invalid filter value");
    }
  };
  

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => {
    filterTemples(templeList);
  });

  
  getTemples();

  