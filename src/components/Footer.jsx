import { logo } from "../assets";
import styled from "styled-components";
import { TwitterIcon, FacebookIcon, InstagramIcon, LinkedinIcon, EmailIcon } from "../assets/svg";
import { device } from "../constants";

export default function Footer() {
    return (
        <Wrapper >
            <div className="box mask">
                <Text>

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

                    <Copyrights>
                        <p>@{new Date().getFullYear()} Stitchack | </p>
                        <p>All rights reserved</p>
                    </Copyrights>
                </Text>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.footer`

    .box {
        --size: 50px;
        height: 160px;
        border: 1px solid;
        display: flex;
        background:
        radial-gradient(var(--size) at 50% var(--size),#6251C3 99%,#0000 101%) calc(50% - 2*var(--size)) 0/calc(4*var(--size)) 100% no-repeat,
        radial-gradient(var(--size) at 50% 0px,#0000 99%,#A800AB 101%) 50% var(--size)/calc(4*var(--size)) 100% no-repeat;
    
        @media ${device.isSmallDevice} {
            --size: 35px;
            height: 140px;
        }

        @media ${device.mobileL} {
            --size: 20px;
            height: 110px;
        }
        @media (min-width: 1600px) {
            --size: 3vw;
            height: 11vw;
        }
    }

    .box + .box {
        background-repeat: repeat-x;
    }
    .box.mask {
        -webkit-mask:
        radial-gradient(var(--size) at 50% var(--size),#141414 99%,#0000 101%) calc(50% - 2*var(--size)) 0/calc(4*var(--size)) 100%,
        radial-gradient(var(--size) at 50% 0px,#0000 99%,#141414 101%) 50% var(--size)/calc(4*var(--size)) 100% repeat-x;
        // -webkit-mask:
        // radial-gradient(var(--size) at 50% var(--size),#6251C3 99%,#0000 101%) calc(50% - 2*var(--size)) 0/calc(4*var(--size)) 100%,
        // radial-gradient(var(--size) at 50% 0px,#0000 99%,#A800AB 101%) 50% var(--size)/calc(4*var(--size)) 100% repeat-x;
        // background:linear-gradient(90deg,#A800AB,#6251C3);  
        background:linear-gradient(90deg,#141414, #00001a);  
        border: none;
    }
`

const Text = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    height: 60px;
    width: 100%;
    align-self: end;
    align-items: center;

    @media (min-width: 1600px) {
        height: 6vw;
        padding: 0 2vw;
    }
`

const Copyrights = styled.div`
    
    display: flex;
    align-items: end;
     & p {
        font-size: 10px;
        color: #ddd;
        font-weight: lighter;
        margin-bottom: 0;

        @media (min-width: 1600px) {
            font-size: 0.9vw;
        }
     }

     @media ${device.isSmallDevice} {
        flex-direction: column;
     }
`;

const LogoWrap = styled.div`

    display: flex;
    gap: 30px;
    align-items: center;

    @media (max-width: 650px) {
        flex-direction: column-reverse;
        gap: 0;
    }

    img {
        height: 40px;

        @media (min-width: 1600px) {
            height: 4vw;
        }
    }
    .socials {
        display: flex;
        flex-direction: row;
        margin: 0;
        gap: 10px;
        padding-top: 0.8em;

        @media (min-width: 1600px) {
            gap: 1vw;
        }

        svg {
            width: 10px;
            height: 10px;

            @media (min-width: 1600px) {
                height: 1.2vw;
                width: 1.2vw;
            }
        }
    }
`;