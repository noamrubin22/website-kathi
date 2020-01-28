import Lightbox from "react-lightbox-component";
import React from "react";

const Lightbox1 = () => (
  <div>
    <Lightbox
      images={[
        {
          src: "/3inARow/1.jpg",
          title: "pic 1",
          description: "image description"
        },
        {
          src: "/3inARow/2.jpg",
          title: "pic 2",
          description: "image description"
        },
        {
          src: "/3inARow/3.jpg",
          title: "pic 3",
          description: "image description"
        }
      ]}
    />
  </div>
);

export default Lightbox1;
