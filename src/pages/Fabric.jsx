import { PageWrapper } from "../components";
import { LeftOutlined } from "@ant-design/icons";
import { ankara, chiffon, cotton, crepe, damask, denim, lace, linen, lycra, satin, silk, velvet } from "../assets";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { device } from "../constants";


export default function Fabric() {
    const navigate = useNavigate();

    return (
        <PageWrapper>
            <Back>
                <LeftOutlined onClick={() => navigate(-1)} />

            </Back>
            <H3>Fabric</H3>
            <Wrapper>
                <Style bg={lace}><p>Lace</p></Style>
                <Style bg={satin}><p>Satin</p></Style>
                <Style bg={silk}><p>Silk</p></Style>
                <Style bg={crepe}><p>Crepe</p></Style>
                <Style bg={lycra}><p>Lycra</p></Style>
                <Style bg={chiffon}><p>Chiffon</p></Style>
                <Style bg={damask}><p>Damask</p></Style>
                <Style bg={ankara}><p>Ankara</p></Style>
                <Style bg={denim}><p>Denim</p></Style>
                <Style bg={velvet}><p>Velvet</p></Style>
                <Style bg={cotton}><p>Cotton</p></Style>
                <Style bg={linen}><p>Linen</p></Style>
            
            </Wrapper>
        </PageWrapper>
    )
}

const H3 = styled.h3`
    margin-bottom: 1.5em;
`;

const Back = styled.span`

    svg {
        width: 20px;
        height: 20px;
        margin-bottom: 2em;
    }
`

const Wrapper = styled.div`
   display: flex;
   flex-shrink: 0;
   flex-wrap: wrap;
   gap: 20px;
   justify-content: space-evenly;
`;

const Style = styled.div`
    background-image: url(${props => props.bg});
    background-size: cover;
    width: 250px;
    height: 250px;
    display: flex;
    justify-content: center;
    border-radius: 5px;

    @media (max-width: 540px) {
        width: 200px;
        height: 200px;
    }

    @media (max-width: 440px) {
        width: 170px;
        height: 170px;
    }

    @media ${device.mobileM} {
        width: 100%;
        height: 170px;
    }

    p {
        color: white;
        font-weight: 700;
        font-size: 14px;
        margin: auto;
    }

`;