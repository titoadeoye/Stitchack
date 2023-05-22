import { CustomInput, PageWrapper } from "../components";
import styled from "styled-components";

export default function AddCustomer() {
    return (
        <PageWrapper>
            <Wrapper>
                <H3>customer</H3>
                <Row>
                    <input
                        type="text"
                        placeholder="Jane Doe"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                    />
                </Row>
                <input
                        type="text"
                        placeholder="Address"
                    />
                <br />
                <div style={{ display: "flex", alignItems: "center" }}>
                    
                    <p>Gender:</p>
                    <input
                        className="gender"
                        type="radio"
                        name="gender"
                        value="male"
                        id="male"
                    />
                    <label for="male">Male</label>
                    <input
                        className="gender"

                        type="radio"
                        name="gender"
                        value="female"
                        id="female"
                    />
                    <label for="female">Female</label>
                </div>




            </Wrapper>
        </PageWrapper>
    )
}

const H3 = styled.h3`
    margin-bottom: 1.5em;
`;

const Wrapper = styled.div`
   width: 100%;
   padding: 20px;
   box-shadow: 2px 4px 8px 1px #eeeeee;
   border-radius: 5px;
   margin-bottom: 3em;

   input {
    width: 100%;
    margin-bottom: 1em;
    height: 40px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
   } 

   input::placeholder {
        color: #ccc;
        font-weight: 700;
        font-size: 13px;
        text-transform: capitalize;
        line-height: 25px;
        margin: 0;
    }

    .gender {
        margin: 0;
        width: auto ;
    }

    p {
        color: ${props => props.theme.primaryColor};
        font-weight: 700;
        font-size: 13px;
        text-transform: capitalize;
        line-height: 25px;
        margin: 0;
    }
`;

const Row = styled.div`
    display: flex;
    width: 100%;
    gap: 10px;
`
