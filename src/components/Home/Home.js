import { useNavigate } from "react-router-dom";
import { landing, armani, dolce, fendi, chanel } from "../../assets";
import "./Home.css";

export default function Home() {
    const navigate = useNavigate();
    return (
        <div id="home">
            {/* <div className="text">
                <h1>Let us assist you in stress-free customer management</h1>
                <p>We will assist you in keeping track of your customer's measurements
                    , details, and styles so that you can readily access them from any location at any time.
                </p>
                <button onClick={() => navigate("register")}>Get started</button>
                <div className="brands">
                    <img src={armani} alt="brand" />
                    <img src={chanel} alt="brand" />
                    <img src={fendi} alt="brand" />
                    <img src={dolce} alt="brand" />

                </div>

            </div>

            <img className="landing" src={landing} alt="landing" /> */}
            <section class="curve">
                <div className="text">
                    <h1>Let us assist you in stress-free customer management</h1>
                    <p>We will assist you in keeping track of your customer's measurements
                        , details, and styles so that you can readily access them from any location at any time.
                    </p>
                    <button onClick={() => navigate("register")}>Get started</button>
                    <div className="brands">
                        <img src={armani} alt="brand" />
                        <img src={chanel} alt="brand" />
                        <img src={fendi} alt="brand" />
                        <img src={dolce} alt="brand" />

                    </div>

                </div>
            </section>
        </div>
    )
}