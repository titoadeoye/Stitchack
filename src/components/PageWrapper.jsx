import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { device } from "../constants";
import { useUserContext } from "../context/UserContext";

const PageWrapper = ({ children, ...others }) => {
	const { isLoggedIn } = useUserContext();
	const isSmallDevice = useMediaQuery({ maxWidth: 768 });

	return (
		<Wrapper
			isLoggedIn={!!isLoggedIn}
			isSmallDevice={isSmallDevice}
			{...others}
		>
			{children}
		</Wrapper>
	);
};

const Wrapper = styled.div`
	padding-inline: 30px;
	padding-bottom: 120px;
	margin-top: 100px;

	margin-left: ${(props) => {
		if (props.page === "landing" || props.isSmallDevice) {
			return 0;
		} else {
			return props.theme.sideBarWidth;
		}
	}};

	@media ${device.laptop} {
		margin-left: ${(props) => {
			if (props.page === "landing" || props.isSmallDevice) {
				return 0;
			} else {
				return "175px";
			}
		}};
	}
 
	@media ${device.isSmallDevice} {
		padding-inline: 10px;
	}

	@media ${device.tablet} {
		min-height: calc(100vh - 100px);
		padding-bottom: 100px;
	}
`;

export default PageWrapper;
