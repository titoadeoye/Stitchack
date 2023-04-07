import { useNavigate } from "react-router-dom";
import {bg} from "../../assets";
import "./Home.css";

export default function Home() {
    const navigate = useNavigate();
    return (
        <div id="home">
            <section>
                <div  className="home-content">
                   <div className="text">
                    <h1>Let us assist you in stress-free customer management</h1>
                    <p>We will assist you in keeping track of your customer's measurements
                        , details, and styles so that you can readily access them from any location at any time.
                    </p>
                    <button onClick={() => navigate("register")}>Get started</button>
                </div>
                <img className="landing" src={bg} alt="landing" />
  
                </div>
               
                <div class="curve"></div>
            </section>
        </div>
    )
}