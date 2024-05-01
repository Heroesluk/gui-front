import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Content, HomePage} from "./Pages/HomePage.tsx";
import {LoginPage} from "./Pages/LoginPage.tsx";
import {RegisterPage} from "./Pages/RegisterPage.tsx";
import {DashboardPage} from "./Pages/DashboardPage.tsx";
import {SystemInfoComponent} from "./Pages/SystemInfoPage.tsx";
import {SettingsPage} from "./Pages/SettingsPage.tsx";
import {AboutPage} from "./Pages/AboutPage.tsx";
import {AccountInfoPage} from "./Pages/AccountInfoPage.tsx";
import {IncidentsPage} from "./Pages/IncidentsPage.tsx";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage contentProp={<Content></Content>}/>}/>
                <Route path="login" element={<HomePage contentProp={<LoginPage></LoginPage>}/>}/>
                <Route path="register" element={<HomePage contentProp={<RegisterPage></RegisterPage>}/>}/>
                <Route path="dashboard" element={<HomePage contentProp={<DashboardPage></DashboardPage>}/>}/>
                <Route path="systemInfo"
                       element={<HomePage contentProp={<SystemInfoComponent></SystemInfoComponent>}/>}/>
                <Route path="incidents" element={<HomePage contentProp={<IncidentsPage></IncidentsPage>}/>}/>
                <Route path="account" element={<HomePage contentProp={<AccountInfoPage></AccountInfoPage>}/>}/>
                <Route path="info" element={<HomePage contentProp={<AboutPage></AboutPage>}/>}/>
                <Route path="settings" element={<HomePage contentProp={<SettingsPage></SettingsPage>}/>}/>

            </Routes>
        </BrowserRouter>
    )
}

export default App
