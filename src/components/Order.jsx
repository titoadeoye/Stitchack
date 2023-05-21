import styled from "styled-components"

export default function Order ({order}) {
    const {id, name, email, bill, paid, due, status} = order;
    return (
        <Wrapper>
        <p>{id}</p>
        <p>{name}</p>
        <p className="email">{email}</p>
        <p>{bill}</p>
        <p>{paid}</p>
        <p>{due}</p>
        <p>{status}</p>
        </Wrapper>
    )
};

const Wrapper = styled.li`
    display: flex;
    box-shadow: 2px 4px 8px 0 #eeeeee;
    padding: 15px;
    border-radius: 5px;
    align-items: center;
    width: fit-content;


    p {
        color: ${props => props.theme.primaryColor};
        font-size: 13px;
        text-transform: capitalize;
        min-width: 150px;
        max-width: 150px;
        margin-right: 1em;
        text-overflow: ellipsis;
        overflow: hidden;

        @media (max-width: 520px) {
            font-size: 12px;
            min-width: 100px;
            max-width: 100px;
        }
    }

    .email {
        text-transform: lowercase;
    }
`;