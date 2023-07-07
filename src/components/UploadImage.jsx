import { useState } from "react";
import styled from "styled-components";
import { fireSwalSuccess, fireSwalError } from "../constants";
import { Loader } from ".";
import { uploadAvatar } from "../api/users";
import { useUserContext } from "../context/UserContext";
import Dropzone from 'react-dropzone';

export default function UploadImage() {
    const [image, setImage] = useState("");
    const { user } = useUserContext();
    const [isLoading, setIsLoading] = useState(false);
    const MAX_FILE_SIZE = 25600;
    const [error, setError] = useState("");

    function convertToBase64(file) {

        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
           // base64encoded string
            setImage(reader.result);
        };
        reader.onerror = error => {
            console.log(error, "Error")
        }
    }

    function addFiles(files) {
        if (files?.length > 1) {
            setError("Max file number is 1");
        } 

         var file = files[0];
        const validFormat = ["image/png", "image/jpeg", "image/jpg"];
        const isFormatValid = validFormat.includes(file.type);
        const isSizeValid = file.size <= MAX_FILE_SIZE;


        if (isFormatValid && isSizeValid) {
            setError("");
            convertToBase64(file);
        } else if (!isSizeValid) {
            setError("Max file size is 25kb");
        } else if (!isFormatValid) {
            setError("Invalid file format");
        }

        return;
    }

    function handleSubmit(e) {
        setIsLoading(true);
        e.preventDefault(); 
        uploadAvatar(user?._id, {image: image})
        .then(res => {
            setIsLoading(false);   
            fireSwalSuccess(res.message);
            setImage("");
        })
        .catch(err => { setIsLoading(false); fireSwalError(err.message)})
    }
    return (
        <Wrapper>
            <Form onSubmit={(e) => {handleSubmit(e) }}>
                <h3>Upload Image</h3>
                {
                    image ? <img src={image} alt="avatar" width={100} height={100} />
                        : <Padding></Padding>
                }
                <Box>
                    <Dropzone onDrop={files => addFiles(files)}
                        onDragOver={() => {
                            var element = document.getElementById(`dropzone`)
                            if (element) {
                                element.classList.add("drag");
                            }
                        }}
                        onDragLeave={() => {
                            var element = document.getElementById(`dropzone`)
                            if (element) {
                                element.classList.remove("drag");
                            }
                        }}
                        onDropAccepted={() => {
                            var element = document.getElementById(`dropzone`)
                            if (element) {
                                element.classList.remove("drag");
                            }
                        }}
                        onDropRejected={() => {
                            setError("Something went wrong. Try again")
                        }}
                    >
                        {({ getRootProps, getInputProps }) => (
                            <section >
                                <span>Max file size is 25kb. Supported file types are .jpg and .png</span>
                                <div id="dropzone" className="dropzone" {...getRootProps()}>
                                    <input {...getInputProps()} />
                                    <span>Drag and drop files here, or click to upload</span>
                                </div>
                                {error && <p className='error-msg'>{error}</p>}
                            </section>
                        )}
                    </Dropzone>

                </Box>

                <button className="primary" disabled={!image} type="submit">
                    {isLoading ? <Loader /> : "Submit"}
                </button>

            </Form>
        </Wrapper>
    )
};

const Box = styled.div`
    // font-size: 10px;

    .dropzone {
        background-color: #fafafa;
        width: 100%;
        padding: 20px;
        text-align: center;
        font-weight: 600;
        margin: 1em 0;
    }

    .drag {
        border: 5px dashed ${props => props.theme.primaryColor};
        filter: contrast(0.9);
        background: white;
    }

    .error-msg {
        font-size: 0.9em;
        font-weight: 700;
        color: red;
        text-align: left;
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