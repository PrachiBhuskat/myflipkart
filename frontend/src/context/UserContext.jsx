import React,{createContext,useState} from 'react'

export const LoginContext = createContext(null);

const UserContext = ({children}) => {
    const [loggedIn,setLoggedIn] = useState('');
    return (
        <LoginContext.Provider
        value = {{loggedIn,setLoggedIn}}>
            {children}
        </LoginContext.Provider>
    )
}

export default UserContext
