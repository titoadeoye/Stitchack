import { reviewer1, reviewer2, reviewer3 } from "../../assets";
import "./Reviews.css";


export default function Reviews() {
    return (
        <div id="reviews">
            <h2>Reviews</h2>
            <div className="reviews">
                <div className="review">
                    <img src={reviewer1} alt="reviewer" />
                    <h3>Daniel Johnson</h3>
                    <p>Ready to wear</p>
                    <p>"Stitchack is an amazing platform for tailors"</p>
                </div>

                <div className="review">
                    <img src={reviewer2} alt="reviewer" />
                    <h3>Samuel Paul</h3>
                    <p>Fashion designer</p>
                    <p>"Stitchack has really helped me manage my time and customers record. I recommend it."</p>
                </div>

                <div className="review">
                    <img src={reviewer3} alt="reviewer" />
                    <h3>Alisha Freeman</h3>
                    <p>Fashion designer</p>
                    <p>"I love this site and would totally recommend"</p>
                </div>
            </div>
            {/* <div className="scroll">
                <a href="#home">Scroll to top</a>
            </div> */}
        </div>
    )
}