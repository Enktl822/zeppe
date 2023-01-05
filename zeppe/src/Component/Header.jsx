import "../Style/header.css";
import Zepp from "./logos/Zepp";

export default function Header() {
  return (
    <div className="header container">
      <div className="navbar">
        <Zepp />
        <ul>
          <li>
            <a href="#">PORTFOLIO</a>
          </li>
          <li>
            <a href="#">BLOG</a>
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
