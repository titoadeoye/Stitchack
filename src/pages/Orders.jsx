import { useState } from "react";
import { PageWrapper, Order } from "../components";
import styled from "styled-components";
import { CaretRightOutlined, CaretUpOutlined } from "@ant-design/icons";
import { device } from "../constants";

export default function Orders() {
    const placeholder = [
        {
            id: 1,
            name: "ayo johnson",
            email: "ayojohnson@gmail.com",
            bill: "12,000",
            paid: "6,000",
            due: new Date().getDate(),
            status: "in progress"
        },
        {
            id: 2,
            name: "dorcas paul",
            email: "dorcasthedork@gmail.com",
            bill: "7,000",
            paid: "7,000",
            due: new Date().getDate(),
            status: "completed"
        },
        {
            id: 3,
            name: "jimoh ibrahim",
            email: "jimohibrahim@gmail.com",
            bill: "9,000",
            paid: "9,000",
            due: new Date().getDate(),
            status: "completed"
        },
        {
            id: 4,
            name: "Helen king",
            email: "helen@gmail.com",
            bill: "11,000",
            paid: "6500",
            due: new Date().getDate(),
            status: "Not started"
        },
        {
            id: 5,
            name: "lawrence oyor",
            email: "lawrenceoyor@gmail.com",
            bill: "12,000",
            paid: "12, 000",
            due: new Date().getDate(),
            status: "in progress"
        },
        {
            id: 6,
            name: "jide aderele",
            email: "jide@yahoo.com",
            bill: "12,000",
            paid: "6000",
            due: new Date().getDate(),
            status: "completed"
        },

    ];
    const [query, setQuery] = useState(null);
    const [show, setShow] = useState(false);
    const filtered = (status) => {
        if (status) {
            return placeholder.filter(order => {
                return order?.status.toLowerCase() === status.toLowerCase()
            })
        } else {
            return placeholder;
        }
    }

    return (
        <PageWrapper>
            <H3>Customers</H3>
            <Filter>
                <FilterButton>
                Filter
                {show ?
                    <CaretRightOutlined onClick={() => setShow(false)} />
                    : <CaretUpOutlined onClick={() => setShow(true)} />}
            </FilterButton>
            {show &&
                <Filters>
                    <Option
                        query={query} id="in progress"
                        onClick={() => query === "in progress" ? setQuery(null) : setQuery("in progress")}> in progress</Option>
                    <Option
                        query={query} id="completed"
                        onClick={() => query === "completed" ? setQuery(null) : setQuery("completed")}>completed </Option>
                    <Option
                        query={query} id="not started"
                        onClick={() => query === "not started" ? setQuery(null) : setQuery("not started")}>not started</Option>
                </Filters>
            }
            </Filter>
            
            <Wrapper>
                <Fields>
                    <p>Order#</p>
                    <p>name</p>
                    <p>mobile</p>
                    <p>bill</p>
                    <p>payment made</p>
                    <p>due date</p>
                    <p>status</p>
                </Fields>
                {
                    filtered(query)?.map(order => (
                        <Order order={order} />
                    ))
                }
            </Wrapper>
        </PageWrapper>
    )
};

const Filter = styled.div`
    display: flex;
    gap: 30px;

    @media (max-width: 520px) {
        flex-direction: column;
        gap: 0;
    }

`

const H3 = styled.h3`
    margin-bottom: 1.5em;
`;

const Wrapper = styled.ul`
    padding: 20px;
    box-shadow: 2px 4px 8px 1px #eeeeee;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    overflow-x: scroll;
    cursor: pointer;
`;

const Fields = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 15px;
    
    p {
        color: ${props => props.theme.primaryColor};
        font-weight: 600;
        font-size: 13px;
        text-transform: capitalize;
        min-width: 150px;
        max-width: 150px;
        margin-right: 1em;

        @media (max-width: 520px) {
            font-size: 12px;
            min-width: 100px;
            max-width: 100px;
        }
    }
`;

const FilterButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 16px;
    padding: 0px 20px;
    border-radius: 16px;
    background: ${props => props.theme.secondaryColor};
    color: white;
    font-weight: 600;
    font-size: 1.3em;
    height: 45px;
    max-width: 110px;
    border: none;
    outline: none;
    margin-bottom: 1em;
`;

const Filters = styled.div`
    display: flex;
`;

const Option = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 16px;
    padding: 0px 20px;
    border: none;
    outline: none;
    border-radius: 16px;
    color: white;
    font-weight: 600;
    font-size: 1em;
    height: 30px;
    margin: 1em 1em 1em 0em;
    text-transform: capitalize;
    background: ${props => props.query === props.id ? props.theme.secondaryColor : props.theme.primaryColor};
    
    @media ${device.mobileM} {
        padding: 0px 15px;
        font-size: 9px;
        height: 34px;
    }
`;
