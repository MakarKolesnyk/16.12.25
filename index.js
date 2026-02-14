const root = document.getElementById("root");

const products = [
  { id: 1, name: "Laptop", price: 25000, category: "Electronics" },
  { id: 2, name: "Phone", price: 15000, category: "Electronics" },
  { id: 3, name: "Tablet", price: 12000, category: "Electronics" },
  { id: 4, name: "Monitor", price: 8000, category: "Electronics" },
  { id: 5, name: "Keyboard", price: 1200, category: "Accessories" },
  { id: 6, name: "Mouse", price: 800, category: "Accessories" },
  { id: 7, name: "Headphones", price: 3000, category: "Audio" },
  { id: 8, name: "Speaker", price: 4500, category: "Audio" },
  { id: 9, name: "Webcam", price: 2200, category: "Accessories" },
  { id: 10, name: "Printer", price: 7000, category: "Office" },
  { id: 11, name: "Scanner", price: 6500, category: "Office" },
  { id: 12, name: "Smartwatch", price: 9000, category: "Electronics" },
  { id: 13, name: "Power Bank", price: 1500, category: "Accessories" },
  { id: 14, name: "USB Flash", price: 600, category: "Storage" },
  { id: 15, name: "External HDD", price: 5000, category: "Storage" }
];

const section = document.createElement('section')
section.classList.add('shop')
const cards = products.map((product)=>createCard(product))
section.append(...cards)
root.append(section)

function createCard(product){
  const {name, category, price} = product
  const article = document.createElement('article')
  article.classList.add('product')
  const h2 = document.createElement('h2')
  h2.classList.add('product-name')
  h2.textContent = name;

  const h3 = document.createElement('h3')
  h3.classList.add('product-category')
  h3.textContent = category

  const p = document.createElement('p')
  p.classList.add('product-price')
  p.textContent = price + ' uah'

  const button = document.createElement('button')
  button.classList.add('product-addtocart')
  button.textContent = ('add to cart')

  article.append(h2, h3, p, button)
  return article;
}