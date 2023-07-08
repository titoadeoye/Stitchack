import React, { Suspense, useState, useMemo, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import './App.css';
import { useMediaQuery } from "react-responsive";
import { Outlet } from 'react-router-dom';
import { ModalGroup, SideNav, TopNav, PageLoader } from './components';
import { device } from './constants';
import { useUserContext } from './context/UserContext';
import { useModalContext } from './context/ModalContext';
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
const Customer = React.lazy(() => import('./pages/Customer'));
const AddOrder = React.lazy(() => import('./pages/AddOrder'));
const StyleDataPages = React.lazy(() => import('./pages/StyleDataPages'));
const FabricDataPages = React.lazy(() => import('./pages/FabricDataPages'));


const GlobalStyle = createGlobalStyle`
    :root {
        --primaryColor: #141414,
        --black: #000000;
        // --white: #f6e5f7;
        --white: #ffffff;
        --grey: #AFAFAF;
        --value: 10px;
        font-size: 62.5%;
        --background: #141414;
        --services: #141414;
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
            black: "#000000",
            white: "#fff",
            grey: "#AFAFAF",
            red: "#D32600",
            primaryColor: "#141414",
            background: "#141414",
            services: "#141414",
            text: "#FFFFFF",
            secondaryColor: "linear-gradient(139.52deg, #6251C3 -73.08%, #A800AB 150.16%)",

            // variables
            sideBarWidth: "250px",
        }),
        []
    );
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <GlobalStyle />
                <Suspense fallback={
                    <Wrapper>
                        <PageLoader />
                    </Wrapper>
                }>

                    <Routes>

                        <Route path='/' element={<Landing />} />
                        <Route path='register' element={<Register />} />
                        <Route path='signin' element={<Login />} />
                        <Route path='*' element={<NoMatch />} />


                        <Route path='app' element={<PagesWrapper />}>
                            <Route index element={<Home />} />
                            <Route path="customers" >
                                <Route index element={<Customers />} />
                                <Route path="add" element={<AddCustomer />} />
                            </Route>
                            <Route path="customer/:id" element={<Customer />} />
                            <Route path="catalogue" >
                                <Route index element={<Catalogue />} />
                                <Route path="styles" >
                                    <Route index element={<Styles />} />
                                    <Route path="ankara" element={<StyleDataPages type="ankara" />} />
                                    <Route path="blouse" element={<StyleDataPages type="blouse" />} />
                                    <Route path="trouser" element={<StyleDataPages type="trouser" />} />
                                    <Route path="skirt" element={<StyleDataPages type="skirt" />} />
                                    <Route path="top" element={<StyleDataPages type="top" />} />
                                    <Route path="wedding" element={<StyleDataPages type="wedding" />} />
                                    <Route path="black-dress" element={<StyleDataPages type="black-dress" />} />
                                    <Route path="two-piece" element={<StyleDataPages type="two-piece" />} />
                                </Route>
                                <Route path="fabric" >
                                    <Route index element={<Fabric />} />
                                    <Route path="lace" element={<FabricDataPages type="lace" />} />
                                    <Route path="satin" element={<FabricDataPages type="satin" />} />
                                    <Route path="silk" element={<FabricDataPages type="silk" />} />
                                    <Route path="crepe" element={<FabricDataPages type="crepe" />} />
                                    <Route path="lycra" element={<FabricDataPages type="lycra" />} />
                                    <Route path="chiffon" element={<FabricDataPages type="chiffon" />} />
                                    <Route path="damask" element={<FabricDataPages type="damask" />} />
                                    <Route path="ankara" element={<FabricDataPages type="ankara" />} />
                                    <Route path="denim" element={<FabricDataPages type="denim" />} />
                                    <Route path="velvet" element={<FabricDataPages type="velvet" />} />
                                    <Route path="cotton" element={<FabricDataPages type="cotton" />} />
                                    <Route path="linen" element={<FabricDataPages type="linen" />} />
                                </Route>
                            </Route>
                            <Route path="orders" >
                                <Route index element={<Orders />} />
                                <Route path="add" element={<AddOrder />} />
                            </Route>
                        </Route>


                    </Routes>
                </Suspense>
                <ModalGroup />
            </Router>
        </ThemeProvider>
    );
}

const PagesWrapper = () => {
    const isSmallDevice = useMediaQuery({ maxWidth: 768 });

    const [isSideNavOpen, setIsSideNavOpen] = useState(false);
    const { user, isLoggedIn } = useUserContext();
    const { setModalType, setIsOpenModal } = useModalContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user || !isLoggedIn) {
            navigate("/signin");
        }
    }, []);

    return (
        <Container isSmallDevice={isSmallDevice}>
            <TopNav
                isSmallDevice={isSmallDevice}
                setIsSideNavOpen={setIsSideNavOpen}
                setModalType={setModalType}
                setIsOpenModal={setIsOpenModal}
            />
            <SideNav
                isSideNavOpen={isSideNavOpen}
                setIsSideNavOpen={setIsSideNavOpen}
            />
            <Outlet />

        </Container>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: auto;
    margin-top: 5em;
`

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
