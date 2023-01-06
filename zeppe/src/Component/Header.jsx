import "../Style/header.css";
import Zepp from "./logos/Zepp";
import Inlogo from "../Component/logos/InLogo";

export default function Header() {
  return (
    <div className="header container">
      
      <div className="navbar">
      <div className="nav-logo"><Zepp />
        <Inlogo /></div>
        <ul>
          <li>
            <a href="#">PORTFOLIO</a>
          </li>
          <li>
            <a href="#"><span>BLOG</span></a>
          </li>
          <li>
            <a href="#">CV</a>
          </li>
          <li>
            <a href="#">STORE</a>
          </li>
          <li>
            <a href="#">FREELANCE</a>
          </li>
          <li>
            <a href="#">ABOUT ME</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
