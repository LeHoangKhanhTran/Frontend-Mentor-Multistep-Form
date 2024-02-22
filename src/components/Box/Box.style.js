import styled from 'styled-components'

const Wrapper =  styled.div`
    position: absolute;
    background: var(--white);
    width: 64%;
    min-width: 900px;
    display: flex;
    border-radius: 20px;
    padding: 1rem;
    
    @media screen and (max-width: 940px) {
        position: static;
        margin-top: 25%;
    }
`

export default Wrapper;