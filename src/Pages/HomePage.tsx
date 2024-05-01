import {CommonLineChart} from "../Components/LineChart.tsx";

import cpu_data from '../tests/cpu_mock.json'
import disk_data from '../tests/mock_disk.json'
import network_data from '../tests/mock_network.json'
import ram_data from '../tests/mock_ram.json'
import {Drawer, Typography} from "@mui/material";
import {ButtonAppBar} from "../Components/TopBanner.tsx";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {useState} from "react";
import AssessmentIcon from '@mui/icons-material/Assessment';
import WarningIcon from '@mui/icons-material/Warning';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import InfoIcon from '@mui/icons-material/Info';
import {useNavigate} from "react-router-dom";

const formatRamData = (data: RamData[]) => {
    return data.map(item => ({
        ...item,
        total: item.total / 1024,
        used: item.used / 1024
    }));
}

const colors = ["#65F300", "#FF5900"]


export const HomePage = ({contentProp}) => {
    const navigate = useNavigate();


    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const text = ['My computers', 'Dashboard', 'Incidents', 'My account', 'Settings', 'About']

    const DrawerList = (
        <Box sx={{width: 250}} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                <ListItem key={text[0]} disablePadding>
                    <ListItemButton onClick={() => {
                        navigate("/systemInfo")
                    }}>
                        <ListItemIcon>
                            <DeveloperBoardIcon/>
                        </ListItemIcon>
                        <ListItemText primary={text[0]}/>
                    </ListItemButton>
                </ListItem>
                <ListItem key={text[1]} disablePadding>
                    <ListItemButton onClick={() => {
                        navigate("/dashboard")
                    }}>
                        <ListItemIcon>
                            <AssessmentIcon/>
                        </ListItemIcon>
                        <ListItemText primary={text[1]}/>
                    </ListItemButton>
                </ListItem>
                <ListItem key={text[2]} disablePadding>
                    <ListItemButton onClick={() => {
                        navigate("/incidents")
                    }}>
                        <ListItemIcon>
                            <WarningIcon/>
                        </ListItemIcon>
                        <ListItemText primary={text[2]}/>
                    </ListItemButton>
                </ListItem>
                <Divider></Divider>
                <ListItem key={text[3]} disablePadding>
                    <ListItemButton onClick={() => {
                        navigate("/account")
                    }}>
                        <ListItemIcon>
                            <AccountCircleIcon/>
                        </ListItemIcon>
                        <ListItemText primary={text[3]}/>
                    </ListItemButton>
                </ListItem>
                <ListItem key={text[4]} disablePadding>
                    <ListItemButton onClick={() => {
                        navigate("/settings")
                    }}>
                        <ListItemIcon>
                            <SettingsIcon/>
                        </ListItemIcon>
                        <ListItemText primary={text[4]}/>
                    </ListItemButton>
                </ListItem>
                <ListItem key={text[5]} disablePadding>
                    <ListItemButton onClick={() => {
                        navigate("/info")
                    }}>
                        <ListItemIcon>
                            <InfoIcon/>
                        </ListItemIcon>
                        <ListItemText primary={text[5]}/>
                    </ListItemButton>
                </ListItem>

            </List>
            <Divider/>
        </Box>
    );


    return <>
        <ButtonAppBar loggedIn={true} toggleDrawer={toggleDrawer(true)}></ButtonAppBar>
        <Drawer open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
        </Drawer>
        <div className="flex flex-col items-center">
            <div className="flex flex-col pt-10 w-2/3">
                {contentProp}

            </div>
        </div>
    </>


}

export const Content = () => {
    return <>
        <div className="flex w-full justify-left text-left pb-5"><Typography variant="h3">Summary:</Typography>
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
    </>


}

