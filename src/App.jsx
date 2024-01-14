import { useState } from "react";
import PropTypes from "prop-types";

function Sebastian({ bgColor }) {
  return (
    <div>
      <p className={`text-3xl font-bold ${bgColor}`}>hello world</p>
    </div>
  );
}

Sebastian.propTypes = {
  bgColor: PropTypes.string.isRequired,
};

function App() {
  const [bgColor, setBgColor] = useState("bg-red-500");

  const showAlert = () => {
    alert("Why did you press me!!! I am now a different color");
    setBgColor((prevColor) =>
      prevColor === "bg-yellow-500" ? "bg-green-500" : "bg-yellow-500",
    );
  };

  return (
    <div>
      <Sebastian bgColor={bgColor} />
      <button className="text-3xl font-bold bg-blue-500" onClick={showAlert}>
        Press me
      </button>
    </div>
  );
}

export { App };
