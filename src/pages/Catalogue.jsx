import { PlusCircleFilled } from "@ant-design/icons";
import { PageWrapper } from "../components";
import styled from "styled-components";
import { fabric, styles } from "../assets";
import { useNavigate } from "react-router-dom";
import { device } from "../constants";


export default function Catalogue() {
    const navigate = useNavigate();

    return (
        <PageWrapper>
            <Row>
                <H3>Catalogue</H3>
                <span>
                    <p>Upload </p>
                    <PlusCircleFilled />
                </span>
            </Row>
            <Wrapper>
                <span>
                    <img src={styles} alt="styles" onClick={() => navigate("styles")} />
                    <p>Styles</p>
                </span>
                <span>
                    <img src={fabric} alt="fabric" onClick={() => navigate("fabric")} />
                    <p>Fabric</p>

                </span>
            </Wrapper>
        </PageWrapper>
    )
};

const Row = styled.div`
   display: flex;
   width: 100%;
   align-items: start;
   justify-content: space-between;

    span {
        display: flex;
        align-items: start;
        gap: 7px;

        svg {
            width: 20px;
            height: 20px;
        }

        p {
            font-weight: 700;
        }
    }
`;

const H3 = styled.h3`
    margin-bottom: 1.5em;
`;

const Wrapper = styled.div`
    display: flex;
    max-width: 100%;
    gap: 20px;
    
    

    span {
        display: flex;
        flex-direction: column;
        width: 48%;

         @media ${device.mobileL} {
                width: 100%;
            }

        img {
            width: 100%;
            height: 400px;
            object-fit: cover;
            border-radius: 5px;
        }

        p {
            text-align: center;
            font-weight: 700;
            margin: 0.5em 0;
            font-size: 15px;
        }
    }

    @media ${device.mobileL} {
        flex-direction: column;
        gap: 10px;
    }
`