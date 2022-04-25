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
  const petContainer = `<div class="pet-container id="${dataPet.name}">
    <div class="pet-image">
      <img
        src=${dataPet.img}
        alt=${dataPet.name}
      />
    </div>
    <h1 class="pet-title">${dataPet.name}</h1>
    <div class="pet-link link-modal">
      <a class="link-modal" href="">Learn more</a>
    </div>
  </div>`;
  const pet = document.createElement("div");
  pet.classList.add("main-friends__pet");

  pet.innerHTML = petContainer;

  return pet;
};
const closeModal = () => {
  const modal = document.querySelector(".modal");

  if (modal) {
    const btnClose = document.querySelector(".modal__btn-close");
    btnClose.addEventListener("click", (eve) => {
      modal.parentElement.style.display = "none";
      document.body.style.overflow = "";
    });
  }
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
const createModal = (pet) => {
  const modal = `<div class="modal">
  <div class="modal__btn-close">
    <img src="../../assets/icons/close.svg" alt="close" />
  </div>
  <div class="modal__container">
    <div class="modal__image">
      <img src=${pet.img} alt=${pet.name} />
    </div>

    <div class="modal__text">
      <div class="modal__text-container">
        <h3 class="modal__title">${pet.name}</h3>
        <p class="modal__subtitle">${pet.breed}</p>
        <p class="modal__info">
         ${pet.description}
        </p>
        <ul class="modal__list">
          <li class="modal__list-item">Age: ${pet.age}</li>
          <li class="modal__list-item">Inoculations: ${pet.inoculations}</li>
          <li class="modal__list-item">Diseases: ${pet.diseases}</li>
          <li class="modal__list-item">Parasites:  ${pet.parasites}</li>
        </ul>
      </div>
    </div>
  </div>
</div>`;
  return modal;
};
const showModal = (pet) => {
  const container = document.querySelector(".fixed-overlay");

  container.innerHTML = createModal(pet);
  container.style.display = "block";
  const body = document.body;
  body.style.overflow = "hidden";
  closeModal();
};
const getIdCard = () => {
  const petsCard = document.getElementsByClassName("main-friends__pets");
  petsCard[0].addEventListener("click", (eve) => {
    eve.preventDefault();
    let idElement = "";
    const target = eve.target;
    if (target.classList.contains("link-modal")) {
      if (target.tagName === "DIV") {
        idElement = eve.target.parentElement.children[1].innerText;
      } else {
        idElement =
          eve.target.parentElement.parentElement.children[1].innerText;
      }
    }
    data.map((pet) => {
      if (pet.name === idElement) {
        showModal(pet);
        closeModal();
      }
    });
  });
};

getIdCard();

showPets();
