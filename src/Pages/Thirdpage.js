import { useState, useEffect } from "react";

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
        <li><a href="/">First Page</a>&nbsp;</li>
        <li><a href="/second">Second Page</a>&nbsp;</li>
        <li><a href="/third">Third Page</a></li>
        <li><a href="/fourth/256">Fourth (Parameter) Page</a></li>
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