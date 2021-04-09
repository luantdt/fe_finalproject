import React , {useEffect, useState} from 'react';
import ProductDetail from '../module/ProductDetail';
import ListImageProduct from '../module/ListImageProduct'
import Data from '../module/Data';
import { Redirect, useLocation } from 'react-router-dom';

const TrangChiTietSanPham = () => {
    const [DataProduct] = useState(Data);
    const location = useLocation();
    const [redirect,setRedirect] = useState(false);
    //console.log(Product)
    
    useEffect(() => {
        var temp = DataProduct.find(item => item.id == location.pathname.substr(1))
        
        if(location.pathname.substr(1) > 6){
            setRedirect(true);
        }
    },[location])

    return (
        <>
            {redirect? <Redirect to="/san-pham" /> : ''}
            <div className="container-fluid detail-infor-box">
                <div className="row">
                    <div className="col-sm-6">
                        <ListImageProduct 
                            images={DataProduct.find(item => item.id == location.pathname.substr(1)).img}
                            producer={DataProduct.find(item => item.id == location.pathname.substr(1)).producer} 
                            name={DataProduct.find(item => item.id == location.pathname.substr(1)).name} 
                            price={DataProduct.find(item => item.id == location.pathname.substr(1)).gia}
                            color={DataProduct.find(item => item.id == location.pathname.substr(1)).mau}
                            size={DataProduct.find(item => item.id == location.pathname.substr(1)).size} 
                        />
                    </div>
                    <div className="col-sm-6">
                        <ProductDetail 
                            producer={DataProduct.find(item => item.id == location.pathname.substr(1)).producer} 
                            name={DataProduct.find(item => item.id == location.pathname.substr(1)).name} 
                            price={DataProduct.find(item => item.id == location.pathname.substr(1)).gia} 
                            color={DataProduct.find(item => item.id == location.pathname.substr(1)).mau} 
                            size={DataProduct.find(item => item.id == location.pathname.substr(1)).size}
                            content={DataProduct.find(item => item.id == location.pathname.substr(1)).content}
                            detail={DataProduct.find(item => item.id == location.pathname.substr(1)).detail}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default TrangChiTietSanPham;