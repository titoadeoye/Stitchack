import { RightOutlined } from "@ant-design/icons";
import styled from "styled-components";

export default function Customer ({data}) {
    const {avatar, name, phoneNumber} = data;

    return (
        <Wrapper>
            <Avatar src={avatar} alt="avatar" />
            <Data>
                <h4>{name}</h4>
                <h4 className="colored" >{phoneNumber}</h4>
            </Data>
            <RightOutlined />
        </Wrapper>
    )
}

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
    }
`;

const Data = styled.div`
    h4 {
        color: #141414;
        font-size: 13px;
        font-weight: 600;
    }

    .colored {
        color: #A800AB;
        font-weight: 400; 
    }
`;

const Avatar = styled.img`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    object-fit: cover;
`;