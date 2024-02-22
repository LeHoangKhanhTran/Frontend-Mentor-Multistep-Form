import styled from "styled-components";

export const Container = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    background-color: var(--magnolia);
    border-radius: 5px;
    padding: 1.6rem;
    box-sizing: border-box;

    hr {
        width: 100%;
        border: 0.1px solid var(--light-gray);
    }

    @media screen and (max-width: 940px) {
        padding: 3rem;

        hr {
            border-width: 0.5px;
        }
    }
`

export const PlanItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    color: var(--marine-blue);
    font-weight: 500;

    .price {
        font-weight: 700;
    }

    .change-option {
        cursor: pointer;
        color: var(--cool-gray);
        text-decoration: underline;
        text-decoration-thickness: 1.2px;
    }

    .change-option:hover {
        color: var(--purplish-blue);
    }

`

export const AddItem = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    color: var(--cool-gray);
    font-weight: 400;
    font-size: 0.95rem;
    .price {
        color: var(--marine-blue);
    }

    @media screen and (max-width: 940px) {
        font-size: 2.2rem;
        .price {
            font-size: 1.1em;
        }
    }
`

export const TotalItem = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--cool-gray);
    padding: 1.6rem;
    box-sizing: border-box;

    .price {
        font-size: 1.35rem;
        color: var(--purplish-blue);
        font-weight: 700;
    }

    @media screen and (max-width: 940px) {
        padding: 3rem;
        .price {
            font-size: 1.2em;
        }
    }
`

