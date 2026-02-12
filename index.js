const root = document.getElementById("root");
const carBrands = [
  "BMW",
  "Audi",
  "Mercedes",
  "Toyota",
  "Honda",
  "Ford",
  "Tesla",
];

const ol = document.createElement('ol')
const lis = carBrands.map((carBrands) => {
  const li = document.createElement("li");
  li.textContent = carBrands;
  return li;
});


ol.append(...lis);
root.append(ol)
