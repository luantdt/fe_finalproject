import React from 'react';
import Alias from '../module/Alias';
import FormReviewCart from '../module/FormReviewCart';

const TrangGioHang = () => {
    return (
        <> 
            <Alias alias={[{'name':'Trang Chủ','link':'/'},{'name':'Giỏ Hàng','link':'/gio-hang'}]}/>
            <FormReviewCart />
        </>
    );
};

export default TrangGioHang;