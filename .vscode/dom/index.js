console.log(document.title);
// console.log(document.getElementById("header").innerHTML);

const userName = document.getElementById("username");
const submit = document.getElementById("submit");
const greet = document.getElementById("greeting");

submit.addEventListener("click", function (even) {
  even.preventDefault();

  greet.innerHTML = "selamat datang " + userName.value;
});
