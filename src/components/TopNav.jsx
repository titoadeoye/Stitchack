import { EditOutlined, LogoutOutlined, SearchOutlined } from "@ant-design/icons";
import { UserOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { device, logout } from "../constants";
import { BurgerIcon } from "../assets/svg";
import React, { useEffect } from 'react';
import { useUserContext } from "../context/UserContext";
import { NavDropdown } from "react-bootstrap";
import { getUser } from "../api/users";
import moment from "moment";
import { avatar } from "../assets";

export default function TopNav({ isSmallDevice, setIsOpenOverlay, setIsOpenModal, setIsSideNavOpen, setModalType }) {
	const { isLoggedIn, user, setUser } = useUserContext();
	// const {firstname, lastname, email, phoneNumber, dateCreated} = user && user;
	useEffect(() => {
		getUser(user?._id)
			.then(res => { setUser(res.data) })
	}, [user, setUser])

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
					<Profile onClick={() => { return; }}>
						<SearchOutlined size={24} className="color-black" />
					</Profile>
				)}
			</div>

			<Profile onClick={() => logout()}>
				<LogoutOutlined size={24} className="color-black" />
			</Profile>

			{/* {isLoggedIn && ( */}
			<NavDropdown title={
				<Profile>
					<UserOutlined size={24} className="color-black" />
				</Profile>
			} id="basic-nav-dropdown">
				<NavDropdown.Item className="dropdown-wrap" href="#">
					{user && (
						<User>
							<span>
								{user?.avatar ?
									<Avatar>
										<img src={user?.avatar} alt="avatar" />
										<EditOutlinedIcon onClick={() => { setIsOpenModal(true); setModalType("avatar") }} />
									</Avatar>
									: <Avatar>
										<img src={avatar} alt="avatar" />
										<EditOutlinedIcon onClick={() => { setIsOpenModal(true); setModalType("avatar") }} />
									</Avatar>
								}
							</span>
							<div>
								<h3>{user?.firstname} {user?.lastname}</h3>
								<p>{user?.email}</p>
								<p>{user?.phoneNumber}</p>
								<p>Started on {moment(user?.dateCreated).format("DD-MM-YY")}</p>

							</div>
						</User>
					)}
				</NavDropdown.Item>

			</NavDropdown>
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

	.dropdown-wrap {
		width: 300px;
		height: fit-content;
		h3 {
			font-size: 14px;
		}
		p {
			font-size: 12px;
			white-space: break-spaces;
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

const User = styled.div`
	display: flex;
	gap: 7px;
`;

const Avatar = styled.span`
	position: relative;

    img {
		width: 45px;
		height: 45px;
		border-radius: 50%;
		object-fit: cover;
		border: 1px solid #141414;
	}
`;

const EditOutlinedIcon = styled(EditOutlined)`
	position: absolute;
	bottom: 0;
	right: 5px;
    font-size: 17px;
	color: purple;
	cursor: pointer;
`;