import { editMeasurements } from "../api/users";
import { Loader, PageWrapper } from "../components";
import styled from "styled-components";
import { device, fireSwalError, fireSwalSuccess } from "../constants";
import * as Yup from "yup";
import "yup-phone-lite";
import { Formik } from "formik";
import { useUserContext } from "../context/UserContext";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

export default function EditMeasurements() {
  const { user } = useUserContext();
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const { customer } = location?.state && location?.state;
  
//   useEffect(() => {
//     navigate("/app/customers")
//   }, !customer);

  const {
    firstname,
    lastname,
    gender,
    address,
    measurements,
    cid,
    email,
    note,
    phoneNumber,
  } = customer;

  const initialValues = {
    firstname: firstname,
    lastname: lastname,
    email: email,
    phoneNumber: phoneNumber,
    address: address,
    gender: gender,
    note: note,
    neck: measurements.neck,
    shoulder: measurements.shoulder,
    chest: measurements.chest,
    topLength: measurements.topLength,
    bust: measurements.bust,
    thigh: measurements.thigh,
    trouserLength: measurements.trouserLength,
    hip: measurements.hip,
    fullLength: measurements.fullLength,
    skirtLength: measurements.skirtLength,
    armWidth: measurements.armWidth,
    waist: measurements.waist,
    cid: cid
  };

  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required("Please enter your first name"),
    lastname: Yup.string().required("Please enter your last name"),
    address: Yup.string().required("Please enter your address"),
    gender: Yup.string().required("Please select your gender"),
    phoneNumber: Yup.string().required("Please enter your phone number"),
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Please enter your email"),
    neck: Yup.number().max(500, "Max is 500cm"),
    shoulder: Yup.number().max(500, "Max is 500cm"),
    chest: Yup.number().max(500, "Max is 500cm"),
    topLength: Yup.number().max(500, "Max is 500cm"),
    bust: Yup.number().max(500, "Max is 500cm"),
    thigh: Yup.number().max(500, "Max is 500cm"),
    trouserLength: Yup.number().max(500, "Max is 500cm"),
    hip: Yup.number().max(500, "Max is 500cm"),
    fullLength: Yup.number().max(500, "Max is 500cm"),
    skirtLength: Yup.number().max(500, "Max is 500cm"),
    armWidth: Yup.number().max(500, "Max is 500cm"),
    waist: Yup.number().max(500, "Max is 500cm")
  });

  return (
    <PageWrapper>
      <H3>customer</H3>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          setIsLoading(true);
          const {
            neck,
            shoulder,
            chest,
            topLength,
            bust,
            thigh,
            trouserLength,
            hip,
            fullLength,
            skirtLength,
            armWidth,
            waist, 
            cid
          } = values;
          const data = {
            measurements: {
              neck,
              shoulder,
              chest,
              topLength,
              bust,
              thigh,
              trouserLength,
              hip,
              fullLength,
              skirtLength,
              armWidth,
              waist
            },
            cid
          };
          // mutate(user?._id, data);
            editMeasurements(user?._id, data)
              .then((res) => {
                setIsLoading(false);
                fireSwalSuccess("Customer list has been updated");
                navigate(`/app/customers`);
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
              <Row>
                <InputWrap error={errors.firstname} touched={touched.firstname}>
                  <input
                    name="firstname"
                    value={values.firstname}
                    onBlur={handleBlur}
                    error={errors.firstname}
                    touched={touched.firstname}
                    type="text"
                    disabled
                  />
                </InputWrap>

                <InputWrap error={errors.lastname} touched={touched.lastname}>
                  <input
                    name="lastname"
                    value={values.lastname}
                    onBlur={handleBlur}
                    error={errors.lastname}
                    touched={touched.lastname}
                    type="text"
                    disabled
                  />
                </InputWrap>
              </Row>
              <Row>
                <InputWrap error={errors.email} touched={touched.email}>
                  <input
                    type="email"
                    name="email"
                    disabled                    
                    value={values.email}
                    onBlur={handleBlur}
                    error={errors.email}
                    touched={touched.email}
                  />
                </InputWrap>

                <InputWrap
                  error={errors.phoneNumber}
                  touched={touched.phoneNumber}
                >
                  <input
                    name="phoneNumber"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.phoneNumber}
                    touched={touched.phoneNumber}
                    type="text"
                    disabled                  />
                </InputWrap>
              </Row>
              <InputWrap error={errors.address} touched={touched.address}>
                <input
                  type="text"
                  name="address"
                  disabled
                  value={values.address}
                  onBlur={handleBlur}
                  error={errors.address}
                  touched={touched.address}
                />
              </InputWrap>

              <br />
              <div style={{ display: "flex", alignItems: "center" }}>
                <InputWrap error={errors.gender} touched={touched.gender}>
                  <p>Gender:</p>
                  <input
                    className="gender"
                    type="text"
                    name="gender"
                    value={values.gender}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.gender}
                    touched={touched.gender}
                  />
                  </InputWrap>
              </div>
            </Wrapper>
            <H3>Measurement (cm)</H3>

            <Wrapper>
              <Measurement>
                <InputWrap error={errors.neck} touched={touched.neck}>
                  <input
                    type="text"
                    placeholder="neck"
                    name="neck"
                    value={values.neck}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </InputWrap>

                <InputWrap error={errors.shoulder} touched={touched.shoulder}>
                  <input
                    type="text"
                    placeholder="shoulder"
                    name="shoulder"
                    value={values.shoulder}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </InputWrap>

                <InputWrap error={errors.chest} touched={touched.chest}>
                  <input
                    type="text"
                    placeholder="chest"
                    name="chest"
                    value={values.chest}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </InputWrap>
              </Measurement>
              <Measurement>
                <InputWrap error={errors.topLength} touched={touched.topLength}>
                  <input
                    type="text"
                    placeholder="top length"
                    name="topLength"
                    value={values.topLength}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </InputWrap>

                <InputWrap error={errors.bust} touched={touched.bust}>
                  <input
                    type="text"
                    placeholder="bust"
                    name="bust"
                    value={values.bust}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </InputWrap>

                <InputWrap error={errors.thigh} touched={touched.thigh}>
                  <input
                    type="text"
                    placeholder="thigh"
                    name="thigh"
                    value={values.thigh}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </InputWrap>
              </Measurement>
              <Measurement>
                <InputWrap
                  error={errors.trouserLength}
                  touched={touched.trouserLength}
                >
                  <input
                    type="text"
                    placeholder="trouser length"
                    name="trouserLength"
                    value={values.trouserLength}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </InputWrap>

                <InputWrap error={errors.hip} touched={touched.hip}>
                  <input
                    type="text"
                    placeholder="hip"
                    name="hip"
                    value={values.hip}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </InputWrap>

                <InputWrap
                  error={errors.fullLength}
                  touched={touched.fullLength}
                >
                  <input
                    type="text"
                    placeholder="full length"
                    name="fullLength"
                    value={values.fullLength}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </InputWrap>
              </Measurement>

              <Measurement>
                <InputWrap
                  error={errors.skirtLength}
                  touched={touched.skirtLength}
                >
                  <input
                    type="text"
                    placeholder="skirt length"
                    name="skirtLength"
                    value={values.skirtLength}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </InputWrap>

                <InputWrap error={errors.armWidth} touched={touched.armWidth}>
                  <input
                    type="text"
                    placeholder="arm width"
                    name="armWidth"
                    value={values.armWidth}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </InputWrap>

                <InputWrap error={errors.waist} touched={touched.waist}>
                  <input
                    type="text"
                    placeholder="waist"
                    name="waist"
                    value={values.waist}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </InputWrap>
              </Measurement>
            </Wrapper>

            <H3>Note</H3>
            <Textarea
              disabled
              name="note"
              note={values.note}
              onChange={handleChange}
              onBlur={handleBlur}
            >{note && note}</Textarea>
            <br />

            <Button>
              <button type="submit" disabled={isLoading}>
                {isLoading ? <Loader /> : "Save"}
              </button>
            </Button>
          </form>
        )}
      </Formik>
    </PageWrapper>
  );
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
  --error-font-size: 1rem;
  --border-width: 2px;

  input[type="radio"] {
    height: fit-content;
  }

  .gender {
    margin: 0;
    width: auto;
  }

  p {
    color: ${(props) => props.theme.primaryColor};
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

  @media ${device.mobileM} {
    flex-direction: column;
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
    background: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.white};
    outline: none;
    border: none;
    border-radius: 5px;
    font-weight: 600;
  }
`;

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
