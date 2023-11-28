import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components/register.css";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function handleRegister(e) {
        e.preventDefault();
        let res = await axios.post("http://localhost:8080/register", { username, email, password });
        alert(res.data.msg);
        navigate("/login");
    }
     return (
        <div className="formContainer">
            <form onSubmit={handleRegister}>
                <h1>Register</h1>
                <label  htmlFor="username"></label><br/>
                <input type="text" id="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/><br/>
                <label  htmlFor="email"></label><br/>
                <input type="email" placeholder="Email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/><br/>
                <label  htmlFor="password"></label><br/>
                <input type="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/><br/><br/>
                <input type="submit" value="Register"/>
                <a className="registerLinkToLogin" href="/login">Already have an account?</a>
            </form>
        </div>
    )
}

export default Register;