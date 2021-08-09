import React,{useState} from 'react'
import { authenticateSignUp,authenticateLogin } from '../services/api';
import {Dialog,DialogContent,makeStyles,Box, Typography, Button,TextField} from '@material-ui/core';

const useStyles = makeStyles({
    container:{
        height:'70vh',width:'50vw'
     
    },
    login:{
    padding:'0px 20px' ,
    '& > *':
    {
        marginTop:20,
    }

    },
    agree:{
      fontSize:12,
      color:'#878787',  
    },
    loginBtn:{
        textTransform:'none',
        background:'#fb641b',
        color:'#ffffff',
        width:'100%',
        borderRadius:2,
      
      
    },
    resetBtn:{
        textTransform:'none',
        background:'#ffffff',
        color:'#2874f0',
        width:'100%',
        borderRadius:2,
    },
    createAcc:{
        textAlign:'center',
        fontSize:14,
        color:'#2874f0',
        fontWeight:600,
        cursor:'pointer'

    },
    txt:{
        width:'100%',
    },
    image:{
        backgroundImage:`url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
        height:'70vh',
        width:'40%',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center 80%',
        background:'#2874f0',
        padding:20,
        
        '& > *':
        {
            color:'#fff',
          
        }

    },
    error:{
        fontSize:12,
        fontWeight:600,
        color:'red'
    }
})

const initialValue = {
    login:{
        view:'login',
        heading:'Login',
        subHeading:'Get access to your Orders, Wishlist and Recommendations',
    },
    
    signup:{
        view:'signup',
        heading:'Looks Like you are new here',
        subHeading:'Sign up with your mobile no to get started',
    }
}

const initialSignupValues = {
    fullname:'',
   
    username:'',
    email:'',
    password:'',
    phone:''
}

const loginInitialValues = {
    username:'',
    password:''
}


const Login = ({open ,setOpen,setLoggedIn}) => {
    const classes = useStyles();
    const [signup,setSignup]= useState(initialSignupValues);
    const [account,setAccount]= useState(initialValue.login);
    const [login,setLogin] = useState(loginInitialValues)
    const [error,setError] = useState(false)

    const handleClose=()=>{
        setOpen(false)
        setAccount(initialValue.login)
    }
    const toRegister=()=>{
        setAccount(initialValue.signup);
    }

   
    const onInputChange=(e)=>{
        setSignup({...signup,[e.target.name]:e.target.value})
        console.log(signup);
    }
    const userValuesChange=(e)=>
    {
        setLogin({...login,[e.target.name]:e.target.value})
    }
    const onSignUp = async()=>{
        const res = await authenticateSignUp(signup);
        if(!res)
        {
            return;
        }
      handleClose();
      setLoggedIn(signup.username)
    }

    const loginUser = async()=>{
        let res = await authenticateLogin(login);
        if(!res)
        {
            setError(true)
            return;
        }
        handleClose();
        setLoggedIn(login.username)
    }
   
    return (
      
        <Box  >
             <Dialog open = {open} onClose={handleClose}>
             <DialogContent className={classes.container}>
                 
            <Box style={{display:'flex'}}>

                <Box className={classes.image}>
                    <Typography variant="h5">{account.heading}</Typography>
                    <Typography style={{marginTop:20}} >{account.subHeading}</Typography>
                </Box>
                {
                    account.view === 'login' ?
                      <Box className={classes.login}>
                      <TextField name="username" label="Enter Username" className={classes.txt}
                      onChange = {(e)=>userValuesChange(e)}/>
                      <TextField name="password" label="Enter Password" className={classes.txt}
                       onChange = {(e)=>userValuesChange(e)}/>
                       {
                           error && <Typography className={classes.error}>Invalid Username or Password</Typography>
                       }
                      <Typography className={classes.agree}>By continuing , you agree to Flipkart's Terms of Use and Privacy Policy</Typography>
                      <Button variant="contained" className={classes.loginBtn}
                      onClick={()=>loginUser()}>Login</Button>
                      <Typography style={{textAlign:'center',color:'#878787',fontSize:12}}>OR</Typography>
                      <Button variant="contained" className={classes.resetBtn}>Request OTP</Button>
                      <Typography className={classes.createAcc} onClick={()=>toRegister()}>New To Flipkart ? Create an Account</Typography>
                  </Box>
                  :
                  <Box className={classes.login}>
                      <TextField name="fullname" label="Enter Your name" className={classes.txt}
                      onChange= {(e)=>onInputChange(e)}/>
                      <TextField name="username" label="Enter username" className={classes.txt}
                       onChange= {(e)=>onInputChange(e)}/>
                      <TextField name="email" label="Enter Email" className={classes.txt}
                       onChange= {(e)=>onInputChange(e)}/>
                       <TextField name="password" label="Enter Password" className={classes.txt}
                       onChange= {(e)=>onInputChange(e)}/>
                      <TextField name="phone" label="Enter Phone number " className={classes.txt}
                       onChange= {(e)=>onInputChange(e)}/>
                      <Button variant="contained" onClick={()=>onSignUp()} className={classes.loginBtn}>Register</Button>
                     
                  </Box>

                }
              
            </Box>
            
            </DialogContent>
             </Dialog>
        </Box>
    )
}

export default Login
