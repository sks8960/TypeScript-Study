import React from 'react';
import { Restaurant, Adress, Menu } from './model/restaurant';

interface OwnProps {
    info:Restaurant,
    chageAdress(adress:Adress):void
}

const Store:React.FC<OwnProps> = (props) => {
    return(
        <div>Store</div>
    )
}

export default Store;