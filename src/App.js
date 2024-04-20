import { useState } from "react";
import "./App.css";

function App() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false); // State to control password visibility
    const [showMessage, setShowMessage] = useState(false); // State to control message visibility

    const handleChange = (e) => {
        if (e.target.name === "username") {
            setUsername(e.target.value);
        } else if (e.target.name === "password") {
            setPassword(e.target.value);
        }
    };

    const handleSubmit = (e) => {
        setShowPassword(!showPassword);
        e.preventDefault();
        setShowMessage(true); // Show message on form submit
        setUsername("");
        setPassword("");
        // Hide message after 3 seconds
        setTimeout(() => {
            setShowMessage(false);
        }, 3000);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword); // Toggle password visibility
    };

    return (
        <>
            <div className="bgImg"></div>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <h1 style={{    marginLeft: 80}}>Login Page</h1>
                    <div className="ui divider"></div>
                    <div className="ui form">
                        <div className="field">
                            <label>Username</label>
                            <input
                                type="text"
                                name="username"
                                value={username}
                                placeholder="Choose a username"
                                onChange={handleChange}
                                required 
                            />
                        </div>
                        <div className="field">
                            <label>Password</label>
                            <div className="ui action input">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={password}
                                    placeholder="Password"
                                    onChange={handleChange}
                                    required 
                                />
                                <button
                                    type="button" // Specify button type to prevent form submission
                                    className="ui button icon"
                                    onClick={togglePasswordVisibility}
                                    tabIndex="-1"
                                    style={{width: 39}}
                                >
                                    {showPassword ? (
                                        <i className="eye slash icon"></i>
                                    ) : (
                                        <i className="eye icon"></i>
                                    )}
                                </button>
                            </div>
                        </div>
                        <button className="fluid ui button blue">Login</button>
                    </div>
                </form>
                {showMessage && (
                    <div className="ui message success">
                        Login Successful.
                    </div>
                )}
            </div>{" "}
        </>
    );
}

export default App;
