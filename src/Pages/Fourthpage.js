import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Fourthpage() {
  const { id } = useParams();
  return (
    <div>This is Fourth Page with Parameter = {id}..!
      <ol>
        <li><a href="/">First Page</a>&nbsp;</li>
        <li><a href="/second">Second Page</a>&nbsp;</li>
        <li><a href="/third">Third Page</a></li>
        <li><a href="/fourth/4">Fourth (Parameter) Page</a></li>
      </ol>
    </div>
  );
}

export default Fourthpage;