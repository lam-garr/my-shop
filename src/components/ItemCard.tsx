import React from 'react';
import image from './sample.jpg';
import '../styles/ItemCard.css';

interface itemProp{
    item:any;
}

function ItemCard(){
    return(
        <div className='item-container'>
            <div className='item'>
            <img src={image} alt='img'/>
                <div className='item-description'>
                    <span>brand name</span>
                    <h5>item name</h5>
                    <h4>$69</h4>
                </div>
                <button>add</button>
            </div>
        </div>
    )
}

export default ItemCard;