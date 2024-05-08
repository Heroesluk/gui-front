import {Button, ButtonGroup, Paper} from "@mui/material";
import  {useState} from "react";
import {RefreshingCpuLineChart} from "../Components/RefreshingChart.tsx";


export const DashboardPage = () => {
    const [type, setType] = useState("CPU")
    // const state = {"CPU": }

    return <>
        <ButtonGroup fullWidth className="pb-2">
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
        <div className="flex justify-center">
            <Paper elevation={3} className="pt-20 pl-5 pr-20 pb-5">
                <RefreshingCpuLineChart height={580} width={700} type={type}></RefreshingCpuLineChart>



            </Paper>

        </div>


    </>

}

