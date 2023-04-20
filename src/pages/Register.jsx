import styled from "styled-components";
import { CustomInput, Loader } from "../components";
import { Link, useNavigate } from "react-router-dom";
import { fireSwalError } from "../constants";
import { signUp } from "../api/auth";
import { useMutation } from "react-query";
import * as Yup from "yup";
import "yup-phone-lite";
import { Formik } from "formik";


export default function Register() {
    const navigate = useNavigate();
    const { isLoading: loading, mutate } = useMutation(signUp, {
        onSuccess: () => {
            navigate("/signin");
        },
        onError: (error) => {
            fireSwalError(error.message);
        },
    });

    const initialValues = {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        iAgree: false,
    };
    const validationSchema = Yup.object().shape({
        firstname: Yup.string().required("Please enter your first name"),
        lastname: Yup.string().required("Please enter your last name"),
        email: Yup.string()
            .email("Please enter a valid email")
            .required("Please enter your email"),
        password: Yup.string()
            .required("Please enter your password")
            .matches(
                "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})",
                "Your password isn't strong enough"
            ),
        iAgree: Yup.boolean()
            .required("The terms and conditions must be accepted.")
            .oneOf([true], "You need to agree with our T&Cs"),
    });


    return (
        <>
            <Wrapper>
                <section>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            const {password, ...others} = values;
                            const data = {...others, secret: password, phoneNumber: "0000000000"}
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
                                <h2>Sign Up</h2>
                                <CustomInput
                                    name="firstname"
                                    value={values.firstname}
                                    onChange={handleChange}
                                    placeholder="First name"
                                    onBlur={handleBlur}
                                    error={errors.firstname}
                                    touched={touched.firstname}
                                />
                                <CustomInput
                                    name="lastname"
                                    value={values.lastname}
                                    onChange={handleChange}
                                    placeholder="Last Name"
                                    onBlur={handleBlur}
                                    error={errors.lastname}
                                    touched={touched.lastname}
                                />
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
                                {touched.password && errors.password ? (
                                    <Row>
                                        <span>Passwords must have: </span>
                                        <span className="purple">
                                            8 characters, one digit and one symbol.
                                        </span>
                                    </Row>
                                ) : null}

                                <CustomInput
                                    name="iAgree"
                                    checked={values.iAgree}
                                    onChange={handleChange}
                                    type="checkbox"
                                    span={
                                        <>
                                            I agree with <Link to="/privacyPolicy" target="_blank">privacy</Link> and{" "}
                                            <Link to="/privacyPolicy" target="_blank">policy</Link>
                                        </>
                                    }
                                    onBlur={handleBlur}
                                    error={errors.iAgree}
                                    touched={touched.iAgree}
                                    className="policy"
                                />
                                <Button type="submit">
                                    {loading ? <Loader /> : "Sign up"}
                                </Button>

                                <Text>Already have an account?
                                    <Link to="/signin">  Sign in</Link>
                                </Text>

                            </Form>
                        )}
                    </Formik>
                </section>
            </Wrapper>
        </>

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

const Row = styled.div`
	width: 100%;
	margin-bottom: 20px;
	text-align: center;


	> * {
		font-style: normal;
		font-weight: 500;
		font-size: 0.8rem;
	}

	.purple {
		color: #2b0548;
        font-weight: 600;
	}
`;