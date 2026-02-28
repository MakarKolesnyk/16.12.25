fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    console.table(data);
  })
  .catch((err) => console.log(err));

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));
