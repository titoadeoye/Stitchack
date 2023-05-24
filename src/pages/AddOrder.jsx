import styled from "styled-components";
import { PageWrapper } from "../components";
import { useState } from "react";
import Dropzone from 'react-dropzone';
import { device } from "../constants";


export default function AddOrder() {
    const [images, setImages] = useState([]);
    const [error, setError] = useState("");

    function addFiles(files) {
        if (files?.length > 2) {
            setError("Max file number is 2");
        } else {
            files?.map((file) => {
                const validFormat = ["image/png", "image/jpeg", "image/jpg"];
                const isFormatValid = validFormat.includes(file.type);
                const isSizeValid = file.size <= 512000;


                if (isFormatValid && isSizeValid && images?.length < 2) {
                    setError("");
                    setImages((prevState) => [...prevState, file]);
                } else if (!isSizeValid) {
                    setError("Max file size is 500kb");
                } else if (!isFormatValid) {
                    setError("Invalid file format");
                } else if (images?.length >= 1) {
                    setError("Max file number is 2");
                } else {
                    setError("Invalid file format");
                }

                return "";
            })
        }


    }

    return (
        <PageWrapper>
            <H3>Create order</H3>

            <Wrapper>
                <Input>
                    <Row>
                        <label htmlFor="name">customer name</label>
                        <input id="name" type="text" />
                    </Row>
                    <Row>
                        <label htmlFor="style">style</label>
                        <input id="style" type="select" />
                    </Row>
                    <Row>
                        <label htmlFor="qty">quantity</label>
                        <input id="qty" type="number" />
                    </Row>
                    <Row>
                        <label htmlFor="bill">bill</label>
                        <input id="bill" place />
                    </Row>
                    <Row>
                        <label htmlFor="down-payment">down payment</label>
                        <input id="down-payment" />
                    </Row>
                    <Row>
                        <label htmlFor="due">due date</label>
                        <input id="due" />
                    </Row>
                    <Row>
                        <label htmlFor="note">Note</label>
                        <Textarea id="note" placeholder="Type here..."></Textarea>
                    </Row>
                </Input>
                <Upload>
                    <ImageWrapper>
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
                                    <H3>Upload files</H3>
                                    <span>Max file size is 500kb. Supported file types are .jpg and .png</span>
                                    <div id="dropzone" className="dropzone" {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        <span>Drag and drop files here, or click to upload</span>
                                    </div>
                                    {error && <p className='error-msg'>{error}</p>}
                                </section>
                            )}
                        </Dropzone>
                        {images && (
                            <Images>
                                {
                                    images?.map((image, key) => {
                                        var imageUrl;
                                        const reader = new FileReader();
                                        reader.readAsDataURL(image);
                                        reader.onload = function (e) {
                                            imageUrl = e.target?.result;
                                            var element = document.getElementById(`prod-${key}`)
                                            if (element) {
                                                element.style.backgroundImage = `url(${imageUrl})`;
                                                element.classList.add("product_image");
                                            }
                                        };
                                        return (
                                            <div key={key} id={`prod-${key}`} >
                                            </div>
                                        )
                                    })
                                }
                            </Images>
                        )}
                    </ImageWrapper>
                    <Button>Start order</Button>
                </Upload>
            </Wrapper>
        </PageWrapper>
    )
}

const H3 = styled.h3`
    margin-bottom: 1.5em;
`;

const Row = styled.div`
    display: flex;
    gap: 20px;
    margin-bottom: 2em;
    align-items: center;

    @media (max-width: 500px) {
        gap: 10px;
    }

    input {
        width: 100%;
        margin-bottom: 1em;
        height: 40px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        outline: none;
        box-shadow: 2px 4px 8px 1px #eeeeee;
    } 

    input::placeholder {
        color: #ccc;
        font-weight: 700;
        font-size: 10px;
        text-transform: capitalize;
        line-height: 25px;
        margin: 0;
    }

    label {
        color: ${props => props.theme.primaryColor};
        font-weight: 600;
        font-size: 13px;
        text-transform: capitalize;
        margin: 0;
        min-width: 100px;
        width: 170px;

        @media (max-width: 500px) {
            width: 100px;
        }

        @media ${device.mobileM} {
            min-width: 80px;
            width: 80px;
        }
    }
`;

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    gap: 100px;

    @media ${device.isSmallDevice} {
        gap: 30px;
    }

    @media (max-width: 500px) {
        flex-direction: column;
    }
`;

const Upload = styled.div`
    width: 35%;
    display: flex;
    flex-direction: column;

    @media (max-width: 500px) {
        width: 100%;
    }
`;

const Input = styled.div`
    width: 65%;
    display: flex;
    flex-direction: column;

    @media (max-width: 500px) {
        width: 100%;
    }
`;

const Button = styled.button`
    height: 40px;
    width: 15em;
    margin: 2em 0;
    background: ${props => props.theme.primaryColor};
    color: ${props => props.theme.white};
    outline: none;
    border: none;
    border-radius: 5px;
    font-weight: 600;  
`;

const Textarea = styled.textarea`
    width: 100%;
    height: 100px;
    outline: none;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 2px 4px 8px 1px #eeeeee;

    &::placeholder {
        color: #ccc;
        font-weight: 700;
        font-size: 10px;
        text-transform: capitalize;
        line-height: 25px;
        margin: 0;
    }
`;

const ImageWrapper = styled.div`
    font-size: 10px;

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

const Images = styled.div`
    display: flex;
    flex-direction: column;

    .product_image {
        background-size: contain;
        background-repeat: no-repeat;
        width: 100%;
        height: 200px;
        margin: 0em;
        border-radius: 5px;
    }
`