import {Drawer, Paper, Typography} from "@mui/material";
import {ButtonAppBar} from "../Components/TopBanner.tsx";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {useEffect, useState} from "react";
import AssessmentIcon from '@mui/icons-material/Assessment';
import WarningIcon from '@mui/icons-material/Warning';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import InfoIcon from '@mui/icons-material/Info';
import {useNavigate} from "react-router-dom";
import {RefreshingCpuLineChart} from "../Components/RefreshingChart.tsx";
import {fetchBannerValues} from "../Utils/Connection.ts";
import {Snapshot} from "../types/snapshot.ts";



export const HomePage = ({contentProp}) => {
    const navigate = useNavigate();


    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    }


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
    const [bannerData, setBannerData] = useState<Snapshot>({
        "cpu": {"average_cpu_load": 0, "since": ""},
        "ram": {"average_ram_usage": 0, "since": ""},
        "disk": {"total_sent": 0, "total_read": 0, "since": ""},
        "network": {"total_sent": 0, "total_received": 0, "since": ""}
    })


    useEffect(() => {
        const interval = setInterval(async () => {
            const newData = await fetchBannerValues();
            setBannerData(newData)

        }, 1000);

        return () => clearInterval(interval);
    }, []);


    return <div className="mb-10">
        <Paper elevation={3}>

            <div className="flex flex-row  justify-between pt-3 pb-5">
                <Paper elevation={3}>
                    <Box className="pt-5 pl-5 pb-5 pr-5 " display="flex">
                        <Typography className="pr-2" variant="h5">Avg Ram: </Typography>
                        <Typography fontWeight='bold'
                                    variant="h5">{Math.round(bannerData.ram.average_ram_usage / 1000)}MB</Typography>
                    </Box>
                </Paper>

                <Paper elevation={3}>
                    <Box className="pt-5 pl-5 pb-5 pr-5" display="flex">
                        <Typography className="pr-2" variant="h5">Disk read/sent: </Typography>
                        <Typography fontWeight='bold'
                                    variant="h5">{Math.round(bannerData.disk.total_read / 1000)}MB {Math.round(bannerData.disk.total_sent / 1000)}MB</Typography>
                    </Box>
                </Paper>
                <Paper elevation={3}>
                    <Box className="pt-5 pl-5 pb-5 pr-5" display="flex">
                        <Typography className="pr-2" variant="h5">Avg Cpu: </Typography>
                        <Typography fontWeight='bold'
                                    variant="h5">{Math.round(bannerData.cpu.average_cpu_load)}%</Typography>
                    </Box>
                </Paper>

                <Paper elevation={3}>
                    <Box className="pt-5 pl-5 pb-5 pr-5" display="flex">
                        <Typography className="pr-2" variant="h5">Network rec/sent: </Typography>
                        <Typography fontWeight='bold'
                                    variant="h5">{Math.round(bannerData.network.total_received) / 1000}MB  {Math.round(bannerData.network.total_sent) / 1000}MB</Typography>
                    </Box>
                </Paper>

            </div>

            <div className="grid grid-cols-2 gap-4">
                <RefreshingCpuLineChart height={360} width={500} type="RAM"></RefreshingCpuLineChart>
                <RefreshingCpuLineChart height={360} width={500} type="CPU"></RefreshingCpuLineChart>
                <RefreshingCpuLineChart height={360} width={500} type="NETWORK"></RefreshingCpuLineChart>
                <RefreshingCpuLineChart height={360} width={500} type="DISK"></RefreshingCpuLineChart>
            </div>

        </Paper>

    </div>


}

