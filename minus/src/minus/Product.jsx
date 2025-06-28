import React from "react";

const Product = () => {
  return (
    <div className>
      <div
        className
        style={{
          transform: "rotateY(15deg) rotateX(10deg)",
          boxShadow: "10px 10px 20px rgba(0,0,0,0.3)",
          color: "#5A2D0C", // 어두운 갈색 글씨
          width: "30px",
          height: "30px"
        }}
      >
        -5
      </div>
    </div>
  );
}

export default Product;