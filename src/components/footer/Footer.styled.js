import styled from 'styled-components';

export const StyledFooter = styled.footer`
    background: ${({theme})=> theme.primaryDark};
    color: ${({theme})=>theme.primaryLight};
    position: relative;
    bottom: 0;
    width: 100%;

`