import { PageWrapper } from "../components";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { LeftOutlined } from "@ant-design/icons";
import { avatar } from "../assets";
import { useEffect, useState } from "react";

export default function Customer() {
    const location = useLocation();
    const navigate = useNavigate();
    const { customer, key } = location?.state && location?.state;
    const { firstname, lastname, email, gender, address, phoneNumber } = customer;
    const [measurementsArray, setMeasurementsArray] = useState([]);
    const [parts, setParts] = useState(["Neck", "Shoulder", "hip", "Wrist", "Thigh", "Across chest",
        "Across back", "Waist",]);

    useEffect(() => {
        const arr = [Object.entries(customer?.measurements)];
        setMeasurementsArray(arr);
        const newArray = [];
        const measurements = Object.keys(customer?.measurements)
        parts.map(part => {
            if (!(measurements.includes(part.toLowerCase()))) {
                newArray.push(part)
            }
        })
        setParts(newArray)

    }
        , [customer?.measurements])

    return (
        <PageWrapper>
            <Back>
                <LeftOutlined onClick={() => navigate("/app/customers")} />

            </Back>
            <Wrapper>
                {customer?.avatar ? <Avatar src={customer?.avatar} alt="avatar" />
                    : <Avatar src={avatar} alt="avatar" />}
                <Data>
                    <h4 className="bold">{firstname} {lastname}</h4>
                    <h4 className="capitalize">{gender}</h4>
                    <h4 className="capitalize">{address}</h4>          
                    <h4>{email}</h4>
                    <h4>{phoneNumber}</h4>
                    <h4 className="bold">{customer?.note && `Note:`}</h4>
                    <h4>{customer?.note && `${customer?.note}`}</h4>
                    <h4 className="colored" >Serial #{key?.slice(0, 3)}</h4>
                </Data>
            </Wrapper>
            <H3>Measurements</H3>
            <Measurements>
                {measurementsArray?.map((measurement, key) =>
                    <Row id={`measurement-jud-${key}`}>
                        <p>{measurement[0][0]}</p>
                        <span>{measurement[0][1]}</span>
                    </Row>
                )}
                {parts?.map((measurement, key) =>
                    <Row id={`measurement-jud-${key}`}>
                        <p>{measurement}</p>
                        <span>{
                            customer?.measurements && measurement in customer?.measurements
                                ? `${customer?.measurements?.measurement}`
                                : "-"
                        }</span>
                    </Row>
                )}
            </Measurements>
            <ButtonGroup>
                <button className="colored">Edit</button>
                <button onClick={() => navigate("/app/orders/add")}>Start Order</button>
            </ButtonGroup>
        </PageWrapper>
    )
};

const Row = styled.div`
    display: flex;
    margin-bottom: 2em;
    gap: 30px;
    align-items: center;

    @media (max-width: 480px) {
        justify-content: center;
    }

    p, span {
        color: ${props => props.theme.primaryColor};
        font-size: 13px;
        font-weight: 700;
        width: 100px;
        min-width: 80px;
    }

    span {
        border-bottom: 2px solid ${props => props.theme.primaryColor};
        width: 40px;
        text-align: center;
        width: 80px;
    }
`

const Back = styled.span`

    svg {
        width: 20px;
        height: 20px;
        margin-bottom: 2em;
    }
`;

const Measurements = styled.div`
    box-shadow: 2px 4px 8px 0 #eeeeee;
    padding: 15px;
    border-radius: 5px;
    -webkit-columns: 40px 2;
    -moz-columns: 60px 2;
    columns: 60px 2;

    @media (max-width: 480px) {
        columns: auto;
    }
`;

const Wrapper = styled.div`
    display: flex;
    gap: 20px;
    box-shadow: 2px 4px 8px 0 #eeeeee;
    padding: 15px;
    border-radius: 5px;
    position: relative;
    // align-items: center;
    margin-bottom: 3em;

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

const H3 = styled.h3`
    margin-bottom: 1.5em;
`;

const ButtonGroup = styled.div`
    width: 100%;
    display: flex;
    margin: 2em 0;
    gap: 20px;
    justify-content: center;

    button {
        height: 40px;
        width: 15em;
        background: ${props => props.theme.primaryColor};
        color: ${props => props.theme.white};
        outline: none;
        border: none;
        border-radius: 5px;
        font-weight: 600;  
    }

    .colored {
        background: ${props => props.theme.secondaryColor};
    }
`;