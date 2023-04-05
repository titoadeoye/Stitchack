import { aboutUs } from "../../assets";
import hero from "../../assets/man.jpg";
import "./About.css";

export default function About() {
    return (
        <div id="about">
            <div>
                <h2>About us</h2>
                <p>
                    Stitchack is a solution developed to give tailors a more reliable way to 
                    store customer data, organize tasks and orders and increase productivity in an efficient way.
                </p>
                <p>Your data is backed up on the cloud and revenue reports can be generated.</p>
                <p>What we are offering is efficiency with convenience.</p>
                <a href="#about">Click here to read more </a>
            </div>
            <img src={hero} alt="about-us" />
            
        </div>
    )
}