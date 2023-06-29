import styled from "styled-components"
import { empty2 } from "../assets"
import { device } from "../constants"

export default function Empty() {
    return (
        <Wrapper>
            <img src={empty2} alt="empty" />
            <h3>No Data Found</h3>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    
    img {
        width: 370px;
        height: 300px;

        @media (max-width: 500px) {
            width: 300px;
        }

        @media ${device.mobileM} {
            width: 230px;
            height: 250px;
        }
    }
`