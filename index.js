const bigImg = document.getElementById('big')

const smallImgs = document.getElementsByClassName('small')

for (const smallImg of smallImgs) {
  smallImg.addEventListener('click', ()=>{
    bigImg.src = smallImg.src
  })
}