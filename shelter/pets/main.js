const showNav = () => {
  const button = document.querySelector(".burger-menu");

  const menu = document.querySelector(".menu");
  button.addEventListener("click", (eve) => {
    menu.classList.toggle("menu-show");
    console.log("work");

    eve.target.parentElement.classList.toggle("burger-rotate");
  });
};

showNav();
