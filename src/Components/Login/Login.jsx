import React from "react";
import "../Login/Login.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import img1 from "../../Images/channels4_profile.jpg";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [Data, setData] = useState({
        emailLogin: "",
        passwordLogin: "",
    });

    const [loginData, setLoginData] = useState([]);

    useEffect(() => {
        getLoginData();
    }, []);

    function handleInput(event) {
        const name = event.target.name;
        const value = event.target.value;
        setData({ ...Data, [name]: value });
    }

    async function getLoginData() {
        const result = await axios.get("http://localhost:3000/Users");
        setLoginData(result.data);

    }

    function checkLogin() {
        for (let i = 0; i < loginData.length; i++) {
            if (
                loginData[i].email === Data.emailLogin &&
                loginData[i].password === Data.passwordLogin
            ) {
                alert("Logined Successfully");
                localStorage.setItem("UserName", loginData[i].name);
                navigate("/");
            } else {
                alert("Logined Failed");
            }
        }
    }

    return (
        <>
            <div className="box11">
                <div className="mb-2" style={{ height: "55px" }}>
                    <img className="iconImage" src={img1} alt="Icon"></img>
                </div>
                <div className="box12">
                    <div className="col-md-5 box13">
                        <h3 style={{ marginBottom: "19px" }}>
                            <strong>Log in</strong>
                        </h3>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="emailLogin" className="form-label">
                                    <strong>Email</strong>
                                    <span className="box16">
                                        Need and Account?{" "}
                                        <Link to="/signup" style={{ color: "green" }}>
                                            Sign up
                                        </Link>
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="emailLogin"
                                    name="emailLogin"
                                    aria-describedby="emailHelp"
                                    onChange={(event) => {
                                        handleInput(event);
                                    }}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="passwordLogin" className="form-label">
                                    <strong>Password</strong>
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="passwordLogin"
                                    name="passwordLogin"
                                    onChange={(event) => {
                                        handleInput(event);
                                    }}
                                />
                            </div>
                            <div className="mb-3 box14">
                                <button
                                    type="button"
                                    className="btn btn-success loginButton"
                                    onClick={checkLogin}
                                >
                                    <strong>Log in</strong>
                                </button>
                            </div>
                            <div className="box15">
                                <Link style={{ color: "black" }} to="/" >
                                    Forget Password
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
