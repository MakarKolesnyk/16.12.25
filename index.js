const wrapper = document.getElementById("wrapper");
const btn = document.getElementById("btn");
wrapper.addEventListener("click", (event) => {
  console.log('click wrapper');
  // console.group();
  // console.log(event);
  // console.log(event.target);
  // console.log(event.currentTarget);
  // console.group()
  // console.log(event.clientX, event.clientX);
  // console.log(event.offsetXX, event.offsetXX);
  // console.groupEnd();
});
btn.addEventListener('click', ()=>{
  console.log('click btn');
})
