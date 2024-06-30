const Pic = async () => {
    try {
      let data = await fetch("http://localhost:3000/pic");
      let res = await data.json();
      let pic = res.map((elem) => {
        return `<img src=${elem.link} alt=${elem.alt}/>`;
      });
      document
        .querySelector(".pics")
        .insertAdjacentHTML("afterbegin", pic.join(""));
    } catch (error) {
      console.log(error.message);
    }
  };
  export default Pic;
  
  