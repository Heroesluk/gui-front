import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HomePage} from "./Pages/HomePage.tsx";
import {LoginPage} from "./Pages/LoginPage.tsx";
import {RegisterPage} from "./Pages/RegisterPage.tsx";
import {DashboardPage} from "./Pages/DashboardPage.tsx";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="login" element={<LoginPage/>}/>
                <Route path="register" element={<RegisterPage/>}/>
                <Route path="dashboard" element={<DashboardPage/>}/>

            </Routes>
        </BrowserRouter>
    )
}

export default App
