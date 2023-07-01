import styled from "styled-components";
import { PageWrapper, Explore, OngoingOrders, Performance, DueToday, NewCustomers} from "../components";
import { device } from "../constants";

export default function Home() {
    return (
        <PageWrapper>
            <Page>
                <Main>
                    <Explore />
                    <OngoingOrders />
                    <NewCustomers />
                </Main>
                <SideBar>
                    <Performance />
                    <DueToday />
                </SideBar>
            </Page>

        </PageWrapper>
    )
};
const Page = styled.div`
    width: 100%;
    gap: 20px;
    display: flex;

    @media ${device.isSmallDevice} {
       flex-direction: column;
    }
`;

const Main = styled.section`
    width: 65%;

    @media ${device.isSmallDevice} {
        width: 100%;
    }
`;

const SideBar = styled.section`
    width: 35%;

    @media ${device.isSmallDevice} {
        width: 100%;
    }
`