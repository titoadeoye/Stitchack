import styled from "styled-components";
import { useQuery } from "react-query";
import { getTodaysCustomers } from "../api/users";
import { useUserContext } from "../context/UserContext";
import { LoadingComponent } from ".";
import { useState } from "react";

export default function Performance() {
   const {user} = useUserContext();

   const { data: todaysCustomers, isLoading } = useQuery(
      ["todaysCustomers"],
      () => user ? getTodaysCustomers(user?._id) : null,
      {
          onSuccess: () => { return; },
          onError: (err) => console.log(err),
          retry: 3,
      }
  );
   
   return (
      <Wrapper>
         <H3>Today's performance</H3>
         <Rows>
            <Row>
               <h2>
               {isLoading ? <LoadingComponent />
                        : todaysCustomers  ? `${todaysCustomers?.data}`
                        : "-"
                    }
               </h2>
               <p>New customers</p>
            </Row>
            <Row>
               <h2>-</h2>
               <p>New Orders</p>
            </Row>
            <Row >
               <h2>&#8358;-</h2>
               <p>Payment</p>

            </Row>
         </Rows>
      </Wrapper>
   )
};

const H3 = styled.h3`
    margin-bottom: 1.5em;
`;

const Wrapper = styled.div`
   width: 100%;
   padding: 20px;
   box-shadow: 2px 4px 8px 1px #eeeeee;
   border-radius: 5px;
   margin-bottom: 3em;
`;

const Rows = styled.div`
   display: flex;
   width: 100%;
   gap: 20px;
   flex-direction: column;
`;

const Row = styled.div`
   height: 50px;
   box-shadow: 2px 4px 8px 1px #eeeeee;
   border-radius: 5px;
   width: 100%;
   padding: 15px;
   display: flex;
   gap: 15px;
   align-items: center;
   justify-content: center;


   p {
      color: ${props => props.theme.primaryColor};
      font-weight: 700;
      font-size: 13px;
      text-transform: capitalize;
      line-height: 25px;
      margin: 0;
   }

   h2 {
    color: ${props => props.theme.primaryColor};
    font-weight: 700;
    font-size: 25px;
   }
`;