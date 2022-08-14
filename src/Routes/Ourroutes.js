import { BrowserRouter, Routes, Route } from "react-router-dom";
import Firstpage from '../Pages/Firstpage.js'
import Secondpage from '../Pages/Secondpage.js'
import Thirdpage from '../Pages/Thirdpage.js'
import Fourthpage from '../Pages/Fourthpage.js'
import Fifthpage from "../Pages/Fifthpage.js";
import SingleStudent from "../Pages/SingleStudent.js";

const Ourroutes = () => {

    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Firstpage/>}/>
          <Route exact path="/second" element={<Secondpage/>}/>
          <Route exact path="/third" element={<Thirdpage/>}/>
          <Route exact path="/fourth/:id/:username" element={<Fourthpage />}/>
          <Route exact path="/fifth" element={<Fifthpage />}/>
          <Route exact path="/student/:studentID" element={<SingleStudent />}/>
          
        </Routes>
      </BrowserRouter>
      );

      //Need to study the "routing parameters"
}

export default Ourroutes;