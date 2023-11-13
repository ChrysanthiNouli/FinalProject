import axios from "axios";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function handleLogin(e) {
         e.preventDefault();
        let res = await axios
        .post("http://localhost:8080/login", {email, password});
        alert(res.data.msg);
        navigate("/");
    } 

return (
    <div>
        <form onSubmit={handleLogin}>
            <h1>Log in</h1>
            <label>Email</label><br/>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/><br/>
                <label>Password</label><br/>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/><br/><br/>
                <input type="submit"/>
        </form>
    </div>
)


}

export default Login;