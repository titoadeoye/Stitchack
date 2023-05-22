import React, { Suspense, useState, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from "styled-components";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import './App.css';
import { useMediaQuery } from "react-responsive";
import { Outlet } from 'react-router-dom';
import { Loader, SideNav, TopNav, PageWrapper } from './components';
import { device } from './constants';

// import Maintenance from "./pages/Maintenance/Maintenance";

const NoMatch = React.lazy(() => import('./pages/NoMatch/NoMatch'));
const Landing = React.lazy(() => import('./pages/Landing/Landing'));
const Login = React.lazy(() => import('./pages/Login'));
const Register = React.lazy(() => import('./pages/Register'));
const Home = React.lazy(() => import('./pages/Home'));
const Customers = React.lazy(() => import('./pages/Customers'));
const Orders = React.lazy(() => import('./pages/Orders'));
const AddCustomer = React.lazy(() => import('./pages/AddCustomer'));
const Catalogue = React.lazy(() => import('./pages/Catalogue'));
const Styles = React.lazy(() => import('./pages/Styles'));
const Fabric = React.lazy(() => import('./pages/Fabric'));



const GlobalStyle = createGlobalStyle`
    :root {
        --primaryColor: #141414,
        --black: #000000;
        // --white: #f6e5f7;
        --white: #ffffff;
        --grey: #AFAFAF;
        --value: 10px;
        font-size: 62.5%;
        // --background: linear-gradient(139.52deg, #6251C3 -73.08%, #A800AB 150.16%);
        --background: #141414;
        // --services: linear-gradient(90.32deg, #8F00FF 0.28%, rgba(143, 0, 255, 0) 99.72%), #764ABC;
        --services: #141414;
        // --reviews: linear-gradient(139.52deg, #6251C3 -73.08%, #A800AB 150.16%);
        --reviews: #141414;
        --secondaryColor: linear-gradient(139.52deg, #6251C3 -73.08%, #A800AB 150.16%);
    }

    html{
        font-size: 1.6rem;
    }

    @media ${device.laptop}{
        html{
            font-size: 10px;
        }
    }
    
    @media ${device.laptop}{
        html{
            font-size: 10px;
        }
    }

    /* Box sizing rules */
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    /* Remove default margin & padding */
    * {
        margin: 0;
        padding: 0;
        letter-spacing: 1.25px;
    }

    /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
    ul[role='list'],
    ol[role='list'] {
        list-style: none;
    }

    /* Set core root defaults */
    html:focus-within {
        scroll-behavior: smooth;
    }

    /* Set core body defaults */
    body {
        height: 100vh;
        text-rendering: optimizeSpeed;
    }

    /* Hide scrollbar for Chrome, Safari and Opera */
    *::-webkit-scrollbar {
        display: none;
    }

    * {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }

    #root {
        max-width: 100vw;
        margin-inline: auto;
        position: relative;
        height: 100vh;
        
    }

    h3 {
        font-weight: 700;
        text-transform: capitalize;
    }

    /* A elements that don't have a class get default styles */
    a:not([class]) {
        text-decoration-skip-ink: auto;
    }

    /* Make images easier to work with */
    img,
    picture {
        max-width: 100%;
        display: block;
    }

    /* Inherit fonts for inputs and buttons */
    input,
    button,
    textarea,
    select {
        font: inherit;
    }

    /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
    @media (prefers-reduced-motion: reduce) {
        html:focus-within {
            scroll-behavior: auto;
        }

        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }


    /*  */
    /*  */
    /* UTILITIES */
    .flex-align-center {
        display: flex;
        align-items: center;
    }

    .flex-justify-between {
        display: flex;
        justify-content: space-between;
    }

    .mr-auto {
        margin-right: auto !important;
    }

    .ml-auto {
        margin-left: auto !important;
    }
    
    .mt-auto {
        margin-top: auto !important;
    }

    .mx-auto {
        margin-inline: auto !important;
    }

    .color-grey {
        color: var(--grey) !important;
    }

    .color-white {
        color: var(--white) !important;
    }
    
    .color-black {
        color: var(--black) !important;
    }
    
    .color-primary {
        color: var(--primary-color) !important;
    }

    .mb-1 {
        margin-bottom: var(--value);
    }

    .mb-2 {
        margin-bottom: calc(var(--value) * 2);
    }

    .ml-2 {
        margin-left: calc(var(--value) * 2);
    }

    svg.color-white:hover{
        cursor: pointer;
    }

    .d-none{
        display: none;
    }

   @supports (-webkit-appearance: none) or (-moz-appearance: none) {

        input[type="checkbox"],
        input[type="radio"] {
            accent-color: var(--primary-color);
        }
    
    }
`;

function App() {
	const theme = useMemo(
	() => ({
			// colors
			black: "#000000",
			white: "#fff",
			grey: "#AFAFAF",
			red: "#D32600",
			//   primaryColor: "#A800AB",
			primaryColor: "#141414",
			//   background: "linear-gradient(139.52deg, #6251C3 -73.08%, #A800AB 150.16%)",
			background: "#141414",
			// services: "linear-gradient(90.32deg, #8F00FF 0.28%, rgba(143, 0, 255, 0) 99.72%), #764ABC",
			services: "#141414",
			// variable colors
			text: "#FFFFFF",
			secondaryColor: "linear-gradient(139.52deg, #6251C3 -73.08%, #A800AB 150.16%)",

			// variables
			sideBarWidth: "250px",
	}),
	[]
	);
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Router>
				<Suspense fallback={
					<PageWrapper>
							<Loader />
					</PageWrapper>
				}>

					<Routes>

						<Route path='/' element={<Landing />} />
						<Route path='register' element={<Register />} />
						<Route path='signin' element={<Login />} />
						<Route path='app' element={<PagesWrapper />}>
								<Route index element={<Home />} />
								<Route path="customers" >
										<Route index element={<Customers />} />
										<Route path="add" element={<AddCustomer />} />
								</Route>
								<Route path="catalogue" >
										<Route index element={<Catalogue />} />
										<Route path="styles" element={<Styles />} />
										<Route path="fabric" element={<Fabric />} />
								</Route>
								<Route path="orders" >
										<Route index element={<Orders />} />
										<Route path="add" element={<Orders />} />
								</Route>

						</Route>
						<Route path='*' element={<NoMatch />} />

					</Routes>
				</Suspense>
			</Router>
		</ThemeProvider>
	);
}

const PagesWrapper = () => {
    const isSmallDevice = useMediaQuery({ maxWidth: 768 });

    const [isSideNavOpen, setIsSideNavOpen] = useState(false);

    return (
        <Container isSmallDevice={isSmallDevice}>
            <TopNav isSmallDevice={isSmallDevice} setIsSideNavOpen={setIsSideNavOpen}
            />
            <SideNav
                isSideNavOpen={isSideNavOpen}
                setIsSideNavOpen={setIsSideNavOpen}
            />
            <Outlet />

        </Container>
    );
};

const Container = styled.div`
	height: 100vh;
    width: 100vw;
	overflow-y: scroll;

	@media (min-width: 1024px) {
		&::-webkit-scrollbar {
			display: none;
			width: 9px;

			&:hover {
				cursor: pointer;
			}
		}

		/* Track */
		&::-webkit-scrollbar-track {
			background: white;
			box-shadow: inset 0 0 5px grey;
			border-radius: 10px;
		}

		/* Handle */
		&::-webkit-scrollbar-thumb {
			background: ${(props) => props.theme.primaryColor};
		}
	}
`;

export default App;
