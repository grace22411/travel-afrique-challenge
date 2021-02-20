import React, { useEffect } from "react";
import { imagesData } from "../data";
import "../styles/viewer.css";
export const ImageOverview = (id) => {
  const imageId = id.match.params.id;
  //   console.log(id.match.params.id);
  const [selectedImage, setSelectedImage] = React.useState("");

  React.useEffect(() => {
    const image = imagesData.find(
      ({ id }) => parseInt(id) === parseInt(imageId)
    );
    setSelectedImage(image);
    console.log(image);
  }, []);
  return (
    <div
      className="backgroundFix, viewer"
      style={{ backgroundImage: `url(${selectedImage?.src})` }}
    >
      <h1>{selectedImage.title}</h1>
    </div>
  );
};