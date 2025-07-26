import React from "react";

const DEFAULT_IMAGE = "https://via.placeholder.com/215";

function About({ image = DEFAULT_IMAGE, about = "" }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;
