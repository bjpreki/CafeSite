import React from 'react';
import { StyledFooter } from './Footer.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <StyledFooter>
            <hr />
            <h3>social</h3>
                <a href='/'>
                    <FontAwesomeIcon icon={['fab', 'facebook']} />
                </a>
                <a href='/'>
                    <FontAwesomeIcon icon={['fab', 'instagram']} />
                </a>
                <a href='/'>
                    <FontAwesomeIcon icon={['fab', 'twitter']} />
                </a>
                <h3>Links</h3>
                <a href='/'>Carrers</a>
                <Link to='/about'>About us</Link>
                <Link to='/'>Home</Link>
            <hr />
            <small>all rights reserved CoffeeShop &copy </small>
        </StyledFooter>

    )
}

export default Footer