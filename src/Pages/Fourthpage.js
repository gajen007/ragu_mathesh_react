import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";

function Fourthpage() {
  const { id, username } = useParams();
  return (
    <div>This is Fourth Page with Parameters = {id} & {username}..!
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

export default Fourthpage;