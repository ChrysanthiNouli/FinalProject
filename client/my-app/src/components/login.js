import axios from "axios";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    let decoded;
    let token;

    async function handleLogin(e) {
        try {
            e.preventDefault();
        let res = await axios
        .post("http://localhost:8080/login", {email, password});
        console.log(res.data);
        // token = res.data;
        // localStorage.setItem("token", token);
        // decoded = jwtDecode(token);
        
            if ( res.status === 200 ) {
                alert(res.data.msg);
                localStorage.setItem("token", res.data.token);
                navigate("/");
            } else {
                return; 
            }
        } catch (err) {
            alert("Log in failed. Please check your email or password.");
        }
    } 

return (
    <div>
        <form onSubmit={handleLogin}>
            <h1>Log in</h1>
            {token && <p>{decoded.email}</p>}
                <label htmlFor="email">Email</label><br/>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/><br/>
                <label htmlFor="password">Password</label><br/>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/><br/><br/>
                <input type="submit" value="Log in"/>
        </form>
    </div>
    )
}

export default Login;