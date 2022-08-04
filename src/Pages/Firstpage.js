import Mycomponent from '../Components/Mycomponent.js';
import Eccomponent from '../Components/Eccomponent.js';
import Student from '../Components/Student.js';
function Firstpage() {
  return (
    <div>Hi Boys
      <Mycomponent/>
      <Student 
      studentName="Raguraj"
      studentEmail="ragu123@gmail.com"
      />
      <Student 
      studentName="Mathesh"
      studentEmail="mathesh456@gmail.com"
      />
      <Eccomponent/>
      <br></br>
      <a href="/">First Page</a>&nbsp;<a href="/second">Second Page</a>
    </div>
  );
}

export default Firstpage;
