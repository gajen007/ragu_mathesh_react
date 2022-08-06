import { BrowserRouter, Routes, Route } from "react-router-dom";
import Firstpage from '../Pages/Firstpage.js'
import Secondpage from '../Pages/Secondpage.js'
import Thirdpage from '../Pages/Thirdpage.js'

const Ourroutes = () => {

    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Firstpage/>}/>
          <Route exact path="/second" element={<Secondpage/>}/>
          <Route exact path="/third" element={<Thirdpage/>}/>
        </Routes>
      </BrowserRouter>
      );

      //Need to study the "routing parameters"
}

export default Ourroutes;