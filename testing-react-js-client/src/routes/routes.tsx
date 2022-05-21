import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/loginPage";
import CadasterPage from "../pages/cadasterPage";
import GlobalStyle from "../styles/global";

const MainRoutes = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="/user/cadaster" element={<CadasterPage/>}/>
            </Routes>
            <GlobalStyle/>
        </BrowserRouter>
    );
};

export default MainRoutes;