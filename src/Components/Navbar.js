import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const NavbarOne = () => {
  return (
    <Navbar>
      <Container>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Reads">Customer List</Link>
        </li>
        <li>
          <Link to="/Domestic">Domestic Reviews</Link>
        </li>
        <li>
          <Link to="/International">International Reviews</Link>
        </li>
      </Container>
    </Navbar>
  );
};
export default NavbarOne;

// const NavbarOne= () =>{
//     return (
//     <header>
//       <div class="left">
//           <a>Adventures</a>
//       </div>
//       <div class="mid">
//           <ul class="navbar">
//               <li>
//                   <Link to="/">Home</Link>
//               </li>
//               <li>
//                   <Link to="/Reads">Customer List</Link>
//               </li>
//               <li>
//                   <Link to="/Domestic">Domestic Reviews</Link>
//               </li>
//           </ul>
//       </div>
//           <div class="right">
//               <a>Welcome</a>
//           </div>
//     </header>
//     );
//   }
//   export default NavbarOne;
