const open = document.querySelector("#splash");
const container = document.querySelector("#yo");

// open.addEventListener("click", (event) => {
//   open.classList.add("invisible");
//   container.classList.remove("invisible");
// });

let animation = anime({
  targets: "#bar",
  translateY: 250,
  easing: "easeInOutExpo",
});
