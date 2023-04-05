import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
    const navigate = useNavigate();
    return (
        <div id="home">
            <section>
                <div  style={{display: "flex", justifyContent: "space-between"}}>
                   <div className="text">
                    <h1>Let us assist you in stress-free customer management</h1>
                    <p>We will assist you in keeping track of your customer's measurements
                        , details, and styles so that you can readily access them from any location at any time.
                    </p>
                    <button onClick={() => navigate("register")}>Get started</button>
                </div>
                {/* <img style={{marginRight: "2em", width: "200px", height: "200px",mixBlendMode: ""}} className="landing" src={mannequin} alt="landing" /> */}
  
                </div>
               
                <div class="curve"></div>
            </section>
        </div>

        // <div id="home">
        // {/* <div className="text">
        //     <h1>Let us assist you in stress-free customer management</h1>
        //     <p>We will assist you in keeping track of your customer's measurements
        //         , details, and styles so that you can readily access them from any location at any time.
        //     </p>
        //     <button onClick={() => navigate("register")}>Get started</button>
        //     <div className="brands">
        //         <img src={armani} alt="brand" />
        //         <img src={chanel} alt="brand" />
        //         <img src={fendi} alt="brand" />
        //         <img src={dolce} alt="brand" />

        //     </div>

        // </div>

        // <img className="landing" src={landing} alt="landing" /> */}


    )
}