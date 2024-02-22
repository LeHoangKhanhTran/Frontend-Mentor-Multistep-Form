import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    .thank-you {
        font-size: 2.4rem;
        font-weight: 700;
        color: var(--marine-blue)
    }

    .thank-you div {
        margin-top: 15px;
    }

    .extra-info {
        font-size: 1.15rem;
        color: var(--cool-gray)
    }

    @media screen and (max-width: 940px) {
        padding: 8rem 0;

        img {
            transform: scale(2);
        }

        .thank-you {
            font-size: 4em;
        }

        .thank-you div {
            margin-top: 50px;
        }

        .extra-info {
            font-size: 2.7em;
        }
    }
`