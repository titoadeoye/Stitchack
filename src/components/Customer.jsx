import { RightOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { avatar } from "../assets";

export default function Customer ({data, id}) {
    const {firstname, lastname, email, phoneNumber} = data;
    const navigate = useNavigate();


    return (
        <Wrapper>
            {data?.avatar ? <Avatar src={data?.avatar} alt="avatar" /> 
            : <Avatar src={avatar} alt="avatar" />}
            <Data>
                <h4>{firstname} {lastname}</h4>
                <h4 className="colored" >{email}</h4>
                <h4 className="colored" >{phoneNumber}</h4>

            </Data>
            <RightOutlined
            onClick={() => { navigate(`/app/customer/${id}`, {
                replace: true,
                state: {
                    foo: "bar",
                    customer: data,
                    key: id,
                }
            })} }
             />
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