import React,{useState,useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const FormPaymentProduct = () => {
    const [ThongTinGioHang, setThongTinGioHang] = useState([]);
    const [dataForm,setDataForm] = useState({
        'receiver_phone': '',
        'full_name': '',
        'email': '',
        'receiver_address': '',
    });
    const [RedirectTo, setRedirectTo] = useState(false);
    const useStyles = makeStyles((theme) =>
        createStyles({
            root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '100%',
            },
            },
        }),
    );
    
    const handleSubmitForm = (event) => {
        event.preventDefault();
        //console.log('send form');
        //console.log(ThongTinGioHang);

        var post_data = dataForm;
        post_data.detail_orders = ThongTinGioHang;
        console.log(post_data);
        axios.post('http://localhost:4000/orders/',post_data)
        .then((response) => {
            localStorage.removeItem('cart');
            setTimeout(() => {
                setRedirectTo(true)
            },1000)
        })
        .catch((err) => {
            console.log(err);
        })
    }
    useEffect(() => {
        var string_mang_gio_hang = localStorage.getItem('cart');
        //console.log(string_mang_gio_hang);

        if(typeof string_mang_gio_hang != 'undefined' && string_mang_gio_hang != null){
            //console.log(JSON.parse(string_mang_gio_hang));
            var list_gio_hang = JSON.parse(string_mang_gio_hang);
            var list_chi_tiet_don_hang = [];

            list_gio_hang.forEach((item, index) => {
                list_chi_tiet_don_hang[index] = {
                    product_id: item.id,
                    product_name: item.name,
                    quantity: item.amount,
                    price: item.gia,
                    total: item.gia * item.amount
                };
            })

            setThongTinGioHang(list_chi_tiet_don_hang);
        }
    }, [])
    const handleChangeInput = (event) => {
        //console.log(event.target.name, event.target.value);
        setDataForm({
            ...dataForm,
            [event.target.name]: event.target.value
        });
    }
    const classes = useStyles();
    return (
        
        <div className="form-payment">
            {(RedirectTo)? <Redirect to='/' />: ''}
            <form onSubmit={handleSubmitForm} Validate autoComplete="off" role="form" className={classes.root}>
                <div className="title">
                    THANH TOÁN SẢN PHẨM
                </div>
                <div className="cont-input">
                    <TextField variant="outlined" required id="full_name" name="full_name" label="Họ và tên *" value={dataForm.name} onChange={handleChangeInput}/>
                    <TextField variant="outlined" required id="receiver_phone" name="receiver_phone"  label="Số điện thoại *" value={dataForm.phone} onChange={handleChangeInput}/>
                    <TextField variant="outlined" required id="email" name="email" label="Email *" value={dataForm.email} onChange={handleChangeInput}/>
                    <TextField variant="outlined" required id="receiver_address" name="receiver_address" label="Địa chỉ *" value={dataForm.address} onChange={handleChangeInput}/>
                </div>
                <div className="btn-payment">
                    <button type="submit" class="btn btn-primary">THANH TOÁN</button>
                </div>
            </form>
            
        </div>
    );
};

export default FormPaymentProduct;