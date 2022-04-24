const showNav = () => {
  const button = document.querySelector(".burger-menu");

  const menu = document.querySelector(".menu");
  button.addEventListener("click", (eve) => {
    menu.classList.toggle("menu-show");
    console.log("work");

    eve.target.classList.toggle("burger-rotate");
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
  data
    .slice(num, num + 3)
    .map((pet, id) =>
      document.querySelector(".main-friends__pets").appendChild(createPet(pet))
    );
};

const showPets = () => {
  let num = 0;
  render(num);
  const btns = document.querySelector(".main-friends__control");

  btns.addEventListener("click", (eve) => {
    if (eve.target.classList.contains("next")) {
      document.querySelector(".main-friends__pets").innerHTML = "";

      if (num <= 3) {
        num += 3;
        render(num);

        console.log(num);
      } else if (num >= 4) {
        num = num % 4;
        render(num);
        console.log(num);
      }
    } else if (eve.target.classList.contains("prev")) {
      document.querySelector(".main-friends__pets").innerHTML = "";
      if (num >= 3) {
        num -= 3;
        render(num);
        console.log(num);
      } else if (num <= 2) {
        if (num === 0) {
          num = 4;
          render(num);
          console.log(num);
        } else if (num === 1) {
          num = 5;
          render(num);
          console.log(num);
        } else if (num === 2) {
          num = 6;
          render(num);
          console.log(num);
        }
      }
    }
  });
};
const getIdCard = () => {
  const petsCard = document.querySelector(".main-friends__pets");

  petsCard.addEventListener("click", (eve) => {
    const tag = eve.target.tagName;
    let id = null;
    if (tag === "A") {
      console.log(eve.target.parentElement.dataset.name);
    }
  });
};
getIdCard();

showPets();
