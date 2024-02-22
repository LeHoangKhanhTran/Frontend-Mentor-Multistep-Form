import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --marine-blue: hsl(213, 96%, 18%);
        --purplish-blue: hsl(243, 100%, 62%);
        --pastel-blue: hsl(228, 100%, 84%);
        --light-blue: hsl(206, 94%, 87%);
        --strawberry-red: hsl(354, 84%, 57%);
        --cool-gray: hsl(231, 11%, 63%);
        --light-gray: hsl(229, 24%, 87%);
        --magnolia: hsl(217, 100%, 97%);
        --alabaster: hsl(231, 100%, 99%);
        --white: hsl(0, 0%, 100%);
        font-size: 16px;
        font-family: 'Ubuntu', sans-serif;
        background-color: var(--magnolia);
        line-height: 1.5;
        color-scheme: light dark;
        color: rgba(255, 255, 255, 0.87);
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    #root {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
        display: flex;
    }

    main {
        display: flex;
        justify-content: center;  
        align-items: center;
    }

    body {
        position: relative;
        margin: 0;
        display: flex;
        min-width: 320px;
        min-height: 100vh;
    }

    h1 {
      font-size: 3.2em;
      line-height: 1.1;
    }

    button {
      border-radius: 8px;
      border: 1px solid transparent;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      cursor: pointer;
      transition: border-color 0.25s;
    }

    @media screen and (max-width: 940px) {
        #root {
            position: relative;
            max-width: none;
        }

        main {
            padding-bottom: 14rem;
        }
    }
`
export default GlobalStyle;