import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeadingText] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);

  function handleChange(event) {
    setName(event.target.value);
    // console.log(event.target.value);
  }

  function handleClick(event) {
    setHeadingText("Hello, " + name);

    event.preventDefault();
  }

  function mouseOver(event) {
    setMouseOver(true);
  }

  function mouseOut(event) {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button
          style={{ backgroundColor: isMouseOver ? "black" : "white" }}
          onClick={handleClick}
          onMouseOver={mouseOver}
          onMouseOut={mouseOut}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
