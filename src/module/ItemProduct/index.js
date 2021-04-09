import React, { useState,useEffect } from 'react';
import Data from './Data';
import Item from './Item';


const Product = () => {
    const data = useState(Data);
    
    return (
        <>
            <div className="row">
                {
                    data[0].map(item => {
                        return <Item producer={item.producer} image={item.avatar} name={item.name} price={item.gia} ma={item.id} />
                    })
                }
            </div>
        </>
    );
};

export default Product;