
const btns = document.querySelectorAll('button')

// classList

for (const btn of btns) {
  // console.dir(btn.classList)
  btn.classList.add('btn');
  btn.addEventListener('mouseenter', ()=>{
    btn.classList.add('active')
  })
  btn.addEventListener('mouseout', ()=>{
    btn.classList.remove('active')
  })
  btn.addEventListener('click', ()=>{
    btn.classList.toggle('shadow')
  })
}