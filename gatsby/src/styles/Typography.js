import { createGlobalStyle } from 'styled-components';
import { device } from '../utils/breakpoints';
import { DefaultColors } from './ColorScheme';

const TypographyStyles = createGlobalStyle`
    h1,h2,h3,h4,h5,h6,P {
        font-family: Lato;
        font-weight: 700;
        color: ${({ darkMode }) =>
          darkMode ? DefaultColors.dark : DefaultColors.white};
    }
    h1 {
        font-size: 50px;
        font-weight: 900;
        line-height: 56px;
        margin-bottom: 30px;
        @media ${device.lg} {
            font-size: 76px;
            line-height: 84px;
        }
        @media ${device.md} {
            font-size: 66px;
            line-height: 70px;
        }
    }
    .nav-link-text {
        color: ${({ darkMode }) =>
          darkMode ? DefaultColors.darkLess : DefaultColors.whiteLess};
        }
        &:hover {
            color: white;
            transition: .2s;
        }
    }
`;

export default TypographyStyles;
