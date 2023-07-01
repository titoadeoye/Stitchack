import styled from "styled-components";
import { PageWrapper, Customer, Empty, LoadingComponent } from "../components";
import { PlusCircleFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { getCustomers } from "../api/users";
import { useUserContext } from "../context/UserContext";

export default function Customers() {
    const { user } = useUserContext();
    const navigate = useNavigate();


    const { data: customers, isLoading } = useQuery(
        ["customers"],
        () => user ? getCustomers(user?._id) : null,
        {
            onSuccess: (res) => {return;},
            onError: (err) => console.log(err),
            retry: 3,
        }
    );

    if(isLoading) 
    <PageWrapper>
        <LoadingComponent />
    </PageWrapper>


    return (
        <PageWrapper>
            <H3>Customers</H3>
            {
                isLoading ? <LoadingComponent />
                 : customers?.data?.length ? (
                    <Wrapper>
                        {
                            customers?.data?.map((customer, key) => (
                                <Customer data={customer} id={customer?.cid} />
                            ))
                        }
                    </Wrapper>
                ) : <Empty />
            }

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