import "../Style/main.css"
import Card from "./Card";
import { Data } from "./Data" 

export default function Main() {
   return (<div className="container">
    <div className="main-nav">
        <ul>
            <li><a href="#"><span>All</span></a></li>
            <li><a href="#">UI Design</a></li>
            <li><a href="#">UX Desing</a></li>
            <li><a href="#">Product Design</a></li>
            <li><a href="#">Article</a></li>
            <li><a href="#">Tutorials</a></li>
            <li><a href="#">News</a></li>
            
        </ul>

    </div>

        {Data.map((a)=>(
            <Card data={a}/>
        ))}
    </div>);
}