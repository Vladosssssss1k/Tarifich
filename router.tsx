import { BrowserRouter, Route, Routes } from "react-router-dom";
import Preview from "./components/preview";
import Auth from "./components/auth";
import SignUp from "./components/singUp";
import Home from "./components/home";
import Account from "./components/account";
import Messenger from "./components/messenger";
import Tariffs from "./components/tariffs";
import SimCard from "./components/simCard";
import App from "./components/modal";

const Router = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route element={<Preview/>} path="/"/>
                <Route element={<Auth/>} path="/auth"/>
                <Route element={<SignUp/>} path="/signUp"/>
                <Route element={<Home/>} path="/home"/>
                <Route element={<Account/>} path="/account"/>
                <Route element={<Messenger/>} path="/messenger"/>
                <Route element={<Tariffs/>} path="/tariffs"/>
                <Route element={<SimCard/>} path="/sim-cards"/>
                <Route element={<App/>} path="/modal"/>
            </Routes>
        </BrowserRouter>
     );
}
 
export default Router;