const root = document.getElementById("root");

let count = 0
const iditerval =  setInterval(()=>{
  console.log(count);
  count++
  if(count > 10){
    clearInterval(iditerval)
  }
}, 1000)
