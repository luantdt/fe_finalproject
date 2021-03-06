import React, { useEffect, useState } from 'react';
import Item from './item';
import {Link} from 'react-router-dom'

const FormCart = () => {
    const [cart,setCart] = useState();
    const [total,setTotal] = useState(0);

    useEffect(() => {
        const CartTemp = localStorage.getItem('cart');
        if(typeof CartTemp != 'undefined' && CartTemp != null){
            var temp = JSON.parse(CartTemp);
            setCart(temp);
        }

    },[]);
    useEffect(() => {
        getTotalPrice()
    },[cart]);
    const handleChangeAmount = (id_san_pham, gia_tri) => {
        var temp_array = [...cart];

        for(var i = 0; i < temp_array.length; i++){
            if(id_san_pham == temp_array[i].id){
                temp_array[i].amount = gia_tri;
                setCart(temp_array)
                localStorage.setItem('cart', JSON.stringify(temp_array));
                break;
            }
        }
    }
    const handleRemoveItemCart = (id_san_pham) => {
        var temp_array = [...cart];
        for(var i = 0; i < temp_array.length; i++){
           
            if(id_san_pham == temp_array[i].id){
                temp_array.splice(i, 1);
                setCart(temp_array)
                console.log(temp_array);
                localStorage.setItem('cart', JSON.stringify(temp_array));
                break;
            }
        }
    }
    const handlePrintItemCart = () => {
        return cart.map((item,index) => {
           return <Item cart={item} no={index} handleChangeAmount={handleChangeAmount} handleRemoveItemCart={handleRemoveItemCart}/>
        })
    }
    const getTotalPrice = () => {
        var total_temp = 0
        if (typeof cart != 'undefined' && cart != null) {
            cart.map(item => {
                total_temp += item.gia*item.amount;
            })
        }
        setTotal(total_temp)
    }
    return (
        <div className="form-cart">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-8">
                        <div class="table-responsive">
                            <table className="table table-borderless">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col" rowspan="2">Th??ng tin s???n ph???m</th>
                                        <th scope="col" className="th-width">Gi??</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        (typeof(cart) == 'undefined' || cart == '')? 
                                        'B???n ch??a c?? s???n ph???m n??o'
                                        :
                                        handlePrintItemCart()
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="box-total">
                            <div className="total-price">
                                    <span>Th??nh ti???n:</span>
                                    <span className="total">{(total)? total.toLocaleString() + ".000 ??" : 0}</span>
                            </div>
                            <div className="list-btn-buy">
                                <Link className="btn-buy" to="thanh-toan">
                                    THANH TO??N NGAY
                                </Link>
                                <Link className="btn-continue" to="/san-pham">
                                    TI???P T???C MUA H??NG
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default FormCart;