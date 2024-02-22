import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 940px) {
        flex-direction: column;
        gap: 20px;
    }
`

export const Item = styled.div`
    position: relative;
    width: 30%;
    border: 1.2px solid ${props => props.isChosen ? 'var(--purplish-blue)' : 'var(--light-gray)'};
    border-radius: 10px;
    min-height: 170px;
    padding: 20px 15px;
    box-sizing: border-box;
    cursor: pointer;

    .icon {
        position: absolute;
        left: 12px;
    }

    .info {
        text-align: left;
        margin-top: 80px;
        left: 12px;
        bottom: 18px;
        display: flex;
        flex-direction: column;
    }

    .plan-name {
        color: var(--marine-blue);
        font-weight: 700;
        font-size: 1.1rem;
    }

    .price {
        color: var(--cool-gray);
        font-weight: 500;
    }

    .extra-benefits {
        color: var(--marine-blue);
        font-size: 0.9rem;
    }

    @media screen and (max-width: 940px) {
        width: 100%;
        display: flex;
        padding: 40px 30px;
        gap: 50px;
        align-items: center;
        border-width: 3px;
        .icon {
            width: 20%;
            position: relative;
        }

        .info {
            width: 100%;
            margin-top: 0;
            font-size: 1em;
        }

        .plan-name {
            font-size: 1.15em;
        }

        .extra-benefits {
            font-size: 1em;
    }
    }
`

export const ToggleSection = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: var(--magnolia);
    border-radius: 8px;
    margin-top: 30px;
    padding: 15px 32%;
    box-sizing: border-box;

    .text {
        font-weight: 500;
        
    }

    .active {
        color: var(--marine-blue);
    }

    .inactive {
        color: var(--cool-gray);
    }

    .toggler {
        position: relative;
        width: 24%;
        background: var(--marine-blue);
        border-radius: 20px;
        height: 100%;
        padding: 0 5px;
        box-sizing: border-box;
        display: flex;
        justify-content: ${props => props.duration === 'mo' ? 'start' : 'end'};
        align-items: center;
        cursor: pointer;
    }

    .toggler span {
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background-color: var(--white);
    }

    @media screen and (max-width: 940px) {
        position: relative;
        margin-top: 50px;
        padding: 25px 20%;

        .toggler {
            height: 60px;
            border-radius: 30px;
            padding: 0 10px;
        }

        .toggler span {
            width: 45px;
            height: 45px;
        }
    }
`