import styled from "styled-components";
import { female, male } from "../assets";
import { PageWrapper, Customer } from "../components";

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
    ]
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
        </PageWrapper>
    )
};

const H3 = styled.h3`
    margin-bottom: 1.5em;
`

const Wrapper = styled.div`
    padding: 20px;
    // box-shadow: 1px 1px 1px 1px red;
    box-shadow: 2px 4px 8px 1px #eeeeee;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 30px;
`