import React, {createContext} from 'react';
const UserContext= createContext();
const UserContextProvider=({children})=>{
    const [user,setUser]= React.useState('');
    return(
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}
export{
    UserContext,
    UserContextProvider,
}