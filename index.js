const bigImg = document.getElementById('big')

const smallImgs = document.getElementsByClassName('small')

for (const smallImg of smallImgs) {
  smallImg.addEventListener('click', ()=>{
    bigImg.src = smallImg.src
  })
}

const lisFruites = document.getElementsByTagName('li')

for (const fruite of lisFruites) {
  fruite.addEventListener('click', ()=>{
      fruite.style.backgroundColor = fruite.style.backgroundColor ==='pink' ? '' : 'pink'
  })
}