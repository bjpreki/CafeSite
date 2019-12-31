import styled from 'styled-components';

export const StyledCoffee = styled.div`
    background: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryLight};
    width: 100vw;

    h2{
        margin: 0;
        display: block;
    }
    ul{
        list-style: none;
    }
    .container{
        height:80vh;
        margin: 5vh 5vw;
        background-color: ${({theme})=>theme.primaryDark}
    }
    .items{
        width: 20vw;
        height: 80vh;
        border-radius: 15px;
        background-color: ${({ theme }) => theme.primaryLight};
        color: ${({theme}) => theme.primaryDark};
        float: left;
        padding: 0;
        display: block;
    }
    .itemDescription{
        display: inline-block;
        border-radius: 15px;
        background-color: ${({theme})=>theme.primaryLight};
        color: ${({theme})=>theme.primaryDark};
        width: 70vw;
    }
    button{
        border: none;
        background: inherit;
        color: ${({theme})=> theme.primaryDark};
        border-radius: 15px;
    }

`
    ;