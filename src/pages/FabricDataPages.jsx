import { Empty, PageWrapper } from "../components";
import { LeftOutlined, PlusCircleFilled } from "@ant-design/icons";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


export default function FabricDataPages({type}) {
    const navigate = useNavigate();

    return (
        <PageWrapper>
            <Back>
                <LeftOutlined onClick={() => navigate("/app/catalogue/fabric")} />

            </Back>
            <H3>{type}</H3>
            {/* <Wrapper></Wrapper> */}
            <Empty />
            <Badge>
                <PlusCircleFilled />
            </Badge>
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

const Badge = styled.span`
    position: absolute;
    bottom: 30px;
    right: 20px;
    cursor: pointer;

    svg {
        width: 65px;
        height: 65px;
        fill: ${props => props.theme.primaryColor};

        
        @media (max-width: 520px) {
            width: 50px;
            height: 50px;
        }
    }
`;