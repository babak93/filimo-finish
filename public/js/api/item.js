const Item = async () => {
    try {
      let data = await fetch("http://localhost:3000/item");
      let res = await data.json();
      let item = res.map((elem) => {
        return `<div class="itme">
        <img src=${elem.img} alt="#" />
        <div class="text">
          <h5>${elem.h5}</h5>
          <p>${elem.p}</p>
          <span>${elem.span1}</span>
          <span>${elem.span2}</span>
          <a href="#"> ${elem.a}</a>
        </div>
      </div>`;
      });
      document
        .querySelector(".cinama .scroll")
        .insertAdjacentHTML("afterbegin", item.join(""));
    } catch (error) {
      console.log(error.message);
    }
  };
  export default Item;
  