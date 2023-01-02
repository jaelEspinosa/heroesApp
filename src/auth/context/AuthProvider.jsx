import React, { useReducer } from 'react'
import { types } from '../types/types'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'


/* const initialState = {
    logged: false,
    user:{
      id:'',
      name:''
    }
} */

const init = () =>{
  const user = JSON.parse( localStorage.getItem('user') );
  return{
    logged: !!user,
    user
  }

}

export const AuthProvider = ({ children }) => {

    const [ authState, dispatch ] = useReducer( authReducer, {}, init)

  const login = (name = '')=>{
    dispatch({type: types.login, payload: {id: 'ABC', name: name }})

    localStorage.setItem('user', JSON.stringify ( {id:'ABC', name}))
  } 

  const logout = ()=>{
    localStorage.removeItem('user')
    dispatch({type: types.logout})
  }

  return (
    
    <AuthContext.Provider value={{ 
      ...authState,

      //methods
      
      login,
      logout
    }}>
        { children }
    </AuthContext.Provider>
  )
}
