import styled from "styled-components";

export default function DueToday() {
   const date = new Date();
   var currentDate = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
   const placeholder = [
      {
         id: 321,
         name: "Esther orji",
         date: currentDate,
         style: "Peplum blouse"
      },
      {
         id: 601,
         name: "Ronald williams",
         date: currentDate,
         style: "Suit"
      },
      {
         id: 341,
         name: "John Johnson",
         date: currentDate,
         style: "Kaftan"
      },
      {
         id: 44,
         name: "Regina Peters",
         date: currentDate,
         style: "Silk dress"
      },
   ];

   return (
      <Wrapper>
         <H3>Orders Due today</H3>
         <p>No data available</p>
         {/* <Rows>
            {placeholder.slice(0, 4).map((item, key) => (
               <Row key={key}>
                  <div>
                     <h4 className="name">{item?.name}</h4>
                     <p>{item?.date}</p>
                     <h4>{item?.style}</h4>
                  </div>
                  <div>
                     <p>#{item?.id}</p>
                     <p className="due">Due</p>
                  </div>

               </Row>
            ))}
         </Rows> */}
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
   box-shadow: 2px 4px 8px 1px #eeeeee;
   border-radius: 5px;
   width: 100%;
   padding: 15px;
   display: flex;
   align-items: start;
   justify-content: space-between;


   p {
      color: ${props => props.theme.primaryColor};
      font-size: 13px;
      text-transform: capitalize;
      line-height: 25px;
      margin: 0;
   }

   h4 {
    font-size: 14px;
    margin: 0;
   }

   .name {
      font-weight: 700;
   }

   .due {
      color: red;
   }
`;