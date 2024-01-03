import {useDispatch} from "react-redux"
import { loginAction } from "./rootAction"

const Login = () => {

  const dispatch=useDispatch()


  const handleLogin=()=>{
    dispatch(loginAction())
  }

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
