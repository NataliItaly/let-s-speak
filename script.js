import contacts from "./contacts.json" with {type: 'json'};
import courses from "./courses.json" with {type: 'json'};

const navList = document.querySelector(".nav__list");
const headerProfileBtn = document.querySelector('.header__profile-btn');
const headerProfileSettings = document.querySelector('.header__profile-settings')
const contactsList = document.querySelector(".contacts__list");
const courseList = document.querySelector('.course__list');
const footerYear = document.querySelector('.footer__year');
const slider = document.querySelector('.slider');
const sliderBtn = document.querySelector('.slider__btn');


headerProfileBtn.addEventListener('click', function() {
  headerProfileSettings.classList.toggle('header__profile_open')
});


courseList.addEventListener("click", function (event) {
  event.preventDefault();

  if (event.target.closest(".course__item")) {
    const navLinks = document.querySelectorAll(".course__item");
    navLinks.forEach((link) => link.classList.remove("course__item_active"));
    event.target.closest(".course__item").classList.add("course__item_active");
  }
});

navList.addEventListener("click", function (event) {
  event.preventDefault();

  if (event.target.closest(".nav__link")) {
    const navLinks = document.querySelectorAll(".nav__link");
    navLinks.forEach((link) => link.classList.remove("nav__link_active"));
    event.target.closest(".nav__link").classList.add("nav__link_active");
  }
});


function setContacts(arr) {
  arr.forEach(el => {
    const onlineClass = el.online ? "contacts__online_visible" : "";
    const html = `
       <li class="box__item">
              <h3 class="box__item-title">${el.name}</h3>
              <div class="contacts__language box__text">${el.language}</div>
            <div class="avatar box__img">
                <svg
                width="14"
                height="16"
                viewBox="0 0 14 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                d="M13.5205 16H9.77148V9.46875H4.21777V16H0.447266V0.359375H4.21777V6.56836H9.77148V0.359375H13.5205V16Z"
                fill="currentColor"
                />
                </svg>
                <span class="contacts__online ${onlineClass}"></span>
            </div>
          </li>
    `;

    contactsList.insertAdjacentHTML("beforeend", html);
  })
}

setContacts(contacts)


// set Courses

function setCourses(arr) {
   courses.forEach((el, i) => {
    const itemClass = i === 0  ?  "course__item_active" : "";
    const html = `
       <li class="box__item course__item ${itemClass}">
            <h3 class="box__item-title">Lesson ${i + 1}</h3>
            <div class="box__text">${el.lesson}</div>
            <button class="box__img video__btn">
              <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 6L0 12L-5.24537e-07 0L10 6Z" fill="currentColor"/>
              </svg>
            </button>
          </li>
    `;

    courseList.insertAdjacentHTML("beforeend", html)
  });
}

setCourses(courses);

function setDate() {
  const date = new Date();
  return date.getFullYear();
}

footerYear.textContent = setDate();


// set slider

let count = 1;

slider.addEventListener('click', function(event) {
  if (event.target.classList.contains('slider__btn_left')) {
      count = count > 1 ? count - 1 : 3;
    slider.style.background = `url(./images/hero-slider/${count}.jpg) no-repeat center / cover`;

    }
  else if (event.target.classList.contains('slider__btn_right')) {
      count = count > 2 ? 1 : count + 1;
      slider.style.background = `url(./images/hero-slider/${count}.jpg) no-repeat center / cover`;
    }
});




