import "../Style/banner.css"
import Linked from "../Component/logos/Linked";
import Twitter from "../Component/logos/Twitter";
import Medium from "./logos/Medium";

export default function Banner() {
    return (
        <div className="banner container">
            <div className="banner-content">
                <h1 className="banner-title">Blog Posts</h1>
                <h1 className="banner-title2">I think so, this is it. </h1>
                <p className="banner-desc">Design begins after I begin to think about how to present an experience most successfully, whether a button I put in can solve a problem. The only point in design is not ui design, if the user does not have a good experience at the end of the product, the design will be considered unsuccessful in my opinion.</p>

                <div className="buttons">
                    <button className=" buttonA button1"><Twitter /><span>TWITTER</span></button>
                    <button className=" buttonA button2"><Linked /><span>LINKEDIN</span></button>
                    <button className="buttonA button3"><Medium /><span>MEDIUM</span></button>
                </div>
            </div>
            <div className="banner-pic">
                <img src = "../Group 296.png" />
            </div>
        </div>
    );

}