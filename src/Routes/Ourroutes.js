import { BrowserRouter, Routes, Route } from "react-router-dom";
import Firstpage from '../Pages/Firstpage.js'
import Secondpage from '../Pages/Secondpage.js'

const Ourroutes = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Firstpage/>}/>
          <Route exact path="/second" element={<Secondpage/>}/>
        </Routes>
      </BrowserRouter>
      );
}

export default Ourroutes;