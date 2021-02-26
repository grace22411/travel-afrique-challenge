import React from "react";
import $ from "jquery";
import "../styles/home.css";
import { imagesData } from "../data";
import Header from "../components/Header";
import Modal from "antd/lib/modal/Modal";
import ModalGallery from "../components/Modal";

export const Home = () => {
  const [selectedImage, setSelectedImage] = React.useState("");

  console.log(selectedImage);
  const showImg = (data) => {
    console.log(data.src);
    // document.getElementById("showHide").style.display = "block";
    $("#showHide").fadeIn();
    setSelectedImage(data);
  };
  React.useEffect(() => {
    document.getElementById(
      "show"
    ).style.backgroundImage = `url(${selectedImage.src})`;
  }, [selectedImage]);

  const move = (action) => {
    const prev = selectedImage.id - 1;
    const next = selectedImage.id + 1;
    const run =
      action === "next"
        ? () => {
            const run =
              next <= imagesData.length - 1
                ? () => {
                    setSelectedImage(imagesData[next]);
                  }
                : () => setSelectedImage(imagesData[0]);
            run();
          }
        : () => {
            const run =
              prev >= 0
                ? () => {
                    setSelectedImage(imagesData[prev]);
                  }
                : () => setSelectedImage(imagesData[imagesData.length - 1]);
            run();
          };
    run();

    action === "next"
      ? (function () {
          //   console.log("in next", imagesData[1 + selectedImage.id].src);
          imagesData.length - 1 < selectedImage.id &&
            (function () {
              document.getElementById("show").style.backgroundImage = `url(${
                imagesData[selectedImage.id + 1].src
              })`;
              //   setSelectedImage(imagesData[1 + selectedImage.id]);
            })();
        })()
      : (function () {})();
  };

  const Images = ({ data }) => {
    const { src, desc, title, id } = data;
    return (
      <div >
        <div onClick={() => showImg(data)}
          title={title}
          style={{ backgroundImage: `url(${src})` }}
          className="thumbnail "
        >
          {/* <img alt={title} src={src} /> */}
          <div className="button-gallery">
          <ModalGallery />
          </div>
        
        </div>
      </div>
    );
  };
  return (
    <div>
      <Header />
      <div id="showHide" className="imageOverlay">
        <button onClick={() => $("#showHide").fadeOut()} id="closeBtn">
          Close
        </button>
        {/* <button>
          <i class="far fa-images"></i> See all Photos
        </button> */}
        <ModalGallery />
        <i
          onClick={() => move("prev")}
          id="left"
          className="fas fa-angle-left"
        ></i>
        <i
          onClick={() => move("next")}
          id="right"
          className="fas fa-angle-right"
        ></i>

        <div className="backgroundFix" id="show"></div>
        <div className="">
          <p style={{ color: "#fff" }}>{imagesData.title}</p>
        </div>
      </div>
      <div className="homeWrapper">
        <div className="lightImage">
          <Images data={imagesData[0]} />

          <div className="coverRight">
            <Images data={imagesData[1]} />
            <Images data={imagesData[2]} />
          </div>
        </div>
      </div>
    </div>
  );
};

// import React from "react";
// import "../styles/home.css";
// import { Link } from "react-router-dom";
// import { imagesData } from "../data";
// import Header from "../components/Header";

// const Grid1 = ({ data: { src, desc, title, id } }) => {
//   return (
//     <div className="cover">
//       <div
//         style={{ backgroundImage: `url(${src})` }}
//         className="backgroundFix background"
//       >
//         <Link to="/light-box" ><button>Show all photos
//         </button></Link>
//       </div>
//       <Link to={`/image/${id}`} className="overlay centered">
//         <div>
//           <h3>{title}</h3>
//           <p>{desc}</p>
//         </div>
//       </Link>
//     </div>
//   );
// };
// const Grid2 = ({ data: { src, desc, title, id } }) => {
//   return (
//     <div className="cover">
//       <div
//         style={{ backgroundImage: `url(${src})` }}
//         className="backgroundFix background"
//       ></div>
//       <Link to={`/image/${id}`} className="overlay centered">
//         <div>
//           <h3>{title}</h3>
//           <p>{desc}</p>
//         </div>
//       </Link>
//     </div>
//   );
// };
// export const Home = () => {
//   return (
//     <>
//     <Header />
//     <div className="homeWrapper container">
//       <div className="lightImage">
//         <Grid1 data={imagesData[0]} />
//         <div className="coverRight">
//           <Grid2 data={imagesData[1]} />
//           <Grid2 data={imagesData[2]} />
//         </div>
//       </div>
//     </div>
//     </>
//   );
// };
