import {React ,useEffect} from 'react';
import useState from 'react-usestateref';
import ToolOption from '../module/ToolOption';
import ItemProduct from '../module/ItemProduct';
import BuyNowHidden from '../module/BuyNowHidden';
import Data from '../module/Data';
import Alias from '../module/Alias';
import axios from 'axios';


const TrangSanPham = () => {
    /* const [buyNowBox,setBuyNowBox] = useState(false); */
    const [inforToBuyNow , setInforToBuyNow] = useState({
        'img':'',
        'producer':'',
        'name':'',
        'price':'',
        'color': '',
        'size' : '',
        'stock': ''
    });
    //const [DataTemp,setDataTemp,DataRef] = useState([]);
    useEffect(() => {
        /* axios.get('http://localhost:4000/products')
            .then((response) => {
                console.log(response.data);
                if (response.status == 200) {
                    console.log('alo');
                    setDataTemp(response.data);
                }
                console.log(DataRef.current);
            })
            .catch((err) => {
                console.log(err);
            }); */
        
        handleChangeBuyNow();
    },[inforToBuyNow])
    const DataProduct = useState(Data);
    const handleChangeBuyNow = (id) => {
        if( id != '' && typeof(id) != 'undefined') {
            const infor = DataProduct.find(item => item.id == id)
            
            setInforToBuyNow({
                'img' : infor.avatar,
                'producer':infor.vendor,
                'name':infor.name,
                'price':infor.price,
                'color': infor.color,
                'size' : infor.size,
                'stock': infor.quantity
            });
        } else {
            console.log('not thing');
        }
    };
    return (
        <>
            <Alias alias={[{'name':'Trang Chủ','link':'/'},{'name':'Sản Phẩm','link':'/san-pham'}]}/>
            <div className="container-fluid product-page">
                <div className = "row">
                    <div className="col-sm-2 list-search">
                        <ToolOption />
                    </div>
                    <div className="col-sm-10 list-product">
                        <ItemProduct 
                            handleChangeBuyNow={handleChangeBuyNow}
                            //DataProduct={DataRef.current} 
                        />
                    </div>
                </div>
            </div>
            <BuyNowHidden inforToBuyNow={inforToBuyNow} />
        </>
    );
};

export default TrangSanPham;