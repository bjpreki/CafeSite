import React from 'react';
import { StyledHero } from './Hero.styled';

const Burger = (name) => {
  return (
      <StyledHero>
        <h1>{name.name}</h1>
        <p>jajabinks is the greatest mythical character there is in any universe</p>
      </StyledHero>
  )
}

export default Burger;