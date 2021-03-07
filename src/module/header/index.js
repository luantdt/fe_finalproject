import React from 'react';

const header = () => {
    return (
        <>  
            
            <nav className="navbar navbar-expand-lg header">
                <div className="collapse navbar-collapse" id="navbarContent">
                   
                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        
                       
                        
                        <div class="row">
                            
                            <div class="col-sm-4">
                            <a href="#" className="">
                                <img src="./images/logo.png"  alt="Image" width="80"/>
                            </a>
                            </div>
                            <div class=" col-sm-8 ">
                            <h4>MISTER STORE</h4>
                                </div>
                           
                           
                        </div>
                        

                        
                        
                    </div>
                   
                    <div class=" col-sm-7 item-menu">
                        <ul className="navbar-nav mr-auto ">
                            
                            <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <li className="nav-item active ">
                                    <a className="nav-link" href="#">Áo</a>
                                </li>
                            </div>
                            <div class=" col-sm-2 ">
                                
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Quần</a>
                                </li>
                            </div>
                            <div class="col-sm-3">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Phụ kiện</a>
                                </li>
                            </div>
                            <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <li className="nav-item ">
                                    <a className="nav-link" href="#">Sale <span className="sr-only">(current)</span></a>
                                </li>
                            </div>
                            <div class=" col-sm-3 ">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Liên hệ</a>
                                </li>
                            </div>
                           
                            
                            
                            
                        </ul>
                   </div>
                   
                </div>
            </nav>
        </>
    );
};

export default header;