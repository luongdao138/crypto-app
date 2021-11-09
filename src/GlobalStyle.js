import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    :root {
       /* --bg-main:  */
        --bg-main: ${({ theme }) => theme.colors.bg.main};
        --bg-element: ${({ theme }) => theme.colors.bg.element};
        --bg-secondary: ${({ theme }) => theme.colors.bg.secondary};
        --text-main: ${({ theme }) => theme.colors.text.main};
        --text-light: ${({ theme }) => theme.colors.text.light};
        --text-elight: ${({ theme }) => theme.colors.text.extra_light};
        --primary-main: ${({ theme }) => theme.colors.primary.main};
        --border-main: ${({ theme }) => theme.colors.border.main};
        --border-active: ${({ theme }) => theme.colors.border.active};
    }

    * {
      font-family: 'Poppins', sans-serif;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    li {
      list-style: none;
    }

    a {
      text-decoration: none;
    }

    button {
      border: none;
      outline: none;
      cursor: pointer;
    }

    input {
      border: none;
      outline: none;
    }
    
`;

export default GlobalStyle;
