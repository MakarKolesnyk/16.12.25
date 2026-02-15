const root = document.getElementById("root");
const btnSubscribe = document.createElement('button')
btnSubscribe.textContent="Subscribe Now"
root.append(btnSubscribe)

const idTimeout = setTimeout(()=>{
  const removeSubsribe = ()=>{
    document.querySelector('.subsribe').remove()
  }
  const subsribe = document.createElement('div')
  subsribe.classList.add('subsribe')
  const close = document.createElement('span')
  close.textContent='X'
  close.addEventListener('click', removeSubsribe)
  const h2 = document.createElement('h2')
  h2.textContent='Subsribe to our email newstaller'
  const form = document.createElement('form')
  form.classList.add('subsribe-form')
  const input = document.createElement('input')
  const btn = document.createElement('button')
  btn.textContent='subsribe'
  btn.addEventListener('click', removeSubsribe)
  subsribe.append(close, h2, form)
  form.append(input, btn)
  root.append(subsribe)
}, 3000)

btnSubscribe.addEventListener('click', ()=>{
  clearTimeout(idTimeout)
})