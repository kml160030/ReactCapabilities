import { useState } from "react";
import "./Login.css";
import axios from 'axios';
import { useSelector } from 'react-redux';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const [loginAttempt, setLoginAttempt] = useState(false);
    //const authorized = useSelector(state => state.authorized);

    //console.log("authorized ", authorized);

    const changeUsername = (event) => {
        setUsername(event.target.value);
    }

    const changePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event)=> {
        event.preventDefault();

        axios.get("https://localhost:44463/login",
            {
                params:
                {
                    username: username,
                    password: password
                }
            })
            .then((response) => {
                console.log("result: ", response.data);
                setLoginAttempt(true);
                if (response.data === "Authorized") {
                    console.log(response.data);
                    setLoggedIn(true);

                }
                else {
                    console.log("inside else statement");
                    setLoggedIn(false);
                    alert("you were unable to login");
                }
            });
    }

    return (
        <div>
            {/*<div className="exampleReduxStore">*/}
            {/*    something {authorized}*/}
            {/*</div>*/}
            {loggedIn ? (
                <a href = "/Grid">You are logged in</a>
            ):
            (<form onSubmit={handleSubmit}>
                <label>
                    <h5>Username</h5>
                    <input placeholder="username" onChange={changeUsername} />
                </label>
                <br />
                <label>
                    <h5>Password</h5>
                    <input placeholder="password" onChange={changePassword} />
                </label>
                <br />
                <button type="submit"> Submit </button>
            </form>)
            }
        </div>
    )
}

export default Login;