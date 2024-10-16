// Variables
const products = [
  {
    id: 1,
    title:"Maple Leaf T-Shirt",
    basePrice: 7.99,
    // You technically don't need "" here. Make sure to use them when your value includes special characters or spaces!!!
    materials: {"cotton": 7.99, "polyester": 8.99, "blend": 9.49 }
    image: 'images/blue-t-shirt-maple-leaf.webp'
  },
  {
    id: 2,
    title: "Ottawa T-Shirt",
    basePrice: 7.99,
    materials: {
      cotton: 7.99,
      "organic cotton": 9.99
    },
    image: "dark-green-t-shirt-parliament-hill.webp"
  },
  {
    id: 3,
    title: "Montreal T-Shirt",
    basePrice: 7.99,
    materials: {
      cotton: 7.99,
      "dry-fit": 9.99
    },
    image: "dark-navy-blue-t-shirt-montreal.webp"
  },
  {
    id: 4,
    title: "Landscape T-Shirt",
    basePrice: 7.99,
    materials: {
      polyester: 7.99,
      "eco-blend": 10.99
    },
    image: "green-t-shirt-landscape.webp"
  },
  {
    id: 5,
    title: "Quebec City T-Shirt",
    basePrice: 7.99,
    materials: {
      cotton: 7.99,
      "organic cotton": 9.99,
      "hemp blend": 10.99
    },
    image: "light-gray-t-shirt-quebec-city.webp"
  },
  {
    id: 6,
    title: "Beaver T-Shirt",
    basePrice: 7.99,
    materials: {
      cotton: 7.99,
      polyester: 8.49,
      "dry-fit": 9.99
    },
    image: "maroon-t-shirt-beaver.webp"
  }
];

// Display products
const productContainer = document.getElementById('products')

const htmlTemplate = [];

//Define a Function 'display products'
function displayProducts(productsArr){
  //For each 'product'
  productsArr.forEach( product => {
    htmlTemplate.push(`<div class="col col-12 col-md-6 col-lg-4 mb-4">
                <div class="card h-100 d-flex flex-column rounded-0">
                  <a href="#" data-bs-toggle="modal" data-bs-target="#productModal">
                    <img src="../../assets/images/${product.img}" class="img-fluid mb-3" alt="${product.title}">
                  </a>
                  <div class="card-body d-flex flex-column">
                    <h3 class="card-title text-center mb-3">"${product.title}"</h3>
                    <label for="material" class="form-label mb-0 me-2">Material:</label>
                    <select name="material" id="material" class="form-select mb-3 rounded-0">
                      <option value="cotton">Cotton</option>
                      <option value="polyester">Polyester</option>
                      <option value="">Blend</option>
                    </select>
                    <div class="mt-auto d-flex justify-content-between align-items-center">
                      <p class="mb-0"><strong>${product.basePrice}</strong></p>
                      <button class="btn btn-secondary rounded-0">Add to cart</button>
                    </div>
                  </div>
                </div>
              </div>`);
  }) //closes the function and ForEach
  productContainer.innerHTML = htmlTemplate.join('');
} //close function

displayProducts(products);

//Refactor to include dynamic properties

//1. Display products
//Task: Initialize a list called 'products' containing product objects Each product object has:

//id: unique identifier (e.g., 1)
//title: name of the product (e.g., "Maple Leaf T-Shirt")
//basePrice: base price of the product (e.g., 7.99)
//materials: an object with material types and their prices
//e.g., materials = { "cotton": 7.99, "polyester": 8.99, "blend": 9.49 }
//image: path to the product image (e.g., "images/blue-t-shirt-maple-leaf.webp")

//const products = []
//Task: Select the element where the product cards will be inserted.


// Set 'productContainer' to the HTML element with the id 'products'

//Task: Build a HTML template for Each Product Dynamically


// Initialize an empty list called 'htmlTemplate'

// Define a function 'displayProducts':
//   For each 'product':
//     Create a string 'productHTML' using template literals (or string concatenation):
//       - Include a container div with appropriate classes
//       - Add an image element with 'product.image' and 'product.title'
//       - Include a title heading with 'product.title'
//       - Display 'product.basePrice' 
//       - Add an "Add to cart" button with appropriate attributes
//   End For

//   Set 'productContainer.innerHTML' to the joined string of 'htmlTemplate'

// Call 'displayProducts' to execute the function
//Why This Matters: Dynamically generating HTML content allows for scalability and flexibility in displaying data-driven content on webpages. It enables updates to the data model without manual changes to the HTML structure.

//2. Refactor to include dinamic properties (Material)
//Understanding how to work with dynamic object properties is crucial when dealing with complex data structures. Methods like Object.keys(), Object.values(), and Object.entries() help iterate over these properties effectively.

//Task: Use Object.entries() to Display Material Options Dynamically


// Modify the 'displayProducts' function:

//   For each 'product' in 'products':
//     Create a string 'productHTML' starting with the container div and image as before

//     Add a label and a select dropdown for materials:
//       - Start the select element with an id based on 'product.id'

//     Use 'materialEntries' to get the entries of 'product.materials':
//       - Set 'materialEntries' to Object.entries(product.materials)

//     For each 'material' in 'materialEntries', create the HTML template for the option

//     End Inner For

//     Close the select element in 'productHTML'

//     Continue adding the price display and "Add to cart" button as before

//   End For

// Set 'productContainer.innerHTML' to the joined string of 'htmlTemplate'
// Why This Approach?: By using Object.entries() we can iterate over an object's properties without knowing them ahead of time. This makes the code adaptable to changes in the product's material options. It promotes reusability and maintainability, allowing for easy updates to the product data without altering the core display logic.

