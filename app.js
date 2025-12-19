const buttons = document.querySelector(".btns")
const cont = document.querySelector(".container")

const products = [
  { name: "iPhone 14", category: "Mobile", price: 1200, brand: "Apple", image: "./images/products-images/iphone.jpg" },
  { name: "Galaxy S23", category: "Mobile", price: 1100, brand: "Samsung", image: "./images/products-images/samsung.jpg" },
  { name: "Pixel 8", category: "Mobile", price: 900, brand: "Google", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv2r6Fl15aXLRuC9Wo-xXircYZhILTD_XdGg&s" },
  { name: "OnePlus 11", category: "Mobile", price: 850, brand: "OnePlus", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG5cU1OyrVf6KTjS7k1I_VBcQBegr6bSmayg&s" },
  { name: "Redmi Note 12", category: "Mobile", price: 300, brand: "Xiaomi", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRetHjXSyxNOv6uz7vtcHZQxb9r-YpF0QWRuQ&s" },

  { name: "MacBook Air M2", category: "Laptop", price: 1400, brand: "Apple", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkwO2iEXH3ZsYRe3Zn8GvNUiaAO2NfiwDZwQ&s" },
  { name: "Dell XPS 13", category: "Laptop", price: 1300, brand: "Dell", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa-I7NS2kwTWT_KC9QUxuoePbKwvv1wHFhiw&s" },
  { name: "HP Spectre x360", category: "Laptop", price: 1250, brand: "HP", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsP45UkL7BANfeFRS6wf5XgegYRXy0sRwX_w&s" },
  { name: "Lenovo ThinkPad X1", category: "Laptop", price: 1500, brand: "Lenovo", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-8RVACGab0yh0GzfPJh3udOgBfA580NWplQ&s" },
  { name: "Asus ROG Zephyrus", category: "Laptop", price: 1800, brand: "Asus", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5HbODBoZioLn0SUCgI-TLUQLriPH1aMA3ag&s" },

  { name: "AirPods Pro", category: "Accessories", price: 250, brand: "Apple", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT36RSzCMIZ3YftC3zTuqi2z1rPacepERvxyQ&s" },
  { name: "Galaxy Buds 2", category: "Accessories", price: 180, brand: "Samsung", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiT8nfBylywUjFMFR3DukEHDDt3pb8ugTrzA&s" },
  { name: "Sony WH-1000XM5", category: "Accessories", price: 400, brand: "Sony", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYauoaTq2f4TGEJQlTsH9NrCQRGnOip24q4Q&s" },
  { name: "JBL Tune 760NC", category: "Accessories", price: 150, brand: "JBL", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-NBfXXwkXLvSJIdIa16TR2P02ZxdHeUlp-w&s" },
  { name: "Bose QuietComfort 45", category: "Accessories", price: 330, brand: "Bose", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrvmkvupOCJUEKLwIRgvCf1Fbsw0Xauebaqw&s" },

  { name: "Apple Watch Series 9", category: "Wearable", price: 450, brand: "Apple", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDLxo2USn2ATNU-mVKiRAK9oR4gEkglFAvEg&s" },
  { name: "Galaxy Watch 6", category: "Wearable", price: 420, brand: "Samsung", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSYCaCdnw0SK0celuHnVDOYga3YWC05KUVhA&s" },
  { name: "Fitbit Versa 4", category: "Wearable", price: 230, brand: "Fitbit", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7JK8mppxYFBiJRJJqj_ZyDiZY9hRpDepmtQ&s" },
  { name: "Garmin Forerunner 255", category: "Wearable", price: 350, brand: "Garmin", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR67d9rujAWpb5Ub2tyRJ3cv4pK2fmnUGkYNQ&s" },
  { name: "Amazfit GTR 4", category: "Wearable", price: 200, brand: "Amazfit", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWiPcmJiUvOfhdApolhC8sqyInaB6XbXCw4g&s" },

  { name: "Sony Bravia 55\"", category: "TV", price: 900, brand: "Sony", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYcTA9ECiY3QL3JigR2e3WvpaKw84MXBnI0Q&s" },
  { name: "Samsung QLED 55\"", category: "TV", price: 950, brand: "Samsung", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRRkY7e2iA0d1raJsvxsK307yKzhlV4i-bOg&s" },
  { name: "LG OLED C2", category: "TV", price: 1200, brand: "LG", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwLfZQMUF30Bpy4YQEX849PmtW-GQ8g8VBUg&s" },
  { name: "TCL 4K Smart TV", category: "TV", price: 600, brand: "TCL", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGOY9YozJVlsXhWLE7t6wOYiwoAUVzRmwOqg&s" },
  { name: "Hisense U7H", category: "TV", price: 700, brand: "Hisense", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7tlh-urguzd6sWLqPWayswHHuaOc7HJbzzA&s" },

  { name: "Canon EOS R10", category: "Camera", price: 980, brand: "Canon", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoMZHCi0UqoPo5RcWa9QdeKVCgLoT3wVooxA&s" },
  { name: "Nikon Z50", category: "Camera", price: 950, brand: "Nikon", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBjyhY61Prq7g53OOA5V0ZFZ0qExCpsJvrvA&s" },
  { name: "Sony A6400", category: "Camera", price: 1000, brand: "Sony", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFdU-7Z6qOmL0khSUUEEzFfxDl1W8eLlrvnQ&s" },
  { name: "Fujifilm X-T30", category: "Camera", price: 900, brand: "Fujifilm", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL3K5Q_IDalO08sf9QA7-4wYbIfZtfXmHgyw&s" },
  { name: "GoPro Hero 11", category: "Camera", price: 500, brand: "GoPro", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE_lJB1tcP_gzz1eO1pUXW0FEQ3jm8v19sHQ&s" },

  { name: "Logitech MX Master 3", category: "Accessories", price: 100, brand: "Logitech", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRDlIiE4XiN3i7YkuILixrJGLTw4N75AMOew&s" },
  { name: "Razer DeathAdder", category: "Accessories", price: 70, brand: "Razer", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5RMRtSnlWAWF2Ka-Z1V0_6zCPBhYUhBcSwg&s" },
  { name: "Apple Magic Keyboard", category: "Accessories", price: 120, brand: "Apple", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3NTHgW-fFLPeC7iRpXxCxvuaQjh1dq-2upQ&s" },
  { name: "Corsair K95", category: "Accessories", price: 200, brand: "Corsair", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqqNFWf6FYiZUs5tqO6aNXRz70btSA11Skfg&s" },
  { name: "SteelSeries Apex Pro", category: "Accessories", price: 220, brand: "SteelSeries", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzfLy_CL88mLMT4y0xTKl8NdFlp7H5DBgfzg&s" },

  { name: "PlayStation 5", category: "Gaming", price: 500, brand: "Sony", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8o9T1Pu0-NeysEVnTkBtY167945KK_soyDQ&s" },
  { name: "Xbox Series X", category: "Gaming", price: 500, brand: "Microsoft", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR00RWHZJ0aUq3RAZmrswi4H-m-wKMvOvqZ1w&s" },
  { name: "Nintendo Switch OLED", category: "Gaming", price: 350, brand: "Nintendo", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF3eUSWCeL6DS3PX9T5OsATL_jpb6C51qp9A&s" },
  { name: "Steam Deck", category: "Gaming", price: 400, brand: "Valve", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ4JLh4IlkCF5zAt6Fx7Ir4dXSY-8pGRMAqw&s" },
  { name: "Asus ROG Ally", category: "Gaming", price: 600, brand: "Asus", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHbpzF--UaSia4TpcCNEsHkWZdZ3NR_Kp_vQ&s" }
];



let category = [];
products.forEach(item => {
  if (!category.includes(item.category)) category.push(item.category);
});

category.forEach((item, index) => {
  buttons.innerHTML += `<button class="btn-cat" onclick="filterProduct(${index})">${item}</button>`;
});

function renderobject(arr) {
  cont.innerHTML = "";
  arr.forEach(item => {
    cont.innerHTML += `
      <div class="card" style="background-image: url('${item.image}')">
        <div class="card-content">
          <h2>${item.name}</h2>
          <p class="category">Category: ${item.category}</p>
          <p class="price">$${item.price}</p>
        </div>
      </div>
    `;
  });
}

renderobject(products);

function filterProduct(index) {
  const filteredProduct = products.filter(item => item.category === category[index]);
  renderobject(filteredProduct);
}

buttons.addEventListener('click', event => {
  if(event.target.tagName === "BUTTON") {
    [...buttons.children].forEach(b => b.className.remove("active"));
    event.target.classList.add = ("active");
  }
});