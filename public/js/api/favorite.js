const Favorite = async () => {
    try {
      let data = await fetch("http://localhost:3000/favorite");
      let res = await data.json();
      let item = res.map((elem) => {
        return ` <h5>${elem.h5}</h5>
        <div>
          <h4>${elem.h4} </h4>
          <h6>${elem.h6} </h6>
        </div>`;
      });
      document
        .querySelector(".favorite")
        .insertAdjacentHTML("afterbegin", item.join(""));
    } catch (error) {
      console.log(error.message);
    }
  };
  export default Favorite;
  