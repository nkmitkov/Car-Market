import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import requester from "../api/requester";
import * as localStrg from "../utils/localStrg";

const AuthContext = createContext();

AuthContext.displayName = "AuthContext";

export const AuthProvider = ({
    children
}) => {
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    const onRegisterSubmit = async (values) => {
        //todo: I have to validate the inputs and do error handling

        try {
            const result = await requester("POST", "http://127.0.0.1:3000/auth/register", values);

            const auth = {
                _id: result._id,
                name: result.name,
                email: result.email,
                accessToken: result.accessToken,
            };

            setUser(auth);

            navigate("/");
        } catch (error) {
            console.log(error.message);
            // setError(error.message);

            // setTimeout(() => {
            //     setError("");
            // }, 2000)
        }
    };
    
    const onLoginSubmit = async (values) => {
        //todo: I have to validate the inputs and do error handling

        try {
            const result = await requester("POST", "http://127.0.0.1:3000/auth/login", values);

            const auth = {
                _id: result._id,
                name: result.name,
                email: result.email,
                accessToken: result.accessToken,
            };

            setUser(auth);

            navigate("/");

        } catch (error) {
            console.log(error.message);
            // setError(error.message);

            // setTimeout(() => {
            //     setError("");
            // }, 2000)
        }
    };

    const onLogout = () => {
        setUser({});
        navigate("/login");
    };

    const auth = {
        onRegisterSubmit,
        onLoginSubmit,
        onLogout,
        _id: user?._id,
        username: user?.username,
        email: user?.email,
        isAuthenticated: !!user?.accessToken,
    };
    
    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;