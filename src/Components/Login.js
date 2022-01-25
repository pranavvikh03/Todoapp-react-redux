import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Components_CSS/Login.css";
import { loginAddToken } from '../state/action-creators/index';
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    // const token = useSelector(state => state.token)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleOnChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    const handleOnChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const validateDetails = async () => {
        if(Email.match(/^[a-zA-Z][a-zA-Z0-9]{0,20}([a-zA-Z0-9]{1,14}[\.+\_+\-]){0,4}[a-zA-Z0-9]{1,16}@([a-zA-Z0-9]{2,10}\.){1,5}[a-zA-Z]{2,8}$/))
        {
            if(Email==="pranavvikh03@gmail.com" && Password==="Pnv@123")
            {
                let data = await(await fetch("https://run.mocky.io/v3/afa1b987-0835-4ee1-9375-6f57caa5c609")).json();
                
                console.log(data);
                alert("Login Successful");
                dispatch(loginAddToken(data.token));
                localStorage.setItem("token",data.token);
                navigate("/",{replace:true})
            }
            else{
                alert("Invalid Login Credentials");
            }
        }
        else
        {
            alert("Invalid Email");
        }
    }
    return (
        <div className="LoginBox">
            <form >
                <div className="form-element-group">
                    <label>Username:</label>
                    <input type="text" name="username" value={Email} onChange={handleOnChangeEmail} placeholder="Enter Username" autoComplete="false" required/>
                </div>
                <div className="form-element-group">
                    <label>Password:</label>
                    <input type="password" name="password" value={Password} onChange={handleOnChangePassword} placeholder="Enter Password" autoComplete="false" required/>
                </div>
                <div className="form-element-group">
                    <input type="button" value="Login" onClick={validateDetails}name="login" />
                </div>
            </form>
        </div>
    );
}
export default Login;