import React from 'react';
import { StyledMenu } from './Menu.styled';
import { Link } from 'react-router-dom';

const Menu = ({ open }) => {
    return (
        <StyledMenu open={open}>
            <Link to='/menu'>
                Menu
            </Link>
            <Link to='/Coffee'>
                Coffee
                    </Link>
            <Link to='/about'>
                about us
            </Link>
            <Link to='/contact'>
                contact
            </Link>
        </StyledMenu>
    )
}
export default Menu