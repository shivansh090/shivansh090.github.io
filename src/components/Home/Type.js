import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Web Developer",
          "LeetCoder",
          "Sophomore at IIIT Bhopal",
          "Asst. Web Developer at GDSC IIIT Bhopal",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
