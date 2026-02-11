const wrapper = document.getElementById("wrapper");
const block = document.getElementById("block");

// wrapper.addEventListener('mousemove', (event)=>{
// block.style.left = event.clientX + 'px'
// block.style.top = event.clientY + 'px'
// })

window.addEventListener("keydown", (event) => {
  console.log(event);
  if (event.key === "ArrowRight") {
    console.log("Right");
  }
  if (event.key === "ArrowLeft") {
    console.log("Left");
  }
  if (event.key === "ArrowUp") {
    console.log("UP");
  }
  if (event.key === "ArrowDown") {
    console.log("down");
  }
});
