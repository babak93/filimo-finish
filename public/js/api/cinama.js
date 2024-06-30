const Cinama = async () => {
    try {
      let data = await fetch("http://localhost:3000/cinama");
      let res = await data.json();
      let Cinama = res.map((elem) => {
        return `<h6>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 48 48"
          >
            <path
              fill="#c8e6c9"
              d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
            ></path>
            <path
              fill="#4caf50"
              d="M34.586,14.586l-13.57,13.586l-5.602-5.586l-2.828,2.828l8.434,8.414l16.395-16.414L34.586,14.586z"
            ></path>
          </svg>
        </span>
        ${elem.name}
      </h6>`;
      });
      document
      .querySelector(".cinama .teitel")
      .insertAdjacentHTML("beforeend", Cinama.join(""));
    } catch (error) {
      console.log(error.message);
    }
  };
  export default Cinama;
  