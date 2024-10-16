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
const productContainer = document.getElementById('products');

// Refactor to include dinamic properties 

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
