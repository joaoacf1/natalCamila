const card = document.querySelector('#card');
const button = document.querySelector("#button");
button.addEventListener("click",()=> {
  card.classList.toggle("flip")
});
