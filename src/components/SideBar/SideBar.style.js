import styled from 'styled-components'
export const Wrapper = styled.div`
    position: relative;
    left: 0;
    border-radius: inherit;
    background-repeat: no-repeat;
    background-size: contain;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    cursor: pointer;

    .container {
        top: 0;
        position: absolute;
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        box-sizing: border-box;
    }

    @media screen and (max-width: 1180px) {
        background-size: cover;
    }

    @media screen and (max-width: 940px) {
        position: absolute;
        top: 0;
        width: 100%;
        z-index: -1;
        picture {
            position: relative;
            width: 100%;
        }

        img {
            position: relative;
            width: 100%;

        }

        .container {
            padding: 0;
            width: 100%;
            flex-direction: row;
            justify-content: center;
            gap: 40px;
        }
    }
`