const frm = document.querySelector("#details");
const btn = document.querySelector("#btn");

var user;
frm.addEventListener("submit", (e) => {
  console.log(e.target.value);
  e.preventDefault();
});
