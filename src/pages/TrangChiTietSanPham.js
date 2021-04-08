import React , {useState} from 'react';
import ProductDetail from '../module/ProductDetail';
import ListImageProduct from '../module/ListImageProduct'
import Data from '../module/Data';

const TrangChiTietSanPham = () => {
    const [Product , setProduct] = useState(Data)
    //console.log(Product)

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