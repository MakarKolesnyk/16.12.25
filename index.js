const [form] = document.forms;
const login = form.elements.login;
const password = form.elements.password;
const radioElements = form.elements.drink;
const checkboxElements = form.elements.fruits
const massage = form.elements.massage;
console.dir(checkboxElements)
const select = form.elements.city;
const selectDep = form.elements.department;
selectDep.disabled = true;
const submitBtn = document.querySelector('[type="submit"]');
submitBtn.disabled = true;
let amountInput = 0;

const loginPattern = /^[a-z0-9_-]{5,15}$/;
const passwordPattern =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,32}$/;

  massage.addEventListener('keydown', (event)=>{
    console.log(event.target.value);
  })

  const arrayFruits = []
  checkboxElements.forEach((fruit)=>{
    fruit.addEventListener('change', (event)=>{
      arrayFruits.push(event.target.value)
      console.log(arrayFruits);
    })
  })

select.addEventListener("change", () => {
  if (select.value !== "null") {
    console.log(select.value);
    selectDep.disabled = false;
    selectDep.focus()
  } else {
    selectDep.disabled = true;
  }
});

selectDep.addEventListener('change', ()=>{
  if (selectDep.value !== "null") {
    console.log(selectDep.value);
  }
})

radioElements.forEach((radio) => {
  radio.addEventListener("change", (event) => {
    radioElements.forEach((elem) => {
      if (elem !== event.target) {
        elem.disabled = true;
      }
    });
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const login = form.elements.login.value.trim();
  const password = form.elements.password.value.trim();
  if (loginPattern.test(login) && passwordPattern.test(password)) {
    form.submit();
    alert("data send");
    return;
  }
  alert("enter right login or password");
});

login.addEventListener("change", () => {
  if (loginPattern.test(login.value.trim())) {
    amountInput++;
  }
  if (amountInput >= 2) {
    submitBtn.disabled = false;
  }
});
password.addEventListener("change", () => {
  if (passwordPattern.test(password.value.trim())) {
    amountInput++;
  }
  if (amountInput >= 2) {
    submitBtn.disabled = false;
  }
});

// login.addEventListener("focus", () => {
//   login.style.backgroundColor = "#00ff0033";
// });

// login.addEventListener("blur", () => {
//   const loginValue = login.value.trim();
//   if (loginValue === "") {
//     login.style.backgroundColor = "red";
//   }
// });

// login.addEventListener("input", () => {
//     const cyrillic = /[А-Яа-я]+/
//     const loginValue = login.value.trim();
//     if(cyrilic.test(loginValue)){
//         alert('you write cyrillic')
//         login.style.fontSize='20px'
//     } else {
//         login.style.fontSize=''
//     }
//   login.style.backgroundColor = "yellow";
// });
