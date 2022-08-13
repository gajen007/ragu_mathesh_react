import { useParams } from "react-router-dom";

function Fourthpage() {
  const { id, username } = useParams();
  return (
    <div>This is Fourth Page with Parameters = {id} & {username}..!
      <ol>
        <li><a href="/">First Page</a>&nbsp;</li>
        <li><a href="/second">Second Page</a>&nbsp;</li>
        <li><a href="/third">Third Page</a></li>
        <li><a href="/fourth/256/Gajen">Fourth (Parameter) Page</a></li>
      </ol>
    </div>
  );
}

export default Fourthpage;