const kidsL = async () => {
    try {
      let data = await fetch("http://localhost:3000/kidsL");
      let res = await data.json();
      let kidsL = res.map((elem) => {
        return `<h4> ${elem.h4} </h4>
        <p>
        ${elem.p}
        </p>
        <div>
          <a href="#"> ${elem.a1} </a>
          <a href="#"> ${elem.a2} </a>
        </div>
        `;
      });
      document
        .querySelector(".kids .center .left")
        .insertAdjacentHTML("afterbegin", kidsL.join(""));
    } catch (error) {
      console.log(error.message);
    }
  };
  export default kidsL;
  
  