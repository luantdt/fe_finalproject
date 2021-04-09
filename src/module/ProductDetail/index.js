import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Link} from '@material-ui/core';

const ProductDetail = (props) => {
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
        <div className="infor-product" id="infor-product">
            <div className="name-producer">
                {props.producer}
            </div>
            <div className="name-product">
                {props.name}
            </div>
            <div className="price-product">
                {parseInt(props.price).toLocaleString() + '.000 đ'}
            </div>
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

            <button type="button" class="btn-buy">THÊM VÀO GIỎ HÀNG</button>
            <div className="content-product">
                {props.content}
            </div>
            <div className="more-content">
                {checkDetail()? <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>Detail</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        <ul>
                            {props.detail.split(',').map(item => {
                                return <li>{item}</li>
                            })}
                        </ul>
                    </Typography>
                    </AccordionDetails>
                </Accordion> : ''}
                
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography>Share</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        <Link href="https://www.facebook.com" color="inherit"><i class="bi bi-facebook" /></Link>
                        <Link href="https://www.twitter.com" color="inherit"><i class="bi bi-twitter" /></Link>
                    </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    );
};

export default ProductDetail;