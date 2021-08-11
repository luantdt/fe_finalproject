import React , {useState} from 'react';
import {Tabs,
        Tab,
        Typography,
        Box,
        makeStyles,
        Paper,
        TextField } from '@material-ui/core';
const FormDangNhap = () => {
    const [value, setValue] = React.useState(0);
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleSubmitForm = () => {

    }
    
    const [user,setUser] = useState(
        {
            'id':'',
            'pass':''
        }
    );
    const handleChangeInput = (e) => {
        e.preventDefault();
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const TabPanel = (props) => {
        const { children, value, index, ...other } = props;

        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box p={3}>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
    }
    const a11yProps = (index) => {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }
    const useStyles = makeStyles(() => ({
        root: {
            flexGrow: 1,
            color: 'black',
        },
        papper: {
            padding: '10px 200px 50px 200px',
            textAlign: 'center',
            display: 'block',
        },
    }));
    const classes = useStyles();
    return (
        <div className={"form-dang-nhap margin70 " + classes.root}>
            
            <Tabs 
                value={value} 
                onChange={handleChange} 
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label="Đăng Nhập" {...a11yProps(0)} />
                <Tab label="Đăng Ký" {...a11yProps(1)} />
            
            </Tabs>
            
            <TabPanel value={value} index={0}>
                <Paper className={classes.papper}>
                    
                    <form action="" method="POST" role="form">
                        
                        <TextField
                            id="outlined-textarea"
                            label="Tài khoản"
                            multiline
                            variant="outlined"
                            fullWidth
                            style={{ marginTop: 30 }}
                        />
                        <TextField
                            id="outlined-textarea"
                            label="Mật khẩu"
                            type="password"        
                            autoComplete="current-password"
                            variant="outlined"
                            fullWidth
                            style={{ marginTop: 30 }}
                        />
                    
                        <button type="submit" className="btn-continue btn-login">Đăng nhập</button>
                    </form>
                    
                </Paper> 
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Paper className={classes.papper}>
                    Item Two  
                </Paper> 
            </TabPanel>
            
        </div>
    );
};

export default FormDangNhap;