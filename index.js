const tasks = document.getElementsByClassName('task')

for (const task of tasks) {
  task.addEventListener('click', ()=>{
  if (confirm('Do you want to delete?')) {
      task.style.display = 'none'
  }
  })
}

const btns = document.getElementsByClassName('btn')
const block = document.getElementById('block')

for (const btn of btns) {
  btn.style.backgroundColor = btn.textContent;
  btn.addEventListener('click', ()=>{
    block.style.backgroundColor = btn.textContent;
  })
}