const consulR = async () => {
    try {
      let data = await fetch("http://localhost:3000/consulR");
      let res = await data.json();
      let consulR = res.map((elem) => {
        return `<img src=" ${elem.img} " alt="" />
        `;
      });
      document
        .querySelector(".consols .center .right")
        .insertAdjacentHTML("afterbegin", consulR.join(""));
    } catch (error) {
      console.log(error.message);
    }
  };
  export default consulR;
  
  