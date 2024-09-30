import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import requester from "../../api/requester";
import * as localStrg from "../../utils/localStrg";

import GeneralBanner from "../banners/GeneralBanner";

const initialValues = {
    email: "",
    password: "",
};

export default function Login() {
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const onSubmit = async (values) => {
        //todo: I have to validate the inputs and do error handling

        try {
            const result = await requester("POST", "http://127.0.0.1:3000/auth/login", values);

            const auth = {
                _id: result._id,
                name: result.name,
                email: result.email,
                accessToken: result.accessToken,
            };

            localStrg.set("auth", auth);

            navigate("/");

        } catch (error) {
            console.log(error.message);
            setError(error.message);

            setTimeout(() => {
                setError("");
            }, 2000)
        }
    };

    const { values, changeHandler, submitHandler } = useForm(initialValues, onSubmit);

    return (
        <>
            <GeneralBanner title="Login" />

            <div className="contact-us">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6" style={{ margin: "0 auto" }}>
                            <div className="section-heading" style={{ marginBottom: "20px" }}>
                                <h2>Some text</h2>
                                <span>Details to details is what makes <b>Neat Fashion</b> different from the other brands.</span>
                            </div>
                            <form id="login" onSubmit={submitHandler}>
                                <div className="row" style={{ display: "block" }}>

                                    {error &&
                                    <div className="section-heading" style={{ margin: "10px 0" }}>
                                        <span style={{ marginLeft: "15px", padding: "5px", color: "red", borderTop: "1px solid red", borderBottom: "1px solid red" }}>{error}</span>
                                    </div>
                                    }

                                    <div className="col-lg-6" style={{ margin: "10px 0" }}>
                                        <fieldset>
                                            <input
                                                name="email"
                                                type="text"
                                                id="email"
                                                placeholder="Your email"
                                                required=""
                                                value={values.email}
                                                onChange={changeHandler}
                                            />
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-6" style={{ margin: "10px 0" }}>
                                        <fieldset>
                                            <input
                                                name="password"
                                                type="password"
                                                placeholder="Your password"
                                                required=""
                                                value={values.password}
                                                onChange={changeHandler}
                                            />
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-12" style={{ margin: "10px 0" }}>
                                        <fieldset>
                                            <button type="submit" id="form-submit" style={{ width: "100px" }}>Login</button>
                                        </fieldset>
                                    </div>
                                    <div className="section-heading" style={{ margin: "10px 0" }}>
                                        <span style={{ paddingLeft: "15px" }}>If you don't have an account&nbsp;<a href="/register"
                                            className="redirect-btn">Register</a></span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};