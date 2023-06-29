import styled from "styled-components";
import { Customer, LoadingComponemt } from ".";
import { useQuery } from "react-query";
import { getCustomers } from "../api/users";
import { useUserContext } from "../context/UserContext";


export default function NewCustomers() {
    const { user } = useUserContext();


    const { data: customers, loading } = useQuery(
        ["customers"],
        () => user ? getCustomers(user?._id) : null,
        {
            onSuccess: (res) => {return;},
            onError: (err) => console.log(err),
            retry: 3,
        }
    );
    return (
        <>
            <Wrapper>

                <>
                    <H3>new customers</H3>
                    {loading && <LoadingComponemt />}
                    {customers ?
                        customers?.data?.slice(-3).map(customer => (
                            <Customer data={customer} />
                        )) : <p>No data available</p>
                    }
                </>

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
