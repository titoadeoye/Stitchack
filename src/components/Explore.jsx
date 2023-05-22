import { FolderViewOutlined, MoneyCollectOutlined, UserAddOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { device } from "../constants";
 
export default function Explore() {
   return (
      <Wrapper>
         <H3>Explore</H3>
         <Badges>
            <Badge bg="orange">
               <UserAddOutlined />
               <p>Add Customer</p>
            </Badge>
            <Badge bg="limegreen">
               <FolderViewOutlined />
               <p>view customer</p>

            </Badge>
            <Badge bg="deepskyblue">
               <MoneyCollectOutlined />
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
   margin-bottom: 3em;
`;

const Badges = styled.div`
   display: flex;
   width: 100%;
   gap: 20px;
   flex-wrap: wrap;

   @media ${device.isSmallDevice} {
      justify-content: space-between;
  }
   
`;

const Badge = styled.div`
   background-color: ${props => props.bg};
   height: 90px;
   box-shadow: 2px 4px 8px 1px #eeeeee;
   border-radius: 20px;
   width: 31%;
   padding-inline: 15px;
   display: flex;
   gap: 30px;
   align-items: center;
   justify-content: center;
   filter: contrast(0.95);

   @media (max-width: 1200px) {
      width: auto;
      min-width: 170px;
   }

   @media ${device.isSmallDevice} {
      width: min-content;
  }

   @media (max-width: 500px) {
      width: 100%;
  }


   svg {
      width: 40px;
      height: 40px;
      color: white;
   }

   p {
      color: white;
      font-weight: 700;
      font-size: 13px;
      text-transform: capitalize;
      line-height: 25px;
      margin: 0;

   }
`;