import React, { useEffect, useState } from 'react';
import $ from 'jquery';

const ListImageProduct = (props) => {
    const [Zoom, setZoom] = useState(false);
    const [Image,setImage] = useState('');

    const handleImages = (src) => {
        console.log(typeof(src));
         if(typeof(src) != 'undefined' && src != ''){
            var temp = src.split('/');
            temp = temp[temp.length - 1]
            //console.log(temp)
            setImage(temp);
        }
    }
    const handleZoomImage = (e) => {
        //console.log(e.target.src);
        const src = e.target.src;
        handleImages(src);
        setZoom(!Zoom);

        if(Zoom == true){
            $(".zoom-img").css("display","block");
        } else {
            $(".zoom-img").css("display","none");
        }
    }
    const checkDetail = () => {
        if(props.detail != 1){
            return true
        } else {
            return false
        }
    }

    const checkSize = () => {
        if(props.size != 1){
            return true
        } else {
            return false
        }
    }
    return (
        <>
            <div className="list-img">
                {
                    props.images.split(',').map(item => {
                        return <img src={"./images/product/" + item} class="img-responsive" alt="Image" onClick={handleZoomImage}/>
                    })
                }
                {/* <img src="./images/product/A8_SOCKS_GREY_0182.png" class="img-responsive" alt="Image" onClick={handleZoomImage}/>
                <img src="./images/product/A8_SOCKS_GREY_0182_2UP.png" class="img-responsive" alt="Image" onClick={handleZoomImage}/>
                <img src="./images/product/A8_SOCKS_GREY_0183.png" class="img-responsive" alt="Image" onClick={handleZoomImage}/> */}
  
            </div>
            <div className="zoom-img">
                <img src={"./images/product/" + Image} class="img-responsive" alt="Image" onClick={handleZoomImage}/>
                <button type="button" onClick={handleZoomImage}><i class="bi bi-x" /></button>
                <div className="buy-product">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="name-producer">
                                    {props.producer}
                                </div>
                                <div className="name-product">
                                    {props.name}
                                </div>
                                <div className="price-product">
                                    {parseInt(props.price).toLocaleString() + '.000 đ'}
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="size-and-color">
                                    <div className="color">
                                        MORE COLOR
                                        <input type="button" name="" id="input" class="upper-case" value={props.color} required="required" title="" />
                                    </div>
                                    <div className="size">
                                        MORE SIZE
                                        <input type="button" name="" id="input" class="upper-case" value={checkSize()? props.size : 'o/s'} required="required" title="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3 btn-buy">
                                <button type="button">THÊM VÀO GIỎ HÀNG</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ListImageProduct;