import styled from 'styled-components';
import img from '../../assets/images/hero/coffeeShopHero.jpeg';

export const StyledHero = styled.div`
    width: 100vw;
    padding: 20% 0;
    background: linear-gradient( rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7) ), url(${img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    h1{
      font-size: 2.5rem;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
    position: relative;
    z-index: -10;
    h1{
      font-size: initial;
    }
  }
`
  ;