import { useState, useEffect } from "react";
import {Link} from "react-router-dom";


function Thirdpage() {
  
  const [dummy, setDummy] = useState("Gajen");
  const [count, setCount] = useState(0);

  //useEffect(<function>, <dependency>)

  useEffect(
    () => {
      //setTimeout(() => {
        setCount((count) => count + 1); //ReactDOM also will execute "setTimeout" again...
      //}, 3000);
    },[dummy]
  );

  return (
    <div>This is third Page
      <h1>I've rendered {count} times!</h1>
      <br></br>
      <button onClick={ ()=>{setDummy("Nayanthara")} }>Try</button>
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

export default Thirdpage;

/*
  useEffect runs on every render.
  That means...
    that when the 'count' changes,
    a render happens, 
    which then triggers another effect.
*/