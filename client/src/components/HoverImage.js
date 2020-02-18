import React, { useState } from "react";

import HoverImage from "./HoverImage.css";

const HoverImage = () => {
  const [hover, setHover] = useState(false);

  const onHoverHandler = () => setHover(true);

  const offHoverHandler = () => setHover(false);

  return <div></div>;
};
