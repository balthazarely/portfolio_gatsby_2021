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
    h4 {
        font-weight: 900;
        font-size: 16px;
        text-align: center;
        color: #b3b3b3;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-top: 16px;
        margin-bottom: 5px;
    }
    h5 {
        font-weight: 900;
        font-size: 12px;
        text-align: center;
        color: #b3b3b3;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-top: 16px;
        margin-bottom: 5px;
    }
   p {
        font-weight: 300;
        font-size: 20px;
        /* color: #b3b3b3; */
        line-height: 28px;
        color: ${({ darkMode }) => (darkMode ? 'black' : 'b3b3b3')};
    }
        /* text-align: center; */
        /* text-transform: uppercase; */
        /* letter-spacing: 1px; */
        /* margin-top: 16px; */
        /* margin-bottom: 5px; */
    }
    .section-header{
        color: ${({ darkMode }) =>
          darkMode ? DefaultColors.darkLess : DefaultColors.white};
        }
    }
    .section-subheader{
        color: ${({ darkMode }) =>
          darkMode ? DefaultColors.darkLess : DefaultColors.white};
                }
        }
    .nav-link-text {
        color: ${({ darkMode }) =>
          darkMode ? DefaultColors.darkLess : DefaultColors.whiteLess};
        }
        /* &:hover {
            color: white;
            transition: .2s;
        } */
        }
        .skill-header{
        color: ${({ darkMode }) =>
          darkMode ? DefaultColors.darkLess : DefaultColors.white};
            }
        }
        .skill{
        color: ${({ darkMode }) =>
          darkMode ? DefaultColors.darkLess : DefaultColors.whiteLess};
                }
        }
        .color-block {
            /* background: ${({ darkMode }) =>
              darkMode ? DefaultColors.white : DefaultColors.darkLess};
                } */
            background: ${({ darkMode }) =>
              darkMode
                ? DefaultColors.white
                : 'linear-gradient(to top, rgba(34,43,63,0), rgba(34,43,63,1))'}
        }
            /* background: rgba(38, 45, 56, 0.5); */
        .skill-header-bg{
            opacity: 0.5;
            color: ${({ darkMode }) =>
              darkMode ? DefaultColors.whiteLess : '#161d2d'};
                }
        }
        .tag-tech {
          color: ${({ darkMode }) =>
            darkMode ? DefaultColors.darkLess : DefaultColors.white};
        }
        .tag-tech {
          color: ${({ darkMode }) =>
            darkMode ? DefaultColors.darkLess : DefaultColors.white};
        }
        .footer-item {
          color: ${({ darkMode }) =>
            darkMode ? DefaultColors.darkLess : DefaultColors.whiteLess};
        }
        }
`;

export default TypographyStyles;
