import { About, FAQs, Footer, Home, HowItWorks, Quote, Reviews, Services } from "../../components";

export default function Landing() {
    return (
        <>
            <Home />
            <Services />
            <About />
             <Quote />
            <HowItWorks />
            {/* <FAQs /> */}
            <Reviews />
            <Footer />
        </>
    )
}