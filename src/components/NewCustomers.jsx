import styled from "styled-components";
import { female, male } from "../assets";
import {Customer} from ".";

export default function NewCustomers() {
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
    ];
    return (
        <>
            <Wrapper>
                <H3>new customers</H3>
                {
                    placeholder?.slice(0, 4).map(customer => (
                        <Customer data={customer} />
                    ))
                }
            </Wrapper>
        </>
    )
}

const H3 = styled.h3`
    margin-bottom: 0em;
`

const Wrapper = styled.div`
    padding: 20px;
    box-shadow: 2px 4px 8px 1px #eeeeee;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    height: 313px;
    overflow-y: auto;
`;