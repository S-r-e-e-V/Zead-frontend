import React from "react";

export default function Spinner() {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        backgroundColor: "#fff",
        zIndex: 1,
      }}
    >
      Loading
    </div>
  );
}
