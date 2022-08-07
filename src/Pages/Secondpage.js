import React, { useState } from "react";

function Secondpage() {

  const [color, setColor] = useState("red");

  return (
    <div>This is second Page
      <h1>My favorite color is {color}!</h1>
      <button onClick={() => setColor("blue")}>Set to Blue</button>
      <br></br>
      <ol>
        <li><a href="/">First Page</a>&nbsp;</li>
        <li><a href="/second">Second Page</a>&nbsp;</li>
        <li><a href="/third">Third Page</a></li>
        <li><a href="/fourth/4">Fourth (Parameter) Page</a></li>
      </ol>
    </div>
  );
  
}

export default Secondpage;

/*
Two things here...
  The current state. (Here 'color' is the state)
  A function that updates the state. (Here the setColor function)
If we use callback function by onclick, we need to write more code..!
*/