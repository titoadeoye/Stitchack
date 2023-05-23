import { useNavigate } from "react-router-dom";
import {bg} from "../../assets";
import {NavBar} from "..";
import styled from "styled-components";
import "./Home.css";

export default function Home() {
    const navigate = useNavigate();
    return (
        <div id="home">
            {/* background: 'linear-gradient(139.52deg, #6251C3 -73.08%, #A800AB 150.16%)'} */}
            <div style={{background: "#141414"}}>
                <NavBar />
                <section>
                    <div  className="home-content">
                   <div className="text">
                    <h1>Let us assist you in stress-free customer management</h1>
                    <p>We will assist you in keeping track of your customer's measurements
                        , details, and styles so that you can readily access them from any location at any time.
                    </p>
                    <Button onClick={() => navigate("register")}>Get started</Button>
                </div>
                <img className="landing" src={bg} alt="landing" />
  
                </div>
               
                <div class="curve"></div>
                </section>
                
            </div>
        </div>
    )
}

const Button = styled.button`
    background: var(--white);
    border-radius: 10px;
    border: none;
    color: #141414;
    font-weight: 700;
    font-size: 1.3em;
    padding: 13px 70px;
    margin-top: 1em;

    @media (max-width: 460px) {
            width: 74%;
            padding: 13px 9px;
    }
`