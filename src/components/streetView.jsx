import React, { useEffect } from "react";
import * as mapillaryJs from "mapillary-js";

export default function StreetViewer() {
  useEffect(() => {
    const { Viewer } = mapillaryJs;

    // Define image IDs
    const imageIds = ["788009593243617", "1519977948733431", "1645752876228925","1341685269855255"];

    // Create viewers dynamically using map()
    const viewers = imageIds.map((imageId, index) => {
      return new Viewer({
        accessToken: "MLY|7308617045911712|1722098d2be707a262c1ef5f704907a8",
        container: `mly${index + 1}`, // Use dynamic container IDs (mly1, mly2, mly3)
        imageId,
      });
    });

    // Set center for each viewer
    viewers.forEach((viewer) => viewer.setCenter([0.5, 0.5]));

    // Handle window resize
    window.addEventListener("resize", () => viewers.forEach((viewer) => viewer.resize()));

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", () => viewers.forEach((viewer) => viewer.resize()));
    };
  }, []);

  return (
    <>
      <h1 className="text-2xl md:text-3xl ml-1 pl-3 my-2 border-l-4 font-sans font-bold border-teal-400 dark:text-gray-800">
        Street View
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 m-2 p-2">
        {Array.from({ length: 4 }, (_, index) => (
          <div key={index} id={`mly${index + 1}`} className="h-[20rem] w-[35rem] m-2 p-2 rounded-xl overflow-hidden"></div>
        ))}
      </div>
    </>
  );
}
