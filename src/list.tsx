import React from "react";
import PropTypes from "prop-types";

function List() {
  return (
    <>
      <ol className="list-inside list-decimal space-y-2 my-5">
        <li className="text-3xl font-bold bg-red-500 w-1/2">Item</li>
        <li className="text-3xl font-bold bg-blue-500 w-1/2">Item</li>
        <li className="text-3xl font-bold bg-green-500 w-1/2">Item</li>
      </ol>
    </>
  );
}

function Form() {
  return (
    <>
      <h1 className="text-5xl font-bold bg-red-900 w-1/2">Test title</h1>
      <ol className="test-list list-inside list-decimal">
        <li className="text-3xl font-bold bg-red-500 w-1/2">List item </li>
        <li className="text-3xl font-bold bg-blue-500 w-1/2">List item </li>
        <li className="text-3xl font-bold bg-green-500 w-1/2">List item </li>
      </ol>
      <svg>
        <circle cx="25" cy="75" r="20" stroke="green" strokeWidth="2" />
      </svg>
      <form>
        <input
          className="w-1/2 h-11 text-3xl font-bold p-1  bg-gray-400 placeholder:text-black"
          type="text"
        />
      </form>
    </>
  );
}
function ListItem(props) {
  return <li>{props.animal}</li>;
}
ListItem.propTypes = {
  animal: PropTypes.string.isRequired,
};

function Listanimal(props) {
  return (
    <ul>
      {props.animals.map((animal) => {
        return <ListItem key={animal} animal={animal} />;
      })}
    </ul>
  );
}
Listanimal.propTypes = {
  animals: PropTypes.arrayOf(PropTypes.string).isRequired,
};
function Animals() {
  const animals = ["Lion", "Cow", "Snake", "Lizard", "Cat", "Dog"];

  return (
    <div>
      <h1>Animals: </h1>
      <Listanimal animals={animals} />
    </div>
  );
}
export { Form, List, Animals };
