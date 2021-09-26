const open = document.querySelector("#splash");
const container = document.querySelector("#yo");

// open.addEventListener("click", (event) => {
//   open.classList.add("invisible");
//   container.classList.remove("invisible");
// });

let animation = anime({
  targets: "#bar",
  height: "0%",
  easing: "easeInOutQuad",
  direction: "reverse",
  duration: 2250,
});
