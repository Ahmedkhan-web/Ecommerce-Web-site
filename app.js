const buttons = document.querySelector(".btns")
const cont = document.querySelector(".container")

const products = [
  { name: "iPhone 14", category: "Mobile", price: 1200, brand: "Apple" },
  { name: "Galaxy S23", category: "Mobile", price: 1100, brand: "Samsung" },
  { name: "Pixel 8", category: "Mobile", price: 900, brand: "Google" },
  { name: "OnePlus 11", category: "Mobile", price: 850, brand: "OnePlus" },
  { name: "Redmi Note 12", category: "Mobile", price: 300, brand: "Xiaomi" },
  { name: "MacBook Air M2", category: "Laptop", price: 1400, brand: "Apple" },
  { name: "Dell XPS 13", category: "Laptop", price: 1300, brand: "Dell" },
  { name: "HP Spectre x360", category: "Laptop", price: 1250, brand: "HP" },
  { name: "Lenovo ThinkPad X1", category: "Laptop", price: 1500, brand: "Lenovo" },
  { name: "Asus ROG Zephyrus", category: "Laptop", price: 1800, brand: "Asus" },
  { name: "AirPods Pro", category: "Accessories", price: 250, brand: "Apple" },
  { name: "Galaxy Buds 2", category: "Accessories", price: 180, brand: "Samsung" },
  { name: "Sony WH-1000XM5", category: "Accessories", price: 400, brand: "Sony" },
  { name: "JBL Tune 760NC", category: "Accessories", price: 150, brand: "JBL" },
  { name: "Bose QuietComfort 45", category: "Accessories", price: 330, brand: "Bose" },
  { name: "Apple Watch Series 9", category: "Wearable", price: 450, brand: "Apple" },
  { name: "Galaxy Watch 6", category: "Wearable", price: 420, brand: "Samsung" },
  { name: "Fitbit Versa 4", category: "Wearable", price: 230, brand: "Fitbit" },
  { name: "Garmin Forerunner 255", category: "Wearable", price: 350, brand: "Garmin" },
  { name: "Amazfit GTR 4", category: "Wearable", price: 200, brand: "Amazfit" },
  { name: "Sony Bravia 55\"", category: "TV", price: 900, brand: "Sony" },
  { name: "Samsung QLED 55\"", category: "TV", price: 950, brand: "Samsung" },
  { name: "LG OLED C2", category: "TV", price: 1200, brand: "LG" },
  { name: "TCL 4K Smart TV", category: "TV", price: 600, brand: "TCL" },
  { name: "Hisense U7H", category: "TV", price: 700, brand: "Hisense" },
  { name: "Canon EOS R10", category: "Camera", price: 980, brand: "Canon" },
  { name: "Nikon Z50", category: "Camera", price: 950, brand: "Nikon" },
  { name: "Sony A6400", category: "Camera", price: 1000, brand: "Sony" },
  { name: "Fujifilm X-T30", category: "Camera", price: 900, brand: "Fujifilm" },
  { name: "GoPro Hero 11", category: "Camera", price: 500, brand: "GoPro" },
  { name: "Logitech MX Master 3", category: "Accessories", price: 100, brand: "Logitech" },
  { name: "Razer DeathAdder", category: "Accessories", price: 70, brand: "Razer" },
  { name: "Apple Magic Keyboard", category: "Accessories", price: 120, brand: "Apple" },
  { name: "Corsair K95", category: "Accessories", price: 200, brand: "Corsair" },
  { name: "SteelSeries Apex Pro", category: "Accessories", price: 220, brand: "SteelSeries" },
  { name: "PlayStation 5", category: "Gaming", price: 500, brand: "Sony" },
  { name: "Xbox Series X", category: "Gaming", price: 500, brand: "Microsoft" },
  { name: "Nintendo Switch OLED", category: "Gaming", price: 350, brand: "Nintendo" },
  { name: "Steam Deck", category: "Gaming", price: 400, brand: "Valve" },
  { name: "Asus ROG Ally", category: "Gaming", price: 600, brand: "Asus" }
];

let category = [];
products.map(item=>{
    if(category.indexOf(item.category)===-1){
        category.push(item.category);
    }
})

category.map((item,index)=>{
  buttons.innerHTML+=`<button onclick="filterProduct(${index})">${item}</button>`
})

function renderobject(arr){
  cont.innerHTML=""
  arr.map(item=>{
    cont.innerHTML+=`<div class="card">
      <h2>${item.name}</h2>
      <p>Category: ${item.category}</p>
      <p class="price">Price: $${item.price}</p>
    </div>`
  })
}

renderobject(products)

function filterProduct(index){
  const filteredProduct = products.filter(item => item.category===category[index])
  renderobject(filteredProduct)
}

buttons.addEventListener('click',event=>{
  if(event.target.tagName==="BUTTON"){
    [...buttons.children].forEach(b=>b.className="")
    event.target.className="active"
  }
})
