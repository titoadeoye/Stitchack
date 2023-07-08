import styled from "styled-components";
import { Customer, LoadingComponent } from ".";
import { useQuery } from "react-query";
import { getCustomers } from "../api/users";
import { useUserContext } from "../context/UserContext";


export default function NewCustomers() {
    const { user } = useUserContext();


    const { data: customers, isLoading } = useQuery(
        ["customers"],
        () => user ? getCustomers(user?._id) : null,
        {
            onSuccess: () => { return; },
            onError: (err) => console.log(err),
            retry: 3,
        }
    );

    
    return (
        <>
            <Wrapper>

                <>
                    <H3>new customers</H3>
                    {isLoading ? <LoadingComponent />
                        : customers && customers.data.length > 0 ?
                            <>
                                {customers?.data?.slice(-4).reverse().map((customer, key) => (
                                    <Customer key={key} data={customer} />
                                ))}
                            </>

                            : <p>No data available</p>
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