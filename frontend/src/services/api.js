import axios from 'axios'

const url = '/'

export const authenticateSignUp = async(user)=>{
    try{
        return axios.post(`${url}/signup`,user)
    }
    catch(err)
    {
        console.log('error while calling signup ');
    }
 
}

export const authenticateLogin = async(user)=>{
    try{
        return await axios.post(`${url}/login`,user)

    }
    catch(err)
    {
        console.log(err);
    }
}