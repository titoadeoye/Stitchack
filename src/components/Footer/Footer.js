import { useState } from "react";
import { logo } from "../../assets";
import { TwitterIcon, FacebookIcon, InstagramIcon, LinkedinIcon, EmailIcon } from "../../assets/svg";
import "./Footer.css";

export default function Footer() {
    const [email, setEmail] = useState("")
    return (
        <footer>
            <div className="footer">
                <div className="logo-wrap"> 
                    <img src={logo} alt="logo" />
                    <div className="socials">
                        <TwitterIcon />
                        <InstagramIcon />
                        <FacebookIcon />
                        <LinkedinIcon />
                        <EmailIcon />
                    </div>
                </div>

                <div className="links">
                    <div>
                        <h3>Who We Are</h3>
                        <a href="#about">About us</a>
                        <a href="#services">Our services</a>
                        <a href="#home">Our Team</a>
                        <a href="#home">Privacy Policy</a>
                        <a href="#home">Terms of Service</a>

                    </div>

                    <div>
                        <h3>Support</h3>
                        <a href="#home">Get Started</a>
                        <a href="#home">Help</a>
                        <a href="#faq">FAQ</a>

                    </div>
                </div>

                <div className="message">
                    <h3>Stay in the  <span> LOOP</span></h3>
                    <p>Join our mailing list to stay in the loop with our newest<br />
                        features, releases, tips and tricks
                    </p>
                    <form onSubmit={() => console.log(email)}>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email address" required />
                        <button type="submit">I'm in</button>
                    </form>
                </div>
            </div>

            <div className="copyrights">
                <p>@{new Date().getFullYear()} Stitchack | All rights reserved</p>
            </div>

        </footer>
    )
}