import { Link } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import { UserOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { device } from "../constants";
import { BurgerIcon } from "../assets/svg";
import React from 'react';
import { useUserContext } from "../context/UserContext";

export default function TopNav ({ isSmallDevice, setIsOpenOverlay, setIsSideNavOpen }) {
	const {isLoggedIn } = useUserContext();

	return (
          <Nav id="topNav" isLoggedIn={!!isLoggedIn}>
			{isSmallDevice && (
				<BurgerIcon
					className="burger"
					onClick={() => {
						setIsSideNavOpen((prevState) => !prevState);
					}}
				/>
			)}
			

			<div className="ml-auto">
				{isSmallDevice && (
					<Profile onClick={() => {return;}}>
						<SearchOutlined size={24} className="color-black" />
					</Profile>
				)}
			</div>

			
			{/* {isLoggedIn && ( */}
				<Link to="/app">
					<Profile>
						<UserOutlined size={24} className="color-black" />
					</Profile>
				</Link>
			{/* )} */}
		</Nav>  
		
	);
};


const Nav = styled.nav`
	display: flex;
	align-items: center;
	padding: 20px 30px 20px;
	position: sticky;
	top: 0;
	left: 0;
	right: 0;
	transition: all 1s ease;
	z-index: 10;
    width: calc(100vw - ${props => props.theme.sideBarWidth});
    float: right;
    justify-content: space-between;
	// background: #fafafa;

    @media ${device.laptop} {
		width: calc(100vw - 175px);
	}

    @media ${device.isSmallDevice} {
        width: 100%;
		padding-inline: 10px;
    }

	.burger {
		margin-right: 10px;

		rect {
			fill: ${(props) => props.theme.primaryColor};
		}
	}
`;

const Profile = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.theme.primaryColor};
	padding: 7px;
	border-radius: 50%;
	margin-left: 10px;
	cursor: pointer;

    svg {
        color: ${props => props.theme.white};
    }
`;

