import {Button, ButtonGroup} from "@mui/material";
import {useState} from "react";
import {RefreshingCpuLineChart} from "../Components/RefreshingChart.tsx";


export const DashboardPage = () => {
    const [type, setType] = useState("CPU")
    // const state = {"CPU": }

    return <>
        <ButtonGroup fullWidth>
            <Button onClick={() => setType("CPU")}>
                CPU
            </Button>
            <Button onClick={() => setType("RAM")}>
                RAM
            </Button>
            <Button onClick={() => setType("DISK")}>
                DISK
            </Button>
            <Button onClick={() => setType("NETWORK")}>
                NETWORK
            </Button>
        </ButtonGroup>
        <RefreshingCpuLineChart type={type}></RefreshingCpuLineChart>


    </>

}

