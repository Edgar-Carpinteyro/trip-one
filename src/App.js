import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Creates from "./Components/Creates";
import Reads from "./Components/Reads";
import Updates from "./Components/Updates";
import Domestic from "./Reviews/Domestic"
import NavbarOne from "./Components/Navbar";
import International from "./Reviews/International";

function App() {
    return (
      <BrowserRouter>
      <NavbarOne />
       <div className="main">
          <Routes style={{ marginTop: 200 }}>
            <Route path='/' exact element={<Creates/>} />
            <Route path='/Reads' element={<Reads/>} />
            <Route path='/Domestic' element={<Domestic/>} />
            <Route path='/International' element={<International/>} />
            <Route path='*' element={<Updates/>} />
          </Routes>
        </div>
      </BrowserRouter>
    );
}
export default App;
