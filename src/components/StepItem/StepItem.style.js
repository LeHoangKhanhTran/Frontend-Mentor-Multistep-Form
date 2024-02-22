import styled from "styled-components";

const Wrapper = styled.li`
    position: relative;
    display: flex;
    list-style-type: none;
    align-items: center;
    gap: 15px;
    
    .step-number {
        position: relative;
        background-color: ${props => props.isCurrentStep ? 'var(--light-blue)' : 'transparent'};
        color: ${props => props.isCurrentStep ? 'var(--marine-blue)' : 'var(--white)'};
        display: flex;
        justify-content: center;
        align-items: center ;
        top: 0;
        border-radius: 50%;
        width: 2rem;
        height: 2rem;
        border: 1px solid var(--white);
        font-weight: 600;
    }

    @media screen and (max-width: 940px) {
        .step-number {
            width: 6rem;
            height: 6rem;
            font-size: 2.5rem;
        }
    }
`
export const Section = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;

    span {
        color: var(--light-gray);
        font-size: 0.8rem;
    }
    
    .step-name {
        font-size: 1rem;
        font-weight: 500;
        letter-spacing: 1.05px;
    }

    @media screen and (max-width: 940px) {
        display: none;
    }
`
export default Wrapper;