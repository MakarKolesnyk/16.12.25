const btn = document.querySelector('#block > button')
console.dir(btn)

const img = document.querySelector('#block > img')

btn.addEventListener('click', ()=>{
  img.classList.toggle('hide')
  btn.textContent=btn.textContent==='show picture'?'hide picture' : 'show picture'
})

const btnTheme = document.querySelector('button:first-of-type')
btnTheme.addEventListener('click', ()=>{
  btnTheme.textContent = btnTheme.textContent === 'light'?'dark':'light'
  document.body.classList.toggle('dark')
})