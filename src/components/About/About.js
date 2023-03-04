import { aboutUs } from "../../assets";
import "./About.css";

export default function About() {
    return (
        <div id="about">
            <img src={aboutUs} alt="about-us" />
            <div>
                <h2>About us</h2>
                <p>
                    Stitchack is a top web application developed to give tailors a more reliable way
                    to stay organized and increase productivity in a simple yet efficient way.
                </p>
                <p>What we are offering is efficiency with convenience. Tailors will be able to securely store customers record.</p>
                <a href="#about">Click here to read more </a>
            </div>
        </div>
    )
}