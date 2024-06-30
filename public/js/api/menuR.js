const menuR = async () => {
  try {
    let data = await fetch("http://localhost:3000/menuR");
    let res = await data.json();
    let menuR = res.map((elem) => {
      return `<a href="">
      <span>
        <img src= ${elem.link} alt= ${elem.alt} />
      </span>
    </a>`;
    });
    document
      .querySelector(".menu nav .right")
      .insertAdjacentHTML("afterbegin", menuR.join(""));
  } catch (error) {
    console.log(error.message);
  }
};
export default menuR;
