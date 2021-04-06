import {React} from 'react';
import ToolOption from '../module/ToolOption';
import ItemProduct from '../module/ItemProduct';

const TrangSanPham = () => {
    return (
        <>
            <div className="container-fluid product-page">
                <div className = "row">
                    <div className="col-sm-2 list-search">
                        <ToolOption />
                    </div>
                    <div className="col-sm-10 list-product">
                        <ItemProduct />
                    </div>
                </div>
            </div>
        </>
    );
};

export default TrangSanPham;