const Slider = async () => {
  try {
    let data = await fetch("http://localhost:3000/slider");
    let res = await data.json();
    let Slider= res.map((elem) => {
      return `<div class="swiper-slide">
        <img src=${elem.image} alt=${elem.alt}/>
      </div>`;
    });
    document
      .querySelector(".slider .swiper-wrapper")
      .insertAdjacentHTML("afterbegin", Slider.join(""));
  } catch (error) {
    console.log(error.message);
  }
};
export default Slider;
