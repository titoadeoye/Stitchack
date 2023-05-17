import { logo } from "../assets";
import styled from "styled-components";
import { TwitterIcon, FacebookIcon, InstagramIcon, LinkedinIcon, EmailIcon } from "../assets/svg";

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
                        <p>@{new Date().getFullYear()} Stitchack | All rights reserved</p>
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
// const Wrapper = styled.footer`
//     height: 50px;
//     background: linear-gradient(139.52deg,#6251C3 -73.08%,#A800AB 150.16%);
//     width: 100vw;

//     & > div {
//         display: flex;
//         justify-content: space-between;
//         height: 100%;
//         padding: 0 10px;
//     }
// `;

const Text = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    height: 60px;
    width: 100%;
    align-self: end;
`

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