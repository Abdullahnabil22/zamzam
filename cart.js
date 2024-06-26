window.onload = function () {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let container = document.getElementById("productsContainer");
  let productsHTML = cart
    .map(
      (product, index) => `
      <div class="box" id="product-${index}">
        <img src="${product.image}" alt="" />
        <h2>${product.name}</h2>
        <h3 class="price">${product.price} </h3>
        <i class='bx bx-x' id="remove-${index}" class="btn-remove" style="background: red;"></i>
      </div>
    `
    )
    .join("");
  container.innerHTML = productsHTML;

  cart.forEach((product, index) => {
    let btnRemove = document.getElementById(`remove-${index}`);
    btnRemove.addEventListener("click", function () {
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      window.location.reload();
    });
  });
};
function navigateToHome() {
  window.location.href = "index.html";
}
