const showNav = () => {
  const button = document.querySelector(".burger-menu");
  const navMenu = document.querySelector;
  button.addEventListener("click", (eve) => {
    const menu = document.querySelector(".menu")
    menu.style.display = "flex"
    menu.classList.add("menu-show")
    eve.target.style.transform = "rotate(90deg)";
  });
};

showNav();

const createPet = (dataPet) => {
  const petContainer = `<div class="pet-container data-name=${dataPet.name}">
    <div class="pet-image">
      <img
        src=${dataPet.img}
        alt=${dataPet.name}
      />
    </div>
    <h1 class="pet-title">${dataPet.name}</h1>
    <div class="pet-link">
      <a href="#">Learn more</a>
    </div>
  </div>`;
  const pet = document.createElement("div");
  pet.classList.add("main-friends__pet");

  pet.innerHTML = petContainer;

  return pet;
};
const render = (num) => {
  const number = Math.floor(Math.random() * num);

  data
    .slice(number - 3, number)
    .map((pet,id) =>
      document.querySelector(".main-friends__pets").appendChild(createPet(pet))
    );
};


const showPets = () => {
  let num = 3;
  render(9);
  const btns = document.querySelector(".main-friends__control");

  btns.addEventListener("click", (eve) => {
    if (eve.target.classList.contains("next")) {
      document.querySelector(".main-friends__pets").innerHTML = "";

      render(9);
    } else if (eve.target.classList.contains("prev")) {
      document.querySelector(".main-friends__pets").innerHTML = "";
      console.log(num);
      if (3 < num || num >= 6) {
        render(num);
        num -= 3;
        console.log("first");
      } else if (num < 3 && num !== 0) {
        num *= 4;
        render(num);
        console.log("second");
      } else if (num === 3) {
        render(num);
        num = 0;
        console.log("three");
      } else {
        render(3);
        num = 3;
      }
    }
  });
};
const getIdCard = ()=> {
  const petsCard = document.querySelector(".main-friends__pets")
  
  petsCard.addEventListener("click", (eve)=> {
    const tag = eve.target.tagName;
    let id = null
    if (tag === "A") {
      console.log(eve.target.parentElement.dataset.name)
    }
  })
}
getIdCard()

showPets();
