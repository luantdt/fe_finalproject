import React from 'react';
import FormDangNhap from '../module/FormDangNhap';
import Alias from '../module/Alias';

const TrangDangNhap = () => {
    return (
        <>
            <Alias alias={[{'name':'Trang Chủ','link':'/'},{'name':'Đăng Nhập','link':'/tai-khoan'}]} />
            <div className="container">
                <FormDangNhap />
            </div>
        </>
    );
};

export default TrangDangNhap;