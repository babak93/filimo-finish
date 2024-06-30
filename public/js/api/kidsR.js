const kidsR = async () => {
    try {
      let data = await fetch("http://localhost:3000/kidsR");
      let res = await data.json();
      let kidsR = res.map((elem) => {
        return `<img src=" ${elem.img} " alt="" />
        `;
      });
      document
        .querySelector(".kids .center .right")
        .insertAdjacentHTML("afterbegin", kidsR.join(""));
    } catch (error) {
      console.log(error.message);
    }
  };
  export default kidsR;
  
  