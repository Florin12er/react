import { useState } from "react";

function GuessNumber() {
  const [guessText, setGuessText] = useState("Guess my number:");
  const [correctGuess, setCorrectGuess] = useState(false);

  const handleCheckboxChange = (isCorrect) => {
    setCorrectGuess(isCorrect);

    if (isCorrect) {
      setGuessText("You guessed it yey");
    } else {
      setGuessText("Wrong guess, try again");
    }
  };

  return (
    <div className="text-3xl font-bold bg-red-500 w-1/2">
      <p id="guess">
        {guessText} <label>6</label>{" "}
        <input onChange={() => handleCheckboxChange(false)} type="checkbox" />
        <label>4</label>{" "}
        <input onChange={() => handleCheckboxChange(true)} type="checkbox" />{" "}
        <label>7</label>{" "}
        <input onChange={() => handleCheckboxChange(false)} type="checkbox" />{" "}
      </p>
      {correctGuess && <p>Congratulations!</p>}
    </div>
  );
}

export { GuessNumber };
