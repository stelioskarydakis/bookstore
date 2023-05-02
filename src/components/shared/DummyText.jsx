import React from "react";
import { placeholderText } from "../../utils/data";

const DummyText = () => {
  return (
    <>
      {placeholderText.split("\n\n").map((item, i) => {
        return (
          <p key={i}>
            {item}
            <br />
            <br />
          </p>
        );
      })}
    </>
  );
};

export default DummyText;
