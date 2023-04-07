import styled from "styled-components"
import { bg1 } from "../../assets";
import {CustomInput} from "../../components";

export default function Login () {
    return (
        <Wrapper>
            <FormWrapper>
                <Form>
                    <CustomInput type="text" placeholder="Email address" />
                    <CustomInput type="text" placeholder="Password" />

                </Form>
            </FormWrapper>
            <Background bg={bg1} />
        </Wrapper>
    )
};

const Wrapper = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    background: #fff;
`;

const Background = styled.div`
    width: calc(100% - 400px);
    height: 100%;
    background-image: url(${props => props.bg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto 100%;
`;

const FormWrapper = styled.div`
    width: 400px;
`;

const Form = styled.form`

`