import styled from "styled-components";
import { CustomInput, Loader } from "../components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fireSwalError, device, setToStorage } from "../constants";
import { logIn } from "../api/auth";
import { useMutation } from "react-query";
import * as Yup from "yup";
import "yup-phone-lite";
import { Formik } from "formik";
import { useUserContext } from '../context/UserContext';


export default function Login() {
    const [error, setError] = useState('');
    const { setUser, setIsLoggedIn } = useUserContext();
    const navigate = useNavigate();

    const initialValues = {
        email: "",
        password: "",
        remember: false,
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("Please enter a valid email")
            .required("Please enter your email"),
        password: Yup.string()
            .required("Please enter your password")
    });

    const { isLoading: loading, mutate } = useMutation(logIn, {
		onSuccess: (data) => {
			setError('');
			setToStorage("token", data.token);
			setIsLoggedIn(data.token);
			setToStorage("user", data.user);
			setUser(data.user);
            navigate("/app")
		},
		onError: (error) => {
			console.log(error);
            setError("Username/password is incorrect")
            fireSwalError(error.message);
			},
	});


    return (
        <Wrapper>
            <section>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        const { password, ...others } = values;
                        const data = { ...others, secret: password }
                        mutate(data);
                    }}
                >
                    {({
                        values,
                        handleSubmit,
                        handleChange,
                        handleBlur,
                        errors,
                        touched,
                    }) => (
                        <Form onSubmit={handleSubmit}>
                            <h2>Sign in</h2>
                    
                            <CustomInput
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                placeholder="Email"
                                type="email"
                                onBlur={handleBlur}
                                error={errors.email}
                                touched={touched.email}
                            />
                            <CustomInput
                                name="password"
                                value={values.password}
                                autoComplete="on"
                                onChange={handleChange}
                                placeholder="Password"
                                type="password"
                                onBlur={handleBlur}
                                error={errors.password}
                                touched={touched.password}
                            />

                            {error && <Error>{error}</Error>}
                            <Row>
                                <CustomInput
                                    name="remember"
                                    checked={values.remember}
                                    onChange={handleChange}
                                    type="checkbox"
                                    span={"Remember me"}
                                />
                            </Row>
                            <Button type="submit">
                                {loading ? <Loader /> : "Sign in"}
                            </Button>

                            <Text>Don't have an account?
                        <Link to="/register">  Sign up</Link>
                    </Text>

                        </Form>
                    )}
                </Formik>
                {/* <Form>
                    <h2>Sign In</h2>
                    <CustomInput type="email" placeholder="Email" required />
                    <CustomInput type="password" placeholder="Password" required />
                    <Button type="submit">Submit</Button>
                    <Text>Don't have an account?
                        <Link to="/register">  Sign up</Link>
                    </Text>
                </Form> */}

            </section>

        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    background: #fff;
    display: inline-block;
    position: relative;
    overflow: hidden;

    &:before,
    &:after {
    content: '';
    width: 0px;
    height: 0px;
    position: absolute;
    border-style: solid;
    }

    &:before {
        border-width: 200px;
        border-width: 200px;
        border-color: transparent #2b0548 #2b0548 transparent;
        bottom: 0px;
        right: 0px;

        @media (max-width: 900px) {
            border-width: 150px;
        }

        @media (max-width: 900px) {
            border-width: 120px;
        }
    }


    section {
        width: 100%;
        display: flex;
        height: 100%;
    }
`;

const Row = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	margin-bottom: 15px;
	margin-top: 10px;
	
	@media ${device.mobileS} {
		flex-direction: column;
		justify-content: initial;
		align-items: center;
		margin-bottom: 20px;
	}
`;

const Form = styled.form`
    width: 40%;
    margin: auto;
    background-color: #fafafa;
    padding: 30px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    
    @media (max-width: 900px) {
        width: 70%;
    }

    @media (max-width: 425px) {
        width: 95%;
    }

    h2 {
        text-align: center;
        margin-bottom: 1em;
        font-weight: 700;
        color: #2b0548;
    }

    div {
        @media (max-width: 345px) {
            width: 100%;
        }
    }
`;

const Error = styled.span`
	padding: 5px;
	color: #ff0000b8;
    font-weight: 900;
    font-size: 0.7em;
    text-align: center;
    display: flex;
    justify-content: center;
`

const Button = styled.button`
border: none;
display: flex;
margin: auto;
padding: 10px 30px;
font-weight: 800;
background-color: #2b0548;
color: wheat;
border-radius: 5px;
`;

const Text = styled.h6`
    font-size: 0.8em;
    color: #000;
    margin-top: 2em;
    text-align: center;


    a {
        text-decoration: none;
        color: rgb(43, 5, 72);
        font-weight: 600;

        &:hover {
            text-decoration: underline;
        }
    }
`;