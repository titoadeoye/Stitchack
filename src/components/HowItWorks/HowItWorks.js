import { howItWorks } from "../../assets";
import "./HowItWorks.css";

export default function HowItWorks() {
    return (
        <div id="howitworks">
            <h2>How it works</h2>
            <img className="diagram" src={howItWorks} alt="HowItWorks" />
            {/* <img className="laptop" src={laptop} alt="laptop" /> */}
            {/* <p>Do you want to easily access Stitchack?<br /> Click on the button below to download</p>
            
            <span>
                <button className="filled">Download for desktop</button>
                <button className="outlined">Download for mobile</button>
            </span> */}

        </div>
    )
}