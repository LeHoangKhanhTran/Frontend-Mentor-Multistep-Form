import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 568px;
    box-sizing: border-box;
    padding: 10px calc(10% - 1rem) 10px 10%;

    @media screen and (max-width: 945px){
        padding: 50px calc(50px - 1rem) 50px 50px;
    }

    @media screen and (max-width: 940px) {
        position: static;
        padding: 50px 5%;
        height: fit-content;
    }
`

export const FormSection = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    text-align: start;
    font-size: 1em;
    
    header h2 {
        text-align: left;
        color: var(--marine-blue);
        font-size: 2em;
        margin-block-end: 5px;
    }

    header span {
        color: var(--cool-gray);
    }

    .form {
        width: 100%;
        margin-top: 35px;
    }

    @media screen and (max-width: 940px) {
        font-size: 2.3rem;
        position: static;
        gap: 30px;
        header h2 {
            margin-block-start: 0;
        }

        header span {
            font-size: 1.2em;
        }
    }
`

export const Footer = styled.section`
    position: absolute;
    bottom: 0;
    width: 100%;

    .btn {
        position: absolute;
        bottom: 0px;
        outline: none;
        border: none;
        cursor: pointer;
        padding: 0.85em 2em;
        box-sizing: border-box;
    }

    .next {
        right: 0;
        padding: 0.85em 1.6em;
        background-color: var(--marine-blue);
    }

    .next:hover {
        background-color: hsl(214, 72%, 32%);
    }

    .back {
        left: 0;
        color: var(--cool-gray);
        background-color: transparent;
        font-weight: 500;
        padding: 0.85em 0;
        box-sizing: border-box;
    }

    .back:hover {
        color: var(--marine-blue);
    }

    .confirm {
        right: 0;
        background-color: var(--purplish-blue);
    }

    .confirm:hover{
        opacity: 0.7;
    }

    @media screen and (max-width: 940px) {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 180px;
        display: flex;
        box-sizing: border-box;
        background-color: var(--white);

        .btn {
           bottom: 50%;
           transform: translateY(50%);
           font-size: 1.1em;
        }

        .next, .confirm {
            right: 2rem;
        }

        .back {
            left: 2rem; 
        }
    }
`