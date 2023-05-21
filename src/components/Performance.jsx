import styled from "styled-components";

export default function Performance () {
    return (
        <Wrapper>
        <H3>Today's performance</H3>
        <Badges>
           <Badge>
            <h2>10</h2>
              <p>Add Customer</p>
           </Badge>
           <Badge>
           <h2>4</h2>
              <p>view customer</p>
           </Badge>
           <Badge >
           <h2>&#8358;25k</h2>
              <p>Payment</p>

           </Badge>
        </Badges>
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
`;

const Badges = styled.div`
   display: flex;
   width: 100%;
   gap: 20px;
   flex-direction: column;
`;

const Badge = styled.div`
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