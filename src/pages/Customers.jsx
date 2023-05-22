import styled from "styled-components";
import { female, male } from "../assets";
import { PageWrapper, Customer } from "../components";
import { PlusCircleFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export default function Customers() {
    const placeholder = [
        {
            avatar: female,
            name: "Jane doe",
            phoneNumber: "+234 8000000000"
        },
        {
            avatar: male,
            name: "John Doe",
            phoneNumber: "+234 8000000000"
        },
        {
            avatar: female,
            name: "Jane doe",
            phoneNumber: "+234 8000000000"
        },
        {
            avatar: male,
            name: "John Doe",
            phoneNumber: "+234 8000000000"
        },
        {
            avatar: female,
            name: "Jane doe",
            phoneNumber: "+234 8000000000"
        },
        {
            avatar: male,
            name: "John Doe",
            phoneNumber: "+234 8000000000"
        },
        {
            avatar: female,
            name: "Jane doe",
            phoneNumber: "+234 8000000000"
        },
        {
            avatar: male,
            name: "John Doe",
            phoneNumber: "+234 8000000000"
        },
        {
            avatar: female,
            name: "Jane doe",
            phoneNumber: "+234 8000000000"
        },
        {
            avatar: male,
            name: "John Doe",
            phoneNumber: "+234 8000000000"
        },
    ];
    const navigate = useNavigate();

    return (
        <PageWrapper>
            <H3>Customers</H3>
            <Wrapper>
                {
                    placeholder?.map(customer => (
                        <Customer data={customer} />
                    ))
                }
            </Wrapper>
            <Badge onClick={() => navigate("add")}>
                <PlusCircleFilled />
            </Badge>
        </PageWrapper>
    )
};

const H3 = styled.h3`
    margin-bottom: 1.5em;
`

const Wrapper = styled.div`
    padding: 20px;
    box-shadow: 2px 4px 8px 1px #eeeeee;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 30px;
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