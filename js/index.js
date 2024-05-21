let btn = document.querySelector("nav .btn");
let navLinks = document.querySelector("nav .navlinks");
let allLinks = document.querySelectorAll(".mainlinks li  a");

btn.addEventListener("click",() => {
  btn.classList.contains("changeme") ? btn.classList.remove("changeme") : btn.classList.add("changeme");
  navLinks.classList.toggle("openit")
})

allLinks.forEach((link) => {
  link.addEventListener("click", function () {
    document.querySelector(".active")?.classList.remove("active");
    this.classList.add("active");
    btn.classList.remove("changeme");
    navLinks.classList.remove("openit")
  })
});

document.addEventListener("click", (e)=> {
    if(!navLinks.contains(e.target) && !btn.contains(e.target)) {
      navLinks.classList.remove("openit");
      btn.classList.remove("changeme")
    }
  })
  
  let carsInfo = [
    {
      name: "Mercedes-G63",
      description:
        "",
      image: "imgs/g63.jpg",
    },
    {
      name: "Amg-GT-Black-Series",
      description:
        "",
      image: "imgs/gt-black-series.jpg",
    },
    {
      name: "Lamborghini Aventador Svj",
      description:
        "",
      image: "imgs/aventador_svj_r_g3.jpg",
    },
    {
        name: "Bentley Flying Spur",
        description:
          "",
        image: "imgs/bently.jpg",
      },
      {
        name: "Ferrari 812 Competizione",
        description:
          "",
        image: "imgs/ferrari812.jpg",
      }
]
    let slide = document.querySelectorAll(".slide");

    carsInfo.forEach((value) => {
  let item = document.createElement("div");
  item.className = "item";
  item.style.backgroundImage = `url(${value.image})`;
  let info = document.createElement("div");
  info.className = "info";
  let name = document.createElement("h2");
  name.innerText = value.name;
  let desc = document.createElement("p");
  desc.innerText = value.description;
  info.appendChild(name);
  info.appendChild(desc);
  item.appendChild(info);
  let overlay = document.createElement("div");
  overlay.className = "overlay";
  item.appendChild(overlay);
  slide.forEach((slideElement) => {
    slideElement.appendChild(item)
  })
})

document.querySelector(".next").onclick = function () {
  let lists = document.querySelectorAll(".item");
  document.querySelector(".slide").appendChild(lists[0])
}
document.querySelector(".prev").onclick = function () {
  let lists = document.querySelectorAll(".item");
  document.querySelector(".slide").prepend(lists[lists.length - 1])
}
let cars = [
    {
      id: 1,
      title: "Mercedes-G63",
      image: "../imgs/g63.jpg",
      price: "210,000",
    },
    {
      id: 2,
      title: "Amg-GT-Black-Series",
      image: "../imgs/gt-black-series.jpg",
      price: "325,000",
    },
    {
      id: 3,
      title: "Lamborghini Aventador Svj",
      image: "../imgs/aventador_svj_r_g3.jpg",
      price: "700,000",
    },
    {
      id: 4,
      title: "Bentley Flying Spur",
      image: "../imgs/bently.jpg",
      price: "327,000",
    },
    {
    id: 5,
    title: "Ferrari 812 Competizione",
    image: "../imgs/ferrari812.jpg",
    price: "1,200,000",
  }
]
let butns = document.querySelectorAll(".btn-slider");
let sliderDiv = document.querySelector(".slider");
let ulCards = document.createElement("ul");
let body = document.querySelector("body");
let firstCardWidth;

function getcars() {
  cars.forEach((value)=> {
    let liCard = document.createElement("li");
    liCard.className = "card";
    ulCards.className = "carousel";
    ulCards.appendChild(liCard);
    liCard.innerHTML = `
    <div class="info">
      <div class="img-container">
        <img src="IMGS/${value.image}" alt="${value.title}"/>
      </div>
      <div class="sub-info">
        <div class="text">
          <h3>${value.title}</h3>
          <i onclick="changeIcon(this)" class="fa-regular fa-heart"></i>
        </div>
        <div class="main">
          <span>$${value.price}</span>
          <ul>
            <li><i class="fa-solid fa-star"></i></li>
            <li><i class="fa-solid fa-star"></i></li>
            <li><i class="fa-solid fa-star"></i></li>
            <li><i class="fa-solid fa-star"></i></li>
            <li><i class="fa-solid fa-star"></i></li>
          </ul>
        </div>
        <button onclick="popUp()" class="bookit">Buy Now</button>
      </div>
    </div>
    `;
    sliderDiv.appendChild(ulCards);
    if (!firstCardWidth) {
      firstCardWidth = liCard.offsetWidth;
    }
})
}
butns.forEach((btn)=> {
  btn.addEventListener("click", ()=> {
    ulCards.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
  })
})
getcars()

function changeIcon (icon) {
  if (icon.classList.contains("activeit")) {
    icon.classList.remove("activeit");
    icon.classList.remove("fas");
    let popup = document.createElement("div");
    popup.className = "popup-massage";
    popup.innerText = "Removed Form Favorites";
    document.body.appendChild(popup);
    setTimeout(()=> {
      document.body.removeChild(popup);
    }, 2000);
  }else {
    icon.classList.add("activeit");
    icon.classList.add("fas");
    let popup = document.createElement("div");
    popup.className = "popup-massage";
    popup.innerText = "Added To Favorites";
    document.body.appendChild(popup);
    setTimeout(()=> {
      document.body.removeChild(popup);
    }, 2000);
  }
}
/*services */
window.addEventListener("scroll", reveal);
function reveal() {
  let reveals = document.querySelectorAll(".reveal");
  for(let i = 0; i < reveals.length ; i++) {
    let height = window.innerHeight;
    let revealPoint = 100;
    let revealTop = reveals[i].getBoundingClientRect().top;
    if (revealTop < height - revealPoint) {
      reveals[i].classList.add("showcard");
    } else {
      reveals[i].classList.remove("showcard");
    }
  }
}






/*end services*/
/* g63 */

var typed = new Typed('#element', {
    strings: ['MERCEDES G63'],
    typeSpeed: 90,
    loop: true,
    loopCount: Infinity,
  });

  function scrollGalleryLeft() {
    const container = document.getElementById('imageContainer');
    const imageWidth = container.querySelector('img').clientWidth + 20; // 20 is the gap between images
    container.scrollBy({ left: -imageWidth, behavior: 'smooth' });
  }

  function scrollGalleryRight() {
    const container = document.getElementById('imageContainer');
    const imageWidth = container.querySelector('img').clientWidth + 20; // 20 is the gap between images
    container.scrollBy({ left: imageWidth, behavior: 'smooth' });
  }


  /* amg gt-black series*/
  var typed = new Typed('#element1', {
    strings: ['AMG GT-BLACK SERIES'],
    typeSpeed: 90,
    loop: true,
    loopCount: Infinity,
  });

  function scrollGalleryLeft1() {
    const container = document.getElementById('imageContainer1');
    const imageWidth = container.querySelector('img').clientWidth + 20; // 20 is the gap between images
    container.scrollBy({ left: -imageWidth, behavior: 'smooth' });
  }

  function scrollGalleryRight1() {
    const container = document.getElementById('imageContainer1');
    const imageWidth = container.querySelector('img').clientWidth + 20; // 20 is the gap between images
    container.scrollBy({ left: imageWidth, behavior: 'smooth' });
  }

/* lamborghini*/
  var typed = new Typed('#element2', {
    strings: ['LAMBORGHINI AVENTADOR SVJ'],
    typeSpeed: 90,
    loop: true,
    loopCount: Infinity,
  });

  function scrollGalleryLeft2() {
    const container = document.getElementById('imageContainer2');
    const imageWidth = container.querySelector('img').clientWidth + 20; // 20 is the gap between images
    container.scrollBy({ left: -imageWidth, behavior: 'smooth' });
  }

  function scrollGalleryRight2() {
    const container = document.getElementById('imageContainer2');
    const imageWidth = container.querySelector('img').clientWidth + 20; // 20 is the gap between images
    container.scrollBy({ left: imageWidth, behavior: 'smooth' });
  }

  /* bently */
  var typed = new Typed('#element3', {
    strings: ['BENTLY FLYING SPUR'],
    typeSpeed: 90,
    loop: true,
    loopCount: Infinity,
  });

  function scrollGalleryLeft3() {
    const container = document.getElementById('imageContainer3');
    const imageWidth = container.querySelector('img').clientWidth + 20; // 20 is the gap between images
    container.scrollBy({ left: -imageWidth, behavior: 'smooth' });
  }

  function scrollGalleryRight3() {
    const container = document.getElementById('imageContainer3');
    const imageWidth = container.querySelector('img').clientWidth + 20; // 20 is the gap between images
    container.scrollBy({ left: imageWidth, behavior: 'smooth' });
  }
  /* ferrari */
  var typed = new Typed('#element4', {
    strings: ['FERRARI 812'],
    typeSpeed: 90,
    loop: true,
    loopCount: Infinity,
  });

  function scrollGalleryLeft4() {
    const container = document.getElementById('imageContainer4');
    const imageWidth = container.querySelector('img').clientWidth + 20; // 20 is the gap between images
    container.scrollBy({ left: -imageWidth, behavior: 'smooth' });
  }

  function scrollGalleryRight4() {
    const container = document.getElementById('imageContainer4');
    const imageWidth = container.querySelector('img').clientWidth + 20; // 20 is the gap between images
    container.scrollBy({ left: imageWidth, behavior: 'smooth' });
  }
  /* about */
  var typed = new Typed('#who', {
    strings: ['What We Offer'],
    typeSpeed: 90,
    loop: true,
    loopCount: Infinity,
  });
