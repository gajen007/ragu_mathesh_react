import Mycomponent from '../Components/Mycomponent.js';
import Eccomponent from '../Components/Eccomponent.js';
import Student from '../Components/Student.js';
import {Link} from "react-router-dom";
function Firstpage() {
  return (
    <div className="container">
      <div className="card border-dark">
        <div className="card-header" align="center">1st Page</div>
        <div className="card-body">
          <div className="row">
            <div className="col-lg-6">
              <Student
                studentName="Raguraj"
                studentEmail="ragu123@gmail.com"
                studentID="1586"
              />
              <Student
                studentName="Mathesh"
                studentEmail="mathesh456@gmail.com"
                studentID="2568"
              />
            </div>
            <div className="col-lg-6">
              <ol>
                <Link to={"/"}><li>First Page&nbsp;</li></Link>
                <Link to={"/second"}><li>2nd Page&nbsp;</li></Link>
                <Link to={"/third"}><li>Third Page&nbsp;</li></Link>
                <Link to={"/fourth/256/Gajen"}><li>Fourth (Parameter) Page&nbsp;</li></Link>
                <Link to={"/fifth"}><li>Fifth Page (Form) Page&nbsp;</li></Link>

              </ol>
            </div>
          </div>
        </div>
        <div className="card-footer" align="center">
          <Mycomponent buttonText="Hindu" /><Eccomponent buttonText="Christian" />
        </div>
      </div>
    </div>
  );
}

export default Firstpage;
