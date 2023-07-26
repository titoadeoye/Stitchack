import styled from "styled-components";
import { Loader, PageWrapper } from "../components";
import { useState } from "react";
import Dropzone from "react-dropzone";
import { device, fireSwalError, fireSwalSuccess } from "../constants";
import * as Yup from "yup";
import "yup-phone-lite";
import { Formik } from "formik";
import { addOrder } from "../api/orders";
import { useUserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function AddOrder() {
  const { user } = useUserContext();
  const navigate = useNavigate();
  const [styleImage, setStyleImage] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const MAX_FILE_SIZE = 25600;

  const initialValues = {
    name: "",
    email: "",
    address: "",
    note: "",
    dueDate: "",
    status: "",
    bill: "",
    paid: "",
    styleName: "",
    cid: ""
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Please enter customer name"),
    address: Yup.string(),
    email: Yup.string().email("Please enter a valid email"),
    dueDate: Yup.date().required("Please enter due date"),
    status: Yup.string().required("Please enter status"),
    styleName: Yup.string(),
    styleImage: Yup.string(),
    bill: Yup.number().required("Please enter bill"),
    paid: Yup.number().min(0, "Min amount is 0")
  });

  function convertToBase64(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      // base64encoded string
      setStyleImage(reader.result);
    };
    reader.onerror = (error) => {
      console.log(error, "Error");
    };
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

  return (
    <PageWrapper>
      <H3>Create order</H3>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          setIsLoading(true);
          const data = { styleImage, ...values };
          addOrder(user?._id, data)
            .then((res) => {
              setIsLoading(false);
              fireSwalSuccess("Order list has been updated");
              navigate("/app/orders");
            })
            .catch((error) => {
              setIsLoading(false);
              fireSwalError(error.message);
            });
        }}
      >
        {({
          values,
          handleSubmit,
          handleChange,
          handleBlur,
          errors,
          touched
        }) => (
          <form onSubmit={handleSubmit}>
            <Wrapper>
              <Input>
                <Row>
                  <label htmlFor="name">customer name</label>
                  <InputWrap error={errors.name} touched={touched.name}>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </InputWrap>
                </Row>
                <Row>
                  <label htmlFor="address">Address</label>
                  <input
                    id="address"
                    type="text"
                    name="address"
                    value={values.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Row>
                <Row>
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Row>
                <Row>
                  <label htmlFor="status">Status</label>
                  <InputWrap error={errors.status} touched={touched.status}>
                    <select
                      id="status"
                      type="select"
                      name="status"
                      value={values.status}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option value="">Choose status</option>
                      <option value="Completed">Completed</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Not started">Not started</option>
                    </select>
                  </InputWrap>
                </Row>
                <Row>
                  <label htmlFor="bill">bill</label>
                  <InputWrap error={errors.bill} touched={touched.bill}>
                    <input
                      id="bill"
                      type="text"
                      name="bill"
                      value={values.bill}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </InputWrap>
                </Row>
                <Row>
                  <label htmlFor="paid">down payment</label>
                  <input
                    id="paid"
                    type="text"
                    name="paid"
                    value={values.paid}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Row>
                <Row>
                  <label htmlFor="dueDate">due date</label>
                  <InputWrap error={errors.dueDate} touched={touched.dueDate}>
                    <input
                      id="dueDate"
                      type="date"
                      name="dueDate"
                      value={values.dueDate}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </InputWrap>
                </Row>
                <Row>
                  <label htmlFor="styleName">Style name</label>
                  <input
                    id="styleName"
                    type="text"
                    name="styleName"
                    value={values.styleName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Row>
                <Row>
                  <label htmlFor="note">Note</label>
                  <Textarea
                    id="note"
                    placeholder="Type here..."
                    name="note"
                    value={values.note}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></Textarea>
                </Row>
              </Input>
              <Upload>
                <ImageWrapper>
                  <Dropzone
                    onDrop={(files) => addFiles(files)}
                    onDragOver={() => {
                      var element = document.getElementById(`dropzone`);
                      if (element) {
                        element.classList.add("drag");
                      }
                    }}
                    onDragLeave={() => {
                      var element = document.getElementById(`dropzone`);
                      if (element) {
                        element.classList.remove("drag");
                      }
                    }}
                    onDropAccepted={() => {
                      var element = document.getElementById(`dropzone`);
                      if (element) {
                        element.classList.remove("drag");
                      }
                    }}
                    onDropRejected={() => {
                      setError("Something went wrong. Try again");
                    }}
                  >
                    {({ getRootProps, getInputProps }) => (
                      <section>
                        <span>
                          Max file size is 25kb. Supported file types are .jpg
                          and .png
                        </span>
                        <div
                          id="dropzone"
                          className="dropzone"
                          {...getRootProps()}
                        >
                          <input {...getInputProps()} />
                          <span>
                            Drag and drop files here, or click to upload
                          </span>
                        </div>
                        {error && <p className="error-msg">{error}</p>}
                      </section>
                    )}
                  </Dropzone>
                  {styleImage && (
                    <Images>
                      {styleImage && (
                        <img
                          src={styleImage}
                          alt="avatar"
                          width={100}
                          height={100}
                        />
                      )}
                    </Images>
                  )}
                </ImageWrapper>
                <Button>{isLoading ? <Loader /> : "Start order"}</Button>
              </Upload>
            </Wrapper>
          </form>
        )}
      </Formik>
    </PageWrapper>
  );
}

const H3 = styled.h3`
  margin-bottom: 1.5em;
`;

const InputWrap = styled.div`
  // --horizontal-padding: 20px;
  // --verical-padding: 9px;
  --error-font-size: 1rem;
  --border-width: 2px;

  display: flex;
  align-items: center;
  position: relative;
  //   margin-bottom: ${(props) => (props.error && props.touched ? 25 : 20)}px;
  width: 100%;

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

const Row = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 2em;
  align-items: center;
  --error-font-size: 1rem;
  --border-width: 2px;

  @media (max-width: 500px) {
    gap: 10px;
  }

  input,
  select {
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
    color: ${(props) => props.theme.primaryColor};
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
  background: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.white};
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
    border: 5px dashed ${(props) => props.theme.primaryColor};
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
`;
