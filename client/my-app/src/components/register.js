import axios from "axios";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function Register() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function handleRegister(e) {
        e.preventDefault();
        let res = await axios
        .post("http://localhost:8080/register", {fullName, email, password});
        alert(res.data.msg);
        // navigate("/login");
    }
     return (
        <div>
            <form onSubmit={handleRegister}>
                <h1>Register</h1>
                <label>Full Name</label><br/>
                <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)}/><br/>
                <label>Email</label><br/>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/><br/>
                <label>Password</label><br/>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/><br/><br/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default Register;