import { useState } from "react";
import { logo } from "../../assets";
import styled from "styled-components";
import { TwitterIcon, FacebookIcon, InstagramIcon, LinkedinIcon, EmailIcon } from "../../assets/svg";

export default function Footer() {
    const [email, setEmail] = useState("")
    return (
        <Wrapper>
            <div>
                <LogoWrap>
                    <img src={logo} alt="logo" />
                    <div className="socials">
                        <TwitterIcon />
                        <InstagramIcon />
                        <FacebookIcon />
                        <LinkedinIcon />
                        <EmailIcon />
                    </div>
                </LogoWrap>

                {/* <div className="links">
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
                </div> */}

                <Copyrights>
                    <p>@{new Date().getFullYear()} Stitchack | All rights reserved</p>
                </Copyrights>
            </div>


        </Wrapper>
    )
}

const Wrapper = styled.footer`
    height: 50px;
    background-color: black;
    width: 100vw;

    & > div {
        display: flex;
        justify-content: space-between;
        height: 100%;
        padding: 0 10px;
    }
`;

const Copyrights = styled.div`
    
    display: flex;
    align-items: end;
     & p {
        font-size: 10px;
        color: #ddd;
        font-weight: lighter;
     }
`;

const LogoWrap = styled.div`

    display: flex;
    gap: 30px;
    align-items: center;

    img {
        height: 40px;
    }
    .socials {
        display: flex;
        flex-direction: row;
        margin: 0;
        gap: 10px;
        padding-top: 0.8em;

        svg {
            width: 10px;
            height: 10px;
        }
    }
`;