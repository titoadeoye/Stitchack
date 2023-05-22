import styled, { keyframes } from "styled-components";

const Loader = () => {
	return <Preloader />;
};

export default Loader;

const btnLoader = keyframes`
  from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

const Preloader = styled.span`
	aspect-ratio: 1;
	height: 25px;
	display: inline-block;
	padding: 0px;
	border-radius: 100%;
	border: 2px solid;
	border-top-color: rgba(20, 20, 20, 1);
	border-bottom-color: rgba(20, 20, 20, 0.15);
	border-left-color: rgba(20, 20, 20, 1);
	border-right-color: rgba(20, 20, 20, 0.15);
	-webkit-animation: ${btnLoader} 0.8s linear infinite;
	animation: ${btnLoader} 0.8s linear infinite;
`;
