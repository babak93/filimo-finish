const tvL = async () => {
    try {
      let data = await fetch("http://localhost:3000/tvL");
      let res = await data.json();
      let tvL = res.map((elem) => {
        return `<img src=" ${elem.img} " alt="" />
        `;
      });
      document
        .querySelector(".tv .center .left")
        .insertAdjacentHTML("afterbegin", tvL.join(""));
    } catch (error) {
      console.log(error.message);
    }
  };
  export default tvL;
  
  