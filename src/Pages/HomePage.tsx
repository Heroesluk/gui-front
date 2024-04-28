import {CommonLineChart} from "../Components/LineChart.tsx";

import cpu_data from '../tests/cpu_mock.json'
import disk_data from '../tests/mock_disk.json'
import network_data from '../tests/mock_network.json'
import ram_data from '../tests/mock_ram.json'
import {Typography} from "@mui/material";
import {ButtonAppBar} from "../Components/TopBanner.tsx";


const formatRamData = (data: RamData[]) => {
    return data.map(item => ({
        ...item,
        total: item.total / 1024,
        used: item.used / 1024
    }));
}

const colors = ["#65F300", "#FF5900"]

export const HomePage = () => {

    return <>
        <ButtonAppBar loggedIn={true}></ButtonAppBar>
        <div className="flex flex-col items-center pt-10">
            <div className="flex w-full justify-left pl-96"><Typography variant="h4">Summary:</Typography>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <CommonLineChart label="Cpu usage in %" data={cpu_data} line_keywords={["usage"]}
                                 colors={colors}></CommonLineChart>
                <CommonLineChart label="Disk read/write in kilobyes" data={disk_data} line_keywords={["read", "sent"]}
                                 colors={colors}></CommonLineChart>
                <CommonLineChart label="Network sent/recieve in kilobytes" data={network_data}
                                 line_keywords={["recieved", "sent"]}
                                 colors={colors}></CommonLineChart>
                <CommonLineChart label="Ram usage in kilobytes" data={formatRamData(ram_data)} line_keywords={["used"]}
                                 colors={colors}></CommonLineChart>
            </div>


        </div>
    </>
}
