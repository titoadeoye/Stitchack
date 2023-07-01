import { useState } from "react";
import styled from "styled-components";
import { fireSwalSuccess, fireSwalError } from "../constants";
import { useMutation } from "react-query";
import { Loader } from ".";
import * as Yup from "yup";
import "yup-phone-lite";
import { Formik } from "formik";
import { uploadAvatar } from "../api/users";
import { useUserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function UploadImage() {
    const [image, setImage] = useState("");
    const {user}  = useUserContext();
    const [isLoading, setIsLoading] = useState(false);
    const MAX_FILE_SIZE = 512000;
    const navigate = useNavigate();

    const { isLoading: loading, mutate } = useMutation(uploadAvatar, {
        onSuccess: (res) => {
            fireSwalSuccess("Avatar updated!")
        },
        onError: (error) => {
            fireSwalError(error.message);
        },
    });

    const validFileExtension = { image: ['jpg', 'png'] };

    function isValidFileType(name, type) {
        return name && validFileExtension[type].includes(name.slice(-3))
            || validFileExtension[type].includes(name.slice(-4))
    }

    function validateSize() {
        const fi = document.getElementById("file");
        if (fi.files.length > 0) {
            for (const i = 0; i <= fi.files.length - 1; i++) {
                let fsize = fi.files.item(i).size;
                let file = Math.round((fsize / 1024));
                // The size of the file.
                return file && file <= 512;
            }
        }
    }

    const initialValues = { file: "" }

    const validationSchema = Yup.object().shape({
        file: Yup
            .mixed()
            .required("Required")
        // .test("is-valid-type", "Not a valid image type",
        //     value => value && isValidFileType(value.toLowerCase(), "image")

        // )
        // .test("is-valid-size", "Max allowed size is 500kb",
        //     () => validateSize()
        // )
    });

    function convertToBase64(e) {
        
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
           // base64encoded string
            setImage(reader.result);
        };
        reader.onerror = error => {
            console.log(error, "Error")
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        if (image) {
            setIsLoading(true);
            var data = {image: image};
            uploadAvatar(user?._id, data)
            .then(res => {
                setIsLoading(false);
                fireSwalSuccess("Avatar updated");
                window.reload();
            })
            .catch((error) => {
                fireSwalError(error.message);
            })
         } else {
            setIsLoading(false);
        }
    }
    return (
        <Wrapper>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    // console.log(values)
                }}
            >
                {({
                    values,
                    handleChange,
                    handleBlur,
                    errors,
                    touched,
                }) => (
                    <Form onSubmit={(e) => handleSubmit(e)}>
                        <h3>Upload Image</h3>
                        {
                            image ? <img src={image} width={100} height={100} />
                                : <Padding></Padding>
                        }
                        <InputWrap error={errors.file}
                            touched={touched.file}>
                            <input
                                accept="image/*"
                                type="file"
                                id="file"
                                // value={values.file}
                                name="file"
                                // onChange={handleChange}
                                onChange={(e) => convertToBase64(e)}
                                onBlur={handleBlur}
                            />
                        </InputWrap>

                        <button className="primary" disabled={isLoading} type="submit">
                            {isLoading ? <Loader /> : "Submit"}
                        </button>

                    </Form>
                )}

            </Formik>

        </Wrapper>
    )
};

const InputWrap = styled.div`
	// --horizontal-padding: 20px;
	// --verical-padding: 9px;
	--error-font-size: 1rem;
	--border-width: 2px;

	display: flex;
	align-items: center;
	position: relative;
	margin-bottom: ${(props) => (props.error && props.touched ? 25 : 20)}px;
    width: 100%;
    height: 40px;
	
    input {
        width: 100%;
    margin-bottom: 0em;
    height: 40px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    position: relative;
    }
    

    &::placeholder {
        color: #ccc;
        font-weight: 700;
        font-size: 10px;
        text-transform: capitalize;
        line-height: 25px;
        margin: 0;
    }

    &:after {
		content: "${(props) => props.touched && props.error}";
		color: red;
		font-weight: 600;
		position: absolute;
		left: var(--horizontal-padding);
		bottom: calc((var(--error-font-size) + (var(--border-width) * 4)) * -1);
		font-size: 0.8rem;
		margin-bottom: 0.5em;
        width: 200px;
	}
	
`;

const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
        width: 230px;
        height: 230px;
        margin: 1em 0;
        border-radius: 50%;
    }

    button {
        height: 40px;
        width: 15em;
        background: ${props => props.theme.primaryColor};
        color: ${props => props.theme.white};
        outline: none;
        border: none;
        border-radius: 5px;
        font-weight: 600;  
        margin: 3em 0;
    }

    .primary {
        background: ${props => props.theme.secondaryColor};
    }

`

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

   
`;

const Padding = styled.div`
    padding: 3em 0;
`