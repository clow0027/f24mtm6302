// Variables/Objects stored inside variable
const products = [
  {
    id: 1,
    title:"Maple Leaf T-Shirt",
    basePrice: 7.99,
    // You technically don't need "" here. Make sure to use them when your value includes special characters or spaces!!!
    materials: {
      "cotton": 7.99, 
      "polyester": 8.99, 
      "blend": 9.49 
    },
    image: 'blue-t-shirt-maple-leaf.webp'
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

// Initialize an empty list(array) called 'htmlTemplate'
const htmlTemplate = [];
// Define a function 'displayProducts':
function displayProducts(productsArr){
  //   For each 'product':
  productsArr.forEach(product => {
    //Paste card template from HTML
    htmlTemplate.push(`<div class="col col-12 col-md-6 col-lg-4 mb-4">
                <div class="card h-100 d-flex flex-column rounded-0">
                  <a href="#" data-bs-toggle="modal" data-bs-target="#productModal">
                    <img src="../../assets/images/${product.image}" class="img-fluid mb-3" alt="${product.title}">
                  </a>
                  <div class="card-body d-flex flex-column">
                    <h3 class="card-title text-center mb-3">${product.title}</h3>
                    <label for="material" class="form-label mb-0 me-2">Material:</label>
                    <select name="material" id="material" class="form-select mb-3 rounded-0">`) // closes push
                    //Makes Materials Dynamic
                    //get keys of
                      <option value="cotton">Cotton</option>
                      <option value="polyester">Polyester</option>
                      <option value="">Blend</option>
                    </select>
                    <div class="mt-auto d-flex justify-content-between align-items-center">
                      <p class="mb-0"><strong>$${product.basePrice}</strong></p>
                      <button class="btn btn-secondary rounded-0">Add to cart</button>
                    </div>
                  </div>
                </div>
              </div>`);

  }) //closes the function and the forEach method
//   Set 'productContainer.innerHTML' to the joined string of 'htmlTemplate'
//This gives us a single string that contains all elements
  productContainer.innerHTML = htmlTemplate.join('')
}//Closes the function

// Call 'displayProducts' to execute the function
displayProducts(products);

//Refactor to include dynamic properties

