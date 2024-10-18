/** Variables */
// 1. Create a Categories Array
const categories = ['All', 'T-shirt', 'Hoodies'];


/**
 * Displays the list of categories as HTML list items on the page.
 * 
 */

/** Functions */
//2. Display Categories Dynamically
// Create a function to display the categories | function
// function displayCategories(){
//     // Retrieve the HTML element where the categories will be displayed | getElementById
//     const $categories = document.getElementById('categories');
//     // Create an empty list (array) to store the category elements | const, array
//     const htmlTemplate = [];
//     // Loop through each item in the categories array | forEach
//         // Create an HTML list item for each category | template literal, push
//     categories.forEach(category => {htmlTemplate.
//         push(`
//             <li class="nav-item">
//               <a href="#" class="nav-link btn btn-light btn-sm rounded-0 mx-1">${category}</a>
//             </li>`
//         ) } );
//     // Combine the list of category elements into a single string | join
//     $categories.innerHTML = htmlTemplate.join('');

// }

//3. Refactor with map()
    // Create a function to display the categories | function
    function displayCategories(){
        // Retrieve the HTML element where the categories will be displayed | getElementById
        const $categories = document.getElementById('categories');    
        // Create a new array (list) by mapping over each category and save it in a variable | map
        // Create an HTML list item for each category | template literal
        // const htmlTemplate = categories.map(category => `
        //     <li class="nav-item">
        //       <a href="#" class="nav-link btn btn-light btn-sm rounded-0 mx-1">${category}</a>
        //     </li>
        //     `)
        // Combine the list of category elements into a single string | join
        // Insert the combined HTML into the categories element | innerHTML
        $categories.innerHTML = categories.map(category => 
            `<li class="nav-item">
              <a href="#" class="nav-link btn btn-light btn-sm rounded-0 mx-1">${category}</a>
            </li>
            `).join('');
    }

    console.log (displayCategories());

// 4. Add Products to the Cart
// Initialize an empty cart array | let
    let cart = [];
// Create a function to add a product to the cart. Receive the product as a parameter | function
    function addToCart(product){
        // Add the product to the cart array | push
        cart.push(product);
        // Display the product
        // Create an array by mapping over each item in the cart | map
        // Create an HTML list item for each product | template literal
        // Combine the mapped list of HTML items into a single string | join
        // Insert the combined HTML into the element with the ID 'cart' | getElementById, innerHTML
    }


// 5. Create the function to display the cart
// function displayCart(){
//     document.getElementById('cart').innerHTML = cart.map(item => `<li>${item}</li>`).join('')
// }

// 6. Refactor Using JavaScript Methods to Create HTML Elements
// Display the product
function displayCart(){
    // Retrieve the cart element from the DOM | getElementById
    const $cart = document.getElementById('cart');
    // Clear the existing cart items | innerHTML = ''
    $cart.innerHTML = '';
    // Loop through each item in the cart array | forEach
    cart.forEach(item => {

        // Create a new list item element | createElement('li')
        const liElement = document.createElement('li');
        console.log(liElement)
        // Set the text content of the <li> with the item | textContent
        liElement.textContent = product;
        // Append the list item to the cart element | appendChild
        $cart.appendChild(liElement)
    })//closes cart.forEach
} // closes the displayCart

// 7. Remove a Product from the Cart by index
