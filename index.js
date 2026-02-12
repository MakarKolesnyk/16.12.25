const wrapper = document.getElementById("wrapper");
const block = document.getElementById("block");

// wrapper.addEventListener('mousemove', (event)=>{
// block.style.left = event.clientX + 'px'
// block.style.top = event.clientY + 'px'
// })

let x = 0;
let y = 0;
const step = 5;

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    console.log("Right");
    x += step;
  }
  if (event.key === "ArrowLeft") {
    console.log("Left");
    x -= step;
  }
  if (event.key === "ArrowUp") {
    console.log("UP");
    y -= step;
  }
  if (event.key === "ArrowDown") {
    console.log("down");
    y += step;
  }
  block.style.left = x + 'px'
  block.style.top = y + 'px'
});
