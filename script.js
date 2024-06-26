//changing navbar style
const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach((link) =>
  link.addEventListener("click", function handleNavClick(event) {
    const navLinks = document.querySelectorAll(".navbar a");

    navLinks.forEach((link) => link.classList.remove("home-active"));

    event.target.classList.add("home-active");
  })
);
//applying dark mode for the page
const toggleDarkMode = document.getElementById("theme-toggle");
let home = document.querySelector(".container");
let box = document.querySelector(".box1");
toggleDarkMode.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
  let change = home.style.background;
  if (change.includes("img/background2.jpg")) {
    home.style.background = 'url("img/background.png")';
  } else {
    home.style.background = 'url("img/background2.jpg")';
  }
});

//getting the name and gender from the login form
var data = document.cookie;

var newData = data.split("; ");
console.log(newData);
var _name = newData.find((row) => row.startsWith("userName="))?.split("=")[1];
var gender = newData.find((row) => row.startsWith("gender="))?.split("=")[1];
let profileImage = document.getElementById("profileImage");
let profileText = document.getElementById("profileText");
if (gender == "male") {
  profileImage.src = "https://avatar.iran.liara.run/public/boy";
  profileText.textContent = `${_name}`;
} else {
  profileImage.src = "https://avatar.iran.liara.run/public/girl";
  profileText.textContent = `${_name}`;
}
//changing photos for the home section
var images = document.getElementById("gallery");
var index = 1;

if (index == 4) {
  index = 1;
}
interval = setInterval(function () {
  index++;
  images.src = `./img/home${index}.png`;
  if (index == 4) {
    index = 1;
  }
}, 1500);

//getting the products form a json file
function navigateToProducts(category) {
  window.location.href = `product.html?category=${category}`;
}
function navigateToCart() {
  window.location.href = "cart.html";
}
