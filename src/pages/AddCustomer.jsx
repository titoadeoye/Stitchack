import { CustomInput, PageWrapper } from "../components";
import styled from "styled-components";

export default function AddCustomer() {
    return (
        <PageWrapper>
            <H3>customer</H3>

            <Wrapper>
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
            <H3>Measurement (cm)</H3>

            <Wrapper>
                <Measurement>
                    <input type="text" placeholder="neck" />
                    <input type="text" placeholder="shoulder" />
                    <input type="text" placeholder="chest" />
                </Measurement>
                <Measurement>
                    <input type="text" placeholder="top length" />
                    <input type="text" placeholder="bust" />
                    <input type="text" placeholder="thigh" />
                </Measurement>
                <Measurement>
                    <input type="text" placeholder="trouser length" />
                    <input type="text" placeholder="hip" />
                    <input type="text" placeholder="full length" />
                </Measurement>

                <Measurement>
                    <input type="text" placeholder="skirt length" />
                    <input type="text" placeholder="arm width" />
                    <input type="text" placeholder="waist" />
                </Measurement>

                
            </Wrapper>

            <H3>Note</H3>
                <Textarea placeholder="Type here...">
                </Textarea>
                <br />

                <Button>
                    <button>Save</button>
                </Button>
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
   margin-bottom: 2em;

   input {
    width: 100%;
    margin-bottom: 1em;
    height: 40px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
   } 

   input::placeholder {
        color: #ccc;
        font-weight: 700;
        font-size: 10px;
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
        margin-right: 2em;
    }

    label {
        margin: 0 1em;
    }
`;

const Row = styled.div`
    display: flex;
    width: 100%;
    gap: 10px;
`;

const Measurement = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 1em;
    gap: 10px;

    
    @media (max-width: 500px) {
        flex-direction: column;
    }

    input {
        width: 200px;
        border: 0px solid;
        border-bottom: 1px solid #ccc;
        outline: none;

        @media (max-width: 500px) {
            width: 100%;
        }
    }
`;

const Textarea = styled.textarea`
    width: 100%;
    height: 100px;
    outline: none;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;

    &::placeholder {
        color: #ccc;
        font-weight: 700;
        font-size: 10px;
        text-transform: capitalize;
        line-height: 25px;
        margin: 0;
    }
`;

const Button = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    margin: 1em 0;

    button {
        height: 40px;
        width: 15em;
        background: ${props => props.theme.primaryColor};
        color: ${props => props.theme.white};
        outline: none;
        border: none;
        border-radius: 5px;
        font-weight: 600;
    }
    
`;
