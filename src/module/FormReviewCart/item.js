import React from 'react';

const item = (props) => {
    const cart = props.cart;
    return (
        <>
           <tr>
                <th scope="row">{props.no + 1}</th>
                <td className="detail-item-cart">
                    <div className="img-item-cart">
                        <img src={"./images/product/" + cart.avatar} class="img-responsive" alt="Image" /> 
                    </div>
                    <div className="infor-item-cart">
                        <div className="producer">
                            {cart.producer}
                        </div>
                        <div className="name">
                            {cart.name}
                        </div>
                        <div className="size">
                            Size: {(cart.size == '1')? 'O/S' : cart.size}
                        </div>
                        <div className="gia">
                            <span>Giá:</span> {parseInt(cart.gia).toLocaleString() + '.000 đ'}
                        </div>
                        <div>
                            Số lượng: {cart.amount}
                        </div>
                    </div>
                </td>
                <td>
                    {parseInt(cart.gia * cart.amount).toLocaleString() + '.000 đ'}
                </td>
            </tr> 
        </>
    );
};

export default item;