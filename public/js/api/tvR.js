const tvR = async () => {
    try {
      let data = await fetch("http://localhost:3000/tvR");
      let res = await data.json();
      let tvR = res.map((elem) => {
        return ` <h4> ${elem.h4} </h4>
        <p>
          ${elem.p}
        </p>
        <h5>
          <span>
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 122.88 83.06"
              style="enable-background: new 0 0 122.88 83.06"
              xml:space="preserve"
            >
              <g>
                <path
                  d="M2.08,0H120.8h2.08v2.08v69.2v2.08h-2.08H77.57v4.55h16.61v5.15H28.55v-5.15h16.61v-4.55H2.08H0v-2.08V2.08V0H2.08L2.08,0z M118.73,4.15H4.15v65.05h114.57V4.15L118.73,4.15z"
                />
              </g>
            </svg>
          </span>

          ${elem.h51}
        </h5>
        <h6>
          ${elem.h61}
        </h6>
        <h5>
          <span>
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 122.88 83.06"
              style="enable-background: new 0 0 122.88 83.06"
              xml:space="preserve"
            >
              <g>
                <path
                  d="M2.08,0H120.8h2.08v2.08v69.2v2.08h-2.08H77.57v4.55h16.61v5.15H28.55v-5.15h16.61v-4.55H2.08H0v-2.08V2.08V0H2.08L2.08,0z M118.73,4.15H4.15v65.05h114.57V4.15L118.73,4.15z"
                />
              </g>
            </svg>
          </span>
        ${elem.h52}
        </h5>
        <h6>
         ${elem.h62}
        </h6>
        <a href="#"> ${elem.a} </a>
        `;
      });
      document
        .querySelector(".tv .center .right")
        .insertAdjacentHTML("afterbegin", tvR.join(""));
    } catch (error) {
      console.log(error.message);
    }
  };
  export default tvR;
  
  