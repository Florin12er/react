import { useState } from "react";
import PropTypes from "prop-types";

import { GuessNumber } from "./guessNumber.jsx";
import { Form, List, Animals } from "./list.tsx";

function Sebastian({ bgColor }) {
  return (
    <div>
      <p className={`text-3xl font-bold ${bgColor} w-1/2`}>hello world</p>
    </div>
  );
}

function Present() {
  return (
    <div>
      <p className="text-3xl font-bold bg-violet-500 mt-5 w-1/2">
        hello my name is sebastian I am a student in cs i love to code an
        exercise
      </p>
    </div>
  );
}

function FavoriteFood() {
  return (
    <div className="text-3xl font-bold bg-orange-500 w-1/2">
      <p>my favorite food is pasta and broccoli</p>
    </div>
  );
}

function AddGoal({ onAddGoal }) {
  const [newGoal, setNewGoal] = useState("");

  const handleInputChange = (event) => {
    setNewGoal(event.target.value);
  };

  const handleAddGoal = () => {
    onAddGoal(newGoal);
    setNewGoal("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter new goal"
        className="w-1/2 h-11 text-3xl font-bold p-1  bg-gray-400 placeholder:text-black "
        value={newGoal}
        onChange={handleInputChange}
      />
      <button
        onClick={handleAddGoal}
        className="text-3xl font-bold bg-green-500 p-1 ml-2 "
      >
        Add Goal
      </button>
    </div>
  );
}

AddGoal.propTypes = {
  onAddGoal: PropTypes.func.isRequired,
};

Sebastian.propTypes = {
  bgColor: PropTypes.string.isRequired,
};

function App() {
  const [bgColor, setBgColor] = useState("bg-red-500");
  const [goals, setGoals] = useState([]);

  const showAlert = () => {
    alert("Why did you press me!!! I am now a different color");
    setBgColor((prevColor) =>
      prevColor === "bg-yellow-500" ? "bg-green-500" : "bg-yellow-500",
    );
  };

  const handleAddGoal = (newGoal) => {
    setGoals((prevGoals) => [...prevGoals, newGoal]);
  };

  return (
    <div>
      <Sebastian bgColor={bgColor} />
      <button
        className="text-3xl font-bold bg-blue-500 p-1"
        onClick={showAlert}
      >
        Press me
      </button>
      <Present />
      <FavoriteFood />
      <GuessNumber />
      <Form />
      <List />
      <Animals />
      <AddGoal onAddGoal={handleAddGoal} />

      <div>
        {goals.map((goal, index) => (
          <p key={index} className="text-3xl font-bold bg-blue-900 mt-2 w-1/2">
            {goal}
          </p>
        ))}
      </div>
    </div>
  );
}

export { App };
