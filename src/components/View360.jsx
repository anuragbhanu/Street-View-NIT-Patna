import React, { useEffect } from "react";
import * as PANOLENS from "panolens";

import {img1,img2,img3,img4} from '../assets/img'

export default function View360() {
  const imagePaths = [img1, img2, img3, img4];

  useEffect(() => {
    // Set up the viewers dynamically
    imagePaths.forEach((imagePath, index) => {
      const containerId = `container${index + 1}`;
      const viewer = new PANOLENS.Viewer({
        container: document.querySelector(`#${containerId}`),
        autoRotate: false,
        autoRotateSpeed: 0.3,
        controlBar: false,
      });
      const panorama = new PANOLENS.ImagePanorama(imagePath);
      viewer.add(panorama);
    });
  }, []);

  return (
    <>
      <h1 className="text-2xl md:text-3xl ml-1 pl-3 my-2 border-l-4 font-sans font-bold border-teal-400 dark:text-gray-800">
        360 Views
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 bg-white">
        {imagePaths.map((_, index) => (
          <div
            key={index}
            id={`container${index + 1}`}
            className="h-[20rem] w-[35rem] m-2 rounded-xl bg-white overflow-hidden"
          ></div>
        ))}
      </div>
    </>
  );
}
