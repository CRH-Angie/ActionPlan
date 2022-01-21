import React from "react";

const Content = () => {
  return (
    <>
      <div className="menu-card">
        <img
          src={require("../images/Food.jpeg")}
          alt="egg"
          className="h-full rounded mb-20 shadow"
        />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Egg toast Guacamole</h2>
          <p className="mb-2">Crispy, delicious and nutricious</p>
          <span>$16</span>
        </div>
      </div>
      <div className="menu-card">
        <img
          src={require("../images/Food 1.jpeg")}
          alt="egg"
          className="h-full rounded mb-20 shadow"
        />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Cheesy Meat with Egg on Top</h2>
          <p className="mb-2">Meaty, cheesy, delicious and nutricious</p>
          <span>$21</span>
        </div>
      </div>
    </>
  );
};

export default Content;
