import React,{useEffect,useState} from 'react';
import Item from './item'
const FormReviewCart = () => {
    const [cart,setCart] = useState();
    const [total,setTotal] = useState(0);

    useEffect(() => {
        getTotalPrice()
    },[cart]);
    useEffect(() => {
        const CartTemp = localStorage.getItem('cart');
        if(typeof CartTemp != 'undefined' && CartTemp != null){
            var temp = JSON.parse(CartTemp);
            setCart(temp);
        }
    },[]);
    const handlePrintItemCart = () => {
        if(typeof cart != 'undefined' && cart != null) {
            return cart.map((item,index) => {
                return <Item cart={item} no={index} />
            })
        } else {
            return ''
        }   
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
        <div className="form-review">
            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th scope="col" >#</th>
                        <th scope="col" rowspan="2">Thông tin sản phẩm</th>
                        <th scope="col" className="th-width">Thành tiền</th>
                    </tr>
                </thead>
                <tbody>
                    {handlePrintItemCart()}
                </tbody>
                
            </table>
            <div className="total-price">
                <span>Tổng tiền:</span>
                <span className="total">{(total)? total.toLocaleString() + ".000 đ" : 0}</span>
            </div>
        </div>
    );
};

export default FormReviewCart;