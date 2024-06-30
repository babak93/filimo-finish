const Slider2 = async () => {
  try {
    let data = await fetch("http://localhost:3000/slider2");
    let res = await data.json();
    let Slider2 = res.map((elem) => {
      return `<div class="swiper-slide">
      <img src=${elem.image} alt=${elem.alt} />
    </div>`;
    });
    document
      .querySelector(".slider2 .swiper-wrapper")
      .insertAdjacentHTML("beforeend", Slider2.join(""));
  } catch (error) {
    console.log(error.message);
  }
};
export default Slider2;
