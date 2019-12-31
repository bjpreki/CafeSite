import React from 'react';
import {StyledProducts} from './poducts.styled';

const ItemsTypes = ( BeverageTypes ) => {
    let itemList = BeverageTypes
    let products = () => itemList.map(
        product =>
                <div className=''>
                    <p>{product.name}</p>
                </div>
    )

    return (
        <StyledProducts>
            <div>
                <ul className='items'>
                    <li>
                    {ItemsTypes()}
                    </li>
                </ul>
            </div>
            {products()}
        </StyledProducts>
    )
}

export default ItemsTypes
