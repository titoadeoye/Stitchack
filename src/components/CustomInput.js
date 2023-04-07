import styled from "styled-components";
import { useState } from "react";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";

const CustomInput = (props) => {
	const [see, setSee] = useState(false);
	const { type, ...others } = props;
	if (type === "email") {
		return (
			<Wrapper>
				{others?.lefticon}
				<input type={type} {...others} />
			</Wrapper>
		)
	}
	if (type === "tel") {
		return (
			<Wrapper style={{ justifyContent: "space-around" }}>
				{others?.lefticon}
				<input type={type} {...others} />
			</Wrapper>
		)
	}


	if (type === "password") {
		return (
			<Wrapper className={others?.className}>
				{others?.lefticon}
				<input type={see ? "text" : "password"} {...others} />
				{see ? (
					<EyeOutlined
						size={22}
						className="color-white"
						onClick={() => setSee(false)}
					/>
				) : (
					<EyeInvisibleOutlined
						size={22}
						className="color-white"
						onClick={() => setSee(true)}
					/>
				)}
			</Wrapper>
		);
	}

	if (type === "checkbox") {
		return (
			<Label>
				<input type="checkbox" {...others} />
				<span style={{ marginLeft: 5 }}>{others?.span && others?.span}</span>
			</Label>
		);
	}


	if (type === "select") {
		return (
			<Wrapper>
				<select {...others}>
					{/* <option value="" label={others["placeholder"]} /> */}
					{
						others?.options &&
						others?.options.map(option => (
							<option value={option}>{option}</option>
						))
					}
				</select>
			</Wrapper>
		);
	}

	if (type === "date") {
		return (
			<Wrapper >
				<input type="date" {...others} />
			</Wrapper>
		)
	}

	if (type === "textarea") {
		return (
			<Wrapper >
				<input type="textarea" {...others} />
			</Wrapper>
		)
	}

	return (
		<Wrapper >
			{others?.lefticon}
			<input type="text" {...others} />
			{others?.rightText}
		</Wrapper>
	);

};


const Wrapper = styled.div`
	// --horizontal-padding: 20px;
	// --verical-padding: 9px;
	// --error-font-size: 1rem;
	// --border-width: 2px;

	display: flex;
	align-items: center;
	// padding: var(--verical-padding) var(--horizontal-padding);
	border-radius: 9.5px;
	position: relative;
    justify-content: center;
	background: white;
    margin: auto;
	margin-bottom: ${(props: any) => (props.error && props.touched ? 25 : 20)}px;
    // width: 20em;
	max-width: 20em;
    border: 1px solid #C5D8FF;

	.tel {
		margin-left: 1em;
		font-weight: 800;
	}


    svg {
            margin: 0 10px;
        }

	input[type="text"],
	input[type="email"],
	input[type="password"],
	input[type="tel"],
	input[type="date"] {
		border: none;
		outline: none;
		font-style: normal;
		font-weight: 700;
		font-size: 0.9em;
		flex: 1;
        margin: 0;
		letter-spacing: 1px;
		color: grey;
        height: 51px;
		padding: 0 1em;
		background-color: rgba(0, 87, 255, 0.02);
	}

	input[type="textarea"] {
		border: none;
		outline: none;
		font-style: normal;
		font-weight: 700;
		font-size: 1em;
		flex: 1;
        margin: 0;
		letter-spacing: 1px;
		color: grey;
        height: 180px;
		background-color: rgba(0, 87, 255, 0.02);
	}

	input[type="tel"] {
		margin-left: 1em;
	}

	input::placeholder {
		font-style: normal;
		font-weight: 700;
		font-size: 0.8rem;
		color: #aaa;
	}
	
	.right-text {
		color: #ccc;
		font-size: 0.6em;
		padding: 1em;
		font-weight: 600;
	}

	
	@media (max-width: 340px) {
		width: 17.7em;
	}

	// input:-webkit-autofill,
	// input:-webkit-autofill:hover,
	// input:-webkit-autofill:focus,
	// input:-webkit-autofill:active {
	// 	box-shadow: 0 0 0 30px black inset !important;
	// 	-webkit-text-fill-color: white !important;
	// }


	&.border-yellow {
		border: var(--border-width) solid
			${(props: any) =>
		props.error && props.touched
			? props.theme.red
			: props.theme.primaryColor};
	}

	&.short {
		width: max-content;
	}

	select {
		background-color: rgba(0, 87, 255, 0.02);
		border: none;
		margin: 0;
		width: 100%;
		font-family: inherit;
		cursor: inherit;
		color: ${(props) => props.theme.white};
		line-height: inherit;
		font-style: normal;
		font-weight: 700;
		font-size: 0.9em;
		padding: 0 1em;
		flex: 1;
        margin: 0;
		letter-spacing: 1px;
		color: grey;
		text-transformm: capitalize;
		z-index: 1;
		outline: none;
		height: 51px;
	}

	option {
		background-color: #fff;
		text-transform: capitalize;
	}

	&.nav {
		max-width: 400px;

		input[type="text"] {
			color: ${(props) => props.theme.grey};
		}

		@media (max-width: 786px) {
			max-width: 300px;
		}
	}

	&:after {
		content: "${(props: any) => props.touched && props.error}";
		color: ${(props) => props.theme.white};
		position: absolute;
		left: var(--horizontal-padding);
		bottom: calc((var(--error-font-size) + (var(--border-width) * 4)) * -1);
		font-size: 1rem;
	}
`;

const Label = styled.label`
	display: flex;
	align-items: center;
	font-style: normal;
	font-weight: 500;
	font-size: 1.4rem;
	line-height: 1.6rem;
	cursor: pointer;
	position: relative;
	text-align: center;

	&:after {
		color: red;
		position: absolute;
		left: 50%;
		bottom: -18px;
		font-size: 1rem;
		transform: translateX(-50%);
		width: 100%;
	}
`;
export default CustomInput;