import React, { useState } from "react";
import {Link} from "react-router-dom";


function Secondpage() {

  const [color, setColor] = useState("red");

  return (
    <div>This is second Page
      <h1>My favorite color is {color}!</h1>
      <button onClick={() => setColor("blue")}>Set to Blue</button>
      <br></br>
      <ol>
          <Link to={"/"}><li>First Page&nbsp;</li></Link>
          <Link to={"/second"}><li>2nd Page&nbsp;</li></Link>
          <Link to={"/third"}><li>Third Page&nbsp;</li></Link>
          <Link to={"/fourth/256/Gajen"}><li>Fourth (Parameter) Page&nbsp;</li></Link>
          <Link to={"/fifth"}><li>Fifth Page (Form) Page&nbsp;</li></Link>
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