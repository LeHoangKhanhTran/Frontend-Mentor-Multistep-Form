import styled from "styled-components";
import CheckMark from '../../assets/images/icon-checkmark.svg'
export const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const Item = styled.div`
    &:hover {
        border: 1.2px solid var(--purplish-blue);
    }
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    width: 100%;
    background: ${props => props.isChosen ? 'var(--magnolia)' : 'var(--white)'};
    border-radius: 8px;
    border: 1.2px solid ${props => props.isChosen ? 'var(--purplish-blue)' : 'var(--light-gray)'};
    box-sizing: border-box;
    gap: 30px;

    input[type="checkbox"]{
        position: relative;
        appearance: none;
    }
    
    input[type="checkbox"]:after{
        left: 0;
        top: 0;
        content: '';
        box-sizing: border-box;
        border: 1px solid var(--light-gray);
        border-radius: 4px;
        background-color: var(--white);
        width: 22px;
        height: 22px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    input[type="checkbox"]:checked::after{
        background-image: url(${CheckMark});
        background-repeat: no-repeat;
        background-position-x: center;
        background-position-y: center;
        border: none;
        background-color: var(--purplish-blue);
    }

    /* input[type="checkbox"]:checked { 
        border-radius: 5px;
        width: 28px;
        height: 28px;
        accent-color: var(--purplish-blue);
    } */

    input[type="checkbox"]:checked::after {
        /* visibility: hidden; */
        background-color: var(--purplish-blue);
    }

    .info {
        width: 100%;
        text-align: left;
        display: flex;
        flex-direction: column;
    }

    .add-name {
        color: var(--marine-blue);
        font-weight: 700;
    }

    .detail {
        color: var(--cool-gray);
        font-size: 0.95rem;
    }

    .extra-charge {
        color: var(--purplish-blue);
        font-size: 0.95rem;
        font-weight: 600;
    }

    @media screen and (max-width: 940px){
        border-width: 2px;
        border-radius: 20px;
        
        &:hover {
            border: 3px solid var(--purplish-blue);
        }

        .info {
            width: 70%;
        }

        .add-name {
            font-size: 1.1em;
        }

        .detail, .extra-charge {
            font-size: 1em;
        }

        input[type="checkbox"]::after{
            top: 0px;
            width: 50px;
            height: 50px;
        }

        input[type="checkbox"]:checked::after{
            background-size: 24px 18px;
        }
    }
`
