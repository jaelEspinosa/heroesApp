import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context"



export const LoginPage = () => {
   const [nombre, setNombre] = useState('')
   const { login } = useContext(AuthContext)
   const  navigate  = useNavigate()
  
  const onLogin = ()=>{
   if (nombre.trim() === '') return;
   const lastPath = localStorage.getItem('lastPath') || '/'
   login( nombre )

     navigate(lastPath,{
      replace:true
     });
  }
  return (
    <div
       className="container"
    >
    <h1>Login</h1>
    <hr/>
    <div>

    <input 
         className="m-5"
         type='text'
         value={ nombre }
         onChange={ e  => setNombre(e.target.value)}
         />
    <button
       onClick={onLogin}
       className="btn btn-primary"
       >Login
    </button>
    </div>
    </div>
  )
}
