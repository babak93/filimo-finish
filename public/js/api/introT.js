const IntroT = async () => {
  try {
    let data = await fetch("http://localhost:3000/introT");
    let res = await data.json();
    let IntroT = res.map((elem) => {
      return `<h6>${elem.h6}</h6>
      <h2>${elem.h2}</h2>`;
    });
    document
      .querySelector(".intro .cover .top")
      .insertAdjacentHTML("afterbegin", IntroT.join(""));
  } catch (error) {
    console.log(error.message);
  }
};
export default IntroT;

var swiper = new Swiper(".mySwiperin", {
  spaceBetween: 30,
  effect: "fade",
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});
