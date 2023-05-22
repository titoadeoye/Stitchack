import { RightOutlined } from "@ant-design/icons";
import styled from "styled-components";

export default function OngoingOrders() {
    return (
        <Wrapper>
            <H3>ongoing orders</H3>
            <Rows>
                <Row>
                    <div>
                        <p>Jane Doe</p>
                        <span>
                            <p className="colored">Due Date</p>
                            <p>23-07-2023</p>
                        </span>
                    </div>
                    <RightOutlined />
                </Row>
                <Row>
                    <div>
                        <p>Helen Paul</p>
                        <span>
                            <p className="colored">Due Date</p>
                            <p>17-06-2023</p>
                        </span>
                    </div>
                    <RightOutlined />
                </Row>
            </Rows>
        </Wrapper>
    )
};

const H3 = styled.h3`
    margin-bottom: 1.5em;
`;

const Wrapper = styled.div`
   width: 100%;
   padding: 20px;
   box-shadow: 2px 4px 8px 1px #eeeeee;
   border-radius: 5px;
   margin-bottom: 3em;
`;

const Rows = styled.ul`

`;

const Row = styled.li`
    display: flex;
    box-shadow: 2px 4px 8px 0 #eeeeee;
    padding: 15px;
    border-radius: 5px;
    position: relative;
    align-items: center;

    p {
        color: ${props => props.theme.primaryColor};
        font-weight: 700;
        font-size: 13px;
        text-transform: capitalize;
        line-height: 25px;
        margin: 0;
     }

    svg {
        position: absolute;
        right: 15px;
    }

    .colored {
        background: ${props => props.theme.secondaryColor};
        -webkit-text-fill-color: transarent;
        -webkit-background-clip: text;
        font-weight: 600; 
    }

    div span {
        display: flex;
        gap: 10px;
    }
`;