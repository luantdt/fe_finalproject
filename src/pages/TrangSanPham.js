import React from 'react';

const TrangSanPham = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="col-sm-2 list-search">
                    <form action="" method="POST" role="form">
                    
                        <div className='select-gender'>
                            <legend>Giới tính</legend>
                            <select name="" id="input" class="form-control" required="required">
                                <option value="nam">Nam</option>
                                <option value="nu">Nữ</option>
                            </select>
                        </div>

                        <div className='select-price'>
                            <legend>Giá tiền</legend>
                            <div class="form-group">
                                <label for="">Từ</label>
                                <input type="text" class="form-control" id="" placeholder="Input field" />
                                <label for="">Đến</label>
                                <input type="text" class="form-control" id="" placeholder="Input field" />
                            </div>   
                        </div>
                        
                        <div className='select-prioritize'>
                            <legend>Ưu tiên</legend>
                            
                            <div class="radio">
                                <label>
                                    <input type="radio" name="prioritize" id="input" value="" checked="checked" />
                                    Giá giảm dần
                                </label>
                                <label>
                                    <input type="radio" name="prioritize" id="input" value="" />
                                    Giá tăng dần
                                </label>
                                <label>
                                    <input type="radio" name="prioritize" id="input" value="" />
                                    Từ A đến Z
                                </label>
                                <label>
                                    <input type="radio" name="prioritize" id="input" value="" />
                                    Từ Z đến A
                                </label>
                                <label>
                                    <input type="radio" name="prioritize" id="input" value="" />
                                    Hàng mới
                                </label>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">Áp dụng</button>
                    </form>
                    
                    
                </div>
                <div className="col-sm-10">
                    <div className="row">
                        <div className="col-sm-3">

                        </div>
                        <div className="col-sm-3">
                            
                        </div>
                        <div className="col-sm-3">
                            
                        </div>
                        <div className="col-sm-3">
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TrangSanPham;