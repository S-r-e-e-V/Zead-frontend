import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export default function Popup({ trigger, children }) {
  return (
    <Popup
      className="custom"
      ref={ref}
      trigger={trigger}
      position="bottom center"
    >
      {children}
    </Popup>
  );
}
