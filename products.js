window.onload = function () {
  var urlParams = new URLSearchParams(window.location.search);
  var category = urlParams.get("category");
  if (category) {
    loadProducts(category);
  }
};

function loadProducts(category) {
  var productsContainer = document.getElementById("productsContainer");
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "data.json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        var products = JSON.parse(xhr.responseText);
        var filteredProducts = products.filter(
          (product) => product.category === category
        );
        var productsHTML = filteredProducts
          .map(
            (product, index) => `
                <div class="box">
                  <img src="${product.image}" alt="" />
                  <h2>${product.name}</h2>
                  <h3 class="price">${product.price} </h3>
                  <i class="bx bx-cart-alt" id="carted-${index}" data-product='${JSON.stringify(
              product
            )}'></i>
                  <i class="bx bx-heart"></i>
                </div>
              `
          )
          .join("");
        productsContainer.innerHTML = productsHTML;

        filteredProducts.forEach((product, index) => {
          let btn = document.getElementById(`carted-${index}`);
          btn.addEventListener("click", function () {
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            cart.push(product);
            localStorage.setItem("cart", JSON.stringify(cart));
          });
        });
      } else {
        console.error("Failed to load products.");
      }
    }
  };
  xhr.send();
}

function navigateToHome() {
  window.location.href = "home.html";
}
function navigateToCart() {
  window.location.href = "cart.html";
}
