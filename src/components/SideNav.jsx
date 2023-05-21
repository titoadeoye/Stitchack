import { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
	device,
	deviceHeight,
} from "../constants";
import { AccountBookOutlined, BookOutlined, FolderAddOutlined, FolderOutlined, LogoutOutlined, SettingOutlined, WindowsOutlined } from "@ant-design/icons";
import { logo } from "../assets";

const SideNav = ({ isSideNavOpen, setIsSideNavOpen }) => {

	const ref = useRef(null);
	const isSmallDevice = useMediaQuery({ maxWidth: 768 });
	const navigate = useNavigate();
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (ref.current && !ref.current.contains(event.target)) {
				setIsSideNavOpen(false);
			}
		};
		document.addEventListener("click", handleClickOutside, true);
		document.addEventListener("scroll", handleClickOutside, true);

		return () => {
			document.removeEventListener("click", handleClickOutside, true);
			document.removeEventListener("scroll", handleClickOutside, true);
		};
	}, [setIsSideNavOpen]);


	return (
		<>

			<Nav
				isSmallDevice={isSmallDevice}
				isSideNavOpen={isSideNavOpen}
				ref={ref}
			>
				<img src={logo} onClick={() => navigate("/app")} alt="logo" />
				<NavItems role="list">
					<NavLink to="/app">
						<NavItem>
							<WindowsOutlined />
							Dashboard
						</NavItem>
					</NavLink>
					<NavLink to="/app/customers">
						<NavItem>
							<FolderOutlined />
							Customers
						</NavItem>
					</NavLink>
					<NavLink to="/app/orders">
						<NavItem>
							<AccountBookOutlined />
							Orders
						</NavItem>
					</NavLink>
					<NavLink to="/app">
						<NavItem>
							<FolderAddOutlined />
							Add Tasks
						</NavItem>
					</NavLink>
					<NavLink to="/app">
						<NavItem>
							<BookOutlined />
							Catalogue
						</NavItem>
					</NavLink>
					<NavLink to="/app">
						<NavItem>
							<SettingOutlined />
							Settings
						</NavItem>
					</NavLink>
				</NavItems>
				<Logout><LogoutOutlined />Log out</Logout>
			</Nav>



		</>
	);
};


const Nav = styled.nav`
	position: fixed;
	width: ${(props) => props.theme.sideBarWidth};
	background-color: #141414;
	// background: linear-gradient(139.52deg, #6251C3 -73.08%, #A800AB 150.16%);
	height: 100vh;
	overflow: scroll;
	z-index: 5;
	padding-left: 30px;
	padding-block: 10px;


	@media ${device.laptop} {
		width: 175px;
	}

	@media ${device.tablet} {
		border-right: none !important;
		${(props) =>
		props.isSmallDevice && props.isSideNavOpen
			? "transform:translateX(0%);"
			: "transform:translateX(-100%);"}
	}
`;

const NavItems = styled.ul`
	margin-top: 25px;
	padding: 0;

	a {
		text-decoration: none;
		color: inherit;
	}
`;


const NavItem = styled.li`
	display: flex;
	color: ${(props) => props.theme.white};
	font-style: normal;
	font-weight: 700;
	font-size: 1.3rem;
	align-items: center;
	padding-block: 30px 0;

	svg {
		margin-right: 10px;
		width: 25px;
		height: 20px;
	}

	path {
		fill: ${(props) => props.theme.white};
	}

	&:hover {
	color: white;
		path {
			fill: white;
		}
	}

	@media ${deviceHeight.mid} {
		padding-block: 20px 0;
		font-size: 1.25rem;
	}

`;

const Logout = styled.p`
		color: ${(props) => props.theme.white};
		font-style: normal;
		font-weight: 700;
		font-size: 1.3rem;
		align-items: center;
		padding-block: 20px;
		position: absolute;
		bottom: 30px;
		cursor: pointer;

		svg {
			margin-right: 10px;
			width: 25px;
			height: 20px;
		}

		path {
			fill: ${(props) => props.theme.white};
		}
`



export default SideNav;
