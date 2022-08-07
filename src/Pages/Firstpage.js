import Mycomponent from '../Components/Mycomponent.js';
import Eccomponent from '../Components/Eccomponent.js';
import Student from '../Components/Student.js';
function Firstpage() {
  return (
    <div className="container">
    <div className="card border-dark">
    <div className="card-header" align="center">First Page</div>
    <div className="card-body">
    <div className="row">
    <div className="col-lg-6">
    <Student 
    studentName="Raguraj"
    studentEmail="ragu123@gmail.com"
    />
    <Student 
    studentName="Mathesh"
    studentEmail="mathesh456@gmail.com"
    />
    </div>
    <div className="col-lg-6">
    <ol>
    <li><a href="/">First Page</a>&nbsp;</li>
    <li><a href="/second">Second Page</a>&nbsp;</li>
    <li><a href="/third">Third Page</a></li>
    <li><a href="/fourth/4">Fourth (Parameter) Page</a></li>
    </ol>
    </div>
    </div>
    </div>
    <div className="card-footer" align="center">
    <Mycomponent buttonText="Hindu"/><Eccomponent buttonText="Christian"/>
    </div>
    </div>
    </div>
    );
  }
  
  export default Firstpage;
  