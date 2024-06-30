const consulL = async () => {
    try {
      let data = await fetch("http://localhost:3000/consulL");
      let res = await data.json();
      let consulL = res.map((elem) => {
        return `<h4> ${elem.h4} </h4>
        <p> ${elem.p} </p>
        <h5>
          <span>
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 122.88 70.51"
              style="enable-background: new 0 0 122.88 70.51"
              xml:space="preserve"
            >
              <style type="text/css">
                .st0 {
                  fill-rule: evenodd;
                  clip-rule: evenodd;
                }
              </style>
              <g>
                <path
                  class="st0"
                  d="M2.54,65.44h12.59c-0.93-0.24-1.63-1.1-1.63-2.1V2.17C13.5,0.98,14.48,0,15.67,0h90.97 c1.19,0,2.17,0.98,2.17,2.17v61.16c0,1.01-0.69,1.86-1.63,2.1h13.16c1.4,0,2.54,1.14,2.54,2.54v0c0,1.4-1.14,2.54-2.54,2.54H2.54 c-1.4,0-2.54-1.14-2.54-2.54v0C0,66.58,1.14,65.44,2.54,65.44L2.54,65.44z M17.21,3.4h88.19v59.32H17.21V3.4L17.21,3.4z M57.87,66.39h7.14c0.67,0,1.22,0.55,1.22,1.22l0,0c0,0.67-0.55,1.22-1.22,1.22h-7.14c-0.67,0-1.22-0.55-1.22-1.22l0,0 C56.65,66.93,57.2,66.39,57.87,66.39L57.87,66.39z"
                />
              </g>
            </svg>
          </span>
          ${elem.h51}
        </h5>
        <h6> ${elem.h61} </h6>
        <h5>
          <span>
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 71.59 122.88"
              style="enable-background: new 0 0 71.59 122.88"
              xml:space="preserve"
            >
              <style type="text/css">
                .st0 {
                  fill-rule: evenodd;
                  clip-rule: evenodd;
                }
              </style>
              <g>
                <path
                  class="st0"
                  d="M12.74,0h46.11c3.51,0,6.69,1.43,9,3.74c2.31,2.31,3.74,5.49,3.74,9v97.4c0,3.51-1.43,6.69-3.74,9 c-2.31,2.31-5.49,3.74-9,3.74H12.74c-3.51,0-6.69-1.43-9-3.74c-2.31-2.31-3.74-5.49-3.74-9v-97.4c0-3.51,1.43-6.69,3.74-9 C6.05,1.43,9.24,0,12.74,0L12.74,0z M35.79,107.18c2.88,0,5.22,2.34,5.22,5.22c0,2.88-2.34,5.22-5.22,5.22 c-2.88,0-5.22-2.34-5.22-5.22C30.58,109.52,32.91,107.18,35.79,107.18L35.79,107.18z M3.66,103.18h64.28V19.7H3.66V103.18 L3.66,103.18z"
                />
              </g>
            </svg>
          </span>
          ${elem.h52}
        </h5>
        <h6> ${elem.h62} </h6>
        <h5>
          <span>
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 122.88 79.92"
              style="enable-background: new 0 0 122.88 79.92"
              xml:space="preserve"
            >
              <style type="text/css">
                .st0 {
                  fill-rule: evenodd;
                  clip-rule: evenodd;
                }
              </style>
              <g>
                <path
                  class="st0"
                  d="M23.35,72.21c4.04-4.11,8.82-8.28,12.37-13.68h51.43c3.56,5.39,8.34,9.57,12.37,13.68 c30.95,31.52,28.87-42.32,7-64.5h-1.68C102.09,3.11,96.72,0,90.55,0c-6.17,0-11.53,3.11-14.28,7.71H46.61 C43.86,3.11,38.49,0,32.32,0c-6.17,0-11.53,3.11-14.29,7.71h-1.68C-5.52,29.89-7.6,103.72,23.35,72.21L23.35,72.21z M29.85,12.84 h11.11v8.85l8.85,0V32.8h-8.85v8.85H29.85V32.8H21V21.69h8.85L29.85,12.84L29.85,12.84L29.85,12.84z M83.16,36.9 c2.69,0,4.87,2.18,4.87,4.87c0,2.69-2.18,4.88-4.87,4.88s-4.87-2.18-4.87-4.88C78.29,39.08,80.47,36.9,83.16,36.9L83.16,36.9z M85.82,15.21c3.9,0,7.06,3.16,7.06,7.05c0,3.9-3.16,7.05-7.06,7.05c-3.9,0-7.05-3.16-7.05-7.05 C78.77,18.37,81.92,15.21,85.82,15.21L85.82,15.21z M104.04,26.11c2.69,0,4.87,2.18,4.87,4.87c0,2.69-2.18,4.87-4.87,4.87 c-2.69,0-4.88-2.18-4.88-4.87C99.16,28.29,101.35,26.11,104.04,26.11L104.04,26.11z"
                />
              </g>
            </svg>
          </span>
          ${elem.h53}
        </h5>
        <h6> ${elem.h63} </h6>
        <a href="#"> ${elem.a} </a>
`;
      });
      document
        .querySelector(".consols .center .left")
        .insertAdjacentHTML("afterbegin", consulL.join(""));
    } catch (error) {
      console.log(error.message);
    }
  };
  export default consulL;
  
  