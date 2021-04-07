import React from 'react';
import ProductDetail from '../module/ProductDetail';
import ListImageProduct from '../module/ListImageProduct'

const TrangChiTietSanPham = () => {
    return (
        <>
            <div className="container-fluid detail-infor-box">
                <div className="row">
                    <div className="col-sm-6">
                        <ListImageProduct />
                    </div>
                    <div className="col-sm-6">
                        <ProductDetail />
                    </div>
                </div>
            </div>
        </>
    );
};

export default TrangChiTietSanPham;