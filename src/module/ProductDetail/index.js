import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Link} from '@material-ui/core';

const index = () => {
    return (
        <div className="infor-product" id="infor-product">
            <div className="name-producer">
                FEAR OF GOD
            </div>
            <div className="name-product">
                Seventh Collection Socks
            </div>
            <div className="size-and-color">
                <div className="color">
                    MORE COLOR
                    <input type="button" name="" id="input" class="" value="Light Grey" required="required" title="" />
                </div>
                <div className="size">
                    MORE SIZE
                    <input type="button" name="" id="input" class="" value="O/S" required="required" title="" />
                    
                </div>
            </div>

            <button type="button" class="btn-buy">THÊM VÀO GIỎ HÀNG</button>
            <div className="content-product">
                LẤY CẢM HỨNG TỪ NHỮNG ĐÔI TẤT THỂ THAO CỦA NHỮNG NĂM 1980, ĐƯỢC THIẾT KẾ VỚI KIỂU DÁNG THỤNG, VỪA VẶN THOẢI MÁI, NHƯNG TẠO NÊN SỰ SANG TRỌNG BỞI TAY NGHỀ THỦ CÔNG CỦA Ý VÀ SỢI ĐAN CHUNKY COTTON CỦA AI CẬP. ĐÔI TẤT CÓ NHÃN FEAR OF GOD Ở CHÍNH GIỮA MẶT TRƯỚC
            </div>
            <div className="more-content">
                <Accordion>
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
                            <li>MADE IN ITALY</li>
                            <li>EGYPTIAN COTTON</li>
                            <li>FEAR OF GOD LABEL</li>
                        </ul>
                    </Typography>
                    </AccordionDetails>
                </Accordion>
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

export default index;