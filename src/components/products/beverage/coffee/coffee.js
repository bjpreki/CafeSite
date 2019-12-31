import React from 'react';
import { StyledCoffee } from './coffee.styled';

const Coffee = ({ BeverageTypes, open, setOpen }) => {
    let coffees = BeverageTypes.CoffeeTypes;
    let coffeeDescription = () => coffees.map(
        coffee =>
                <div className='itemDescription' id={coffee.name}>
                    <p>{coffee.description}</p>
                    <p>{coffee.price}</p>
                </div>
    )

    let coffeeNames = () => coffees.map(
        coffee =>
            <li key={coffee.index}>
                <button><h3>{coffee.name}</h3></button>
            </li>
    )

    // console.log(coffeenames())
    return (
        <StyledCoffee>
        <div className='container'>
            <div>
                <ul className='items'>
                    {coffeeNames()}
                </ul>
            </div>
            {coffeeDescription()}

        </div>
        </StyledCoffee>
    )
}

export default Coffee