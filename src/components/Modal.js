import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import $ from "jquery";
import "../styles/gallery.css";
import { imagesData } from "../data";
import {Link} from "react-router-dom"

const ModalGallery = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

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
      <div onClick={() => showImg(data)} className="col-md-4">
        <div title={title} className="thumbnail ">
          <img alt={title} src={src} />
        </div>
      </div>
    );
  };

  return (
    <>
      <button className="seePhoto" onClick={showModal}>
      <i class="far fa-images"></i> Show all Photos
      </button>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <div id="showHide" className="imageOverlay">
        <button onClick={() => $("#showHide").fadeOut()} id="closeBtn">
          Close
        </button>
        <button>
          <i class="far fa-images"></i> See all Photos
        </button>
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

      <div className="head">
          <a href="/"><button>Close</button></a>
      </div>
      <div className="container">
        <div className="row">
            {imagesData.map((image) => (
            <Images data={image} />
          ))}
          
         
        </div>
      </div>
      </Modal>
    </>
  );
};

export default ModalGallery