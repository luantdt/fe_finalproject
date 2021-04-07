import React from 'react';
import {
    Link,
} from 'react-router-dom';

const ItemProduct = (props) => {
    return (
        <>
            <div className="col-sm-3">
                <div className="item-product">
                    <Link to={'/'+props.ma}>
                        <div className="img-product">
                            <img src={"./images/product/" + props.image} class="img-responsive img-product" alt="Image" />
                        </div>

                        <div className="infor-produce">
                            <div className="producer">
                                {props.producer}
                            </div>
                            <div className="name-product">
                                {props.name}
                            </div>
                            <div className="price-product">
                                {parseInt(props.price).toLocaleString() + '.000 đ'}
                            </div>
                        </div>
                    </Link>
                    <div className="button-control-product">
                        <button type="button" class="btn-circle"><i class="bi bi-bag-plus-fill" /></button>
                        <button type="button" class="btn-circle"><i class="bi bi-heart" /></button>
                        <button type="button" class="btn-circle"><i class="bi bi-info" /></button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ItemProduct;