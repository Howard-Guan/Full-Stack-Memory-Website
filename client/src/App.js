import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import { useState } from "react";

const App = () =>{

    const adminUser = {
        username: process.env.REACT_APP_USER_NAME,
        password: process.env.REACT_APP_PASSWORD
    }

    const [user, setUser] = useState({name:"", password:""});

    const Login = details => {
        console.log(details);

        if (details.username === adminUser.username && details.password === adminUser.password){
            console.log("Login");
            setUser({
                name: details.name,
                password: details.password
            })
        }else{
            alert("account does not match");
            console.log(adminUser.username);
            console.log(adminUser.password);
        }
    }

    return (
        <div>
            {(user.password !== "") ? (
                <Home />
            ) : (
                <LoginPage Login={Login} />
            )}
        </div>
    );
}

export default App;