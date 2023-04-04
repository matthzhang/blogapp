import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="auth">
            <h1>Register</h1>
            <form>
                <input required type="text" placeholder="username" />
                <input required type="password" placeholder="password" />
                <input required type="email" placeholder="email" />
                <button>Register</button>
                <p>This is an error</p>
                <span>Have an account? <Link to="/login">Register</Link></span>
            </form>
        </div>
    );
}

export default Register;