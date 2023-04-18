import styled from "styled-components"

export default function Register() {
    return (
        <Wrapper>
            <section>

                Register

                <div class="colored-curve"></div>
            </section>

        </Wrapper>
    )
}

const Wrapper = styled.div`
height: 100vh;
background: red;

section {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 400px;
    padding-top: 100px;
    /* background: #3c31dd; */
}

.colored-curve {
    position: absolute;
    height: 250px;
    width: 100%;
    bottom: 0;
    text-align: center;
}

.colored-curve::before {
    content: '';
    display: block;
    position: absolute;
    border-radius: 100% 50%;
    width: 55%;
    height: 100%;
    transform: translate(85%, 60%);
    background-color: white;
}

.colored-curve::after {
    content: '';
    display: block;
    position: absolute;
    border-radius: 100% 50%;
    width: 55%;
    height: 100%;
    background: linear-gradient(139.52deg, #6251C3 -73.08%, #A800AB 150.16%);
    transform: translate(-4%, 40%);
    z-index: -1;
}

`;