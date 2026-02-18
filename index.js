const [form] = document.forms;
const loginPattern = /^[a-z0-9_-]{5,15}$/;
const passwordPattern =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,32}$/;

const login = form.elements.login;
const password = form.elements.password;

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

login.addEventListener("focus", () => {
  login.style.backgroundColor = "#00ff0033";
});

login.addEventListener("blur", () => {
  const loginValue = login.value.trim();
  if (loginValue === "") {
    login.style.backgroundColor = "red";
  }
});

login.addEventListener("change", () => {
  login.style.backgroundColor = "#00ff2f";
});

login.addEventListener("input", () => {
    const cyrillic = /[А-Яа-я]+/
    const loginValue = login.value.trim();
    if(cyrilic.test(loginValue)){
        alert('you write cyrillic')
        login.style.fontSize='20px'
    } else {
        login.style.fontSize=''
    }
  login.style.backgroundColor = "yellow";
});


