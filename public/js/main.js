import menu from "./api/menu.js";
import menuR from "./api/menuR.js";
import IntroD from "./api/introD.js";
import IntroT from "./api/introT.js";
import Pic from "./api/pic.js";
import Slider from "./api/slider.js";
import Slider2 from "./api/Slider2.js";
import Cinama from "./api/cinama.js";
import Item from "./api/item.js";
import Nazar from "./api/nazar.js";
import Filimo from "./api/filimo.js";
import Favorite from "./api/favorite.js";
import consulL from "./api/consulL.js";
import consulR from "./api/consulR.js";
import tvR from "./api/tvR.js";
import tvL from "./api/tvL.js";
import kidsR from "./api/kidsR.js";
import kidsL from "./api/kidsL.js";

function initslider() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
async function alldata() {
  await menu();
  await menuR();
  await IntroD();
  await IntroT();
  await Pic();
  await Slider();
  await Slider2();
  await Cinama();
  await Item();
  await Nazar();
  await Filimo();
  await Favorite();
  await consulL();
  await consulR();
  await tvR();
  await tvL();
  await kidsR();
  await kidsL();
  initslider();
}
alldata();
