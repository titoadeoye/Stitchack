import { PageWrapper } from "../components";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { LeftOutlined } from "@ant-design/icons";

export default function Customer () {
    const location = useLocation();
    const navigate = useNavigate();
    // const customer = location?.state?.foo && JSON.parse(location?.state?.foo);
    const {customer, key} = location?.state && location?.state;
    const {avatar, name, phoneNumber} = customer;


    return (
        <PageWrapper>
             <Back>
                <LeftOutlined onClick={() => navigate("/app/customers")} />

            </Back>
            <Wrapper>
            <Avatar src={avatar} alt="avatar" />
            <Data>
                <h4>{name}</h4>
                <h4 className="colored" >Serial #{key}</h4>
            </Data>
        </Wrapper>
        </PageWrapper>
    )
};

const Back = styled.span`

    svg {
        width: 20px;
        height: 20px;
        margin-bottom: 2em;
    }
`

const Wrapper = styled.div`
    display: flex;
    gap: 20px;
    box-shadow: 2px 4px 8px 0 #eeeeee;
    padding: 15px;
    border-radius: 5px;
    position: relative;
    align-items: center;

    svg {
        position: absolute;
        right: 15px;
        cursor: pointer;
    }
`;

const Data = styled.div`
    h4 {
        color: #141414;
        font-size: 13px;
        font-weight: 600;
    }

    .colored {
        background: ${props => props.theme.secondaryColor};
        -webkit-text-fill-color: transarent;
        -webkit-background-clip: text;
        font-weight: 400; 
    }
`;

const Avatar = styled.img`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    object-fit: cover;
`;