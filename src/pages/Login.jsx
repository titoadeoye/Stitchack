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
            error.message ? setError(error.message) : setError("Username/password is incorrect")
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
                            <Button type="submit" disabled={loading}>
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
        border-width: 150px;
        // border-color: transparent #2b0548 #2b0548 transparent;
        border-color: transparent #141414 #141414 transparent;
        bottom: 0px;
        right: 0px;
        
        @media (min-width: 1600px) {
			border-width: 10vw;
		}

        @media (max-width: 900px) {
            border-width: 100px;
        }

        @media ${device.mobileL} {
            display: none;
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

    @media (min-width: 1600px) {
        width: 50%;
        padding: 3vw;
    }

    h2 {
        text-align: center;
        margin-bottom: 1em;
        font-weight: 700;
        color: #141414;
        text-shadow: 0 0 1px #141414;

        @media (min-width: 1600px) {
			font-size: 2.5vw;
			margin-bottom: 2vw;
		}
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

    @media (min-width: 1600px) {
        font-size: 1vw;
    }
`

const Button = styled.button`
    border: none;
    display: flex;
    margin: auto;
    padding: 10px 30px;
    font-weight: 800;
    background-color: #141414;
    color: white;
    border-radius: 5px;

    @media (min-width: 1600px) {
        padding: 0;
        height: 5vh;
        width: 30%;
        font-size: 1.3vw;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0.5vw;
    }
`;

const Text = styled.h6`
    font-size: 12px;
    color: #000;
    margin-top: 2em;
    text-align: center;

    @media (min-width: 1600px) {
        font-size: 1vw;
        margin-top: 2vw;
    }

    a {
        text-decoration: none;
        color: rgb(43, 5, 72);
        font-weight: 600;
        font-size: 12px;

        @media (min-width: 1600px) {
            font-size: 1.1vw;
            margin-top: 2vw;
        }

        &:hover {
            text-decoration: underline;

            @media (min-width: 1600px) {
                font-size: 1.1vw;
                margin-top: 2vw;
            }
        }
    }
`;