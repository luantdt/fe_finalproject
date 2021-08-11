import React from 'react';
import FormPaymentProduct from '../module/FormPaymentProduct';
import FormReviewCart from '../module/FormReviewCart';
import Alias from '../module/Alias';

const TrangThanhToan = () => {
    return (
        <>
            <Alias alias={[{'name':'Trang Chủ','link':'/'},{'name':'Thanh Toán','link':'/thanh-toan'}]}/>
            <div className="container" >
                <div className="row">
                    <div className="col-sm-5">
                        <FormPaymentProduct />
                    </div>
                    <div className="col-sm-7">
                        <FormReviewCart />
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default TrangThanhToan;