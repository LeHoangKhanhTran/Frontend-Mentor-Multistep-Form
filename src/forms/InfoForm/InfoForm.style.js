import styled from "styled-components";

export const Content = styled.div`
    .input-field {
        position: relative;
        margin-bottom: 20px;
        text-align: left;
    }
    
    label {
        color: var(--marine-blue);
        font-size: 0.95rem;
        font-weight: 500;
    }

    input {
        position: relative;
        width: 100%;
        background: transparent;
        border-radius: 8px;
        margin-top: 8px;
        padding: 13px;
        box-sizing: border-box;
        border: 1px solid var(--light-gray);
        outline: none;
        color: var(--marine-blue);
        font-weight: bold;
        font-size: 1rem;
        cursor: pointer;
    }

    input::placeholder {
        color: var(--cool-gray);
    }

    .error {
        position: absolute;
        right: 0;
        font-size: 0.95rem;
        font-weight: 500;
        color: var(--strawberry-red);
    }

    input:focus {
        border: 1px solid var(--purplish-blue);
    }

    @media screen and (max-width: 940px) {
        .input-field {
            margin-bottom: 35px;
        }

        label {
            font-size: 1em;
        }

        input {
            padding: 26px;
            font-size: 1em;
        }

        .error {
            font-size: 0.9em;
        }
    }
`
