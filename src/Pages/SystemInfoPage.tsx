import {Typography} from "@mui/material";
import {ButtonAppBar} from "../Components/TopBanner.tsx";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import mockData from "../tests/mock_desktop.json";
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';

export const SystemInfoPage = () => {

    const dt: SystemInfo = mockData


    return <>
        <ButtonAppBar loggedIn={true}/>
        <SystemInfoComponent {...dt}/>
    </>
}

export const SystemInfoComponent = (data: SystemInfo) => {

    return <div className="flex flex-col items-left pt-24 w-full ml-96">
        <div className="pl-1/3">
            <div className="flex items-center space-x-2">
                <DisplaySettingsIcon fontSize="large"/>
                <Typography variant="h4">System info: </Typography>
            </div>
            <InfoList {...data} />
        </div>
    </div>
}


export function InfoList(data: SystemInfo) {
    return (
        <>
            <BasicList></BasicList>
            <Box maxWidth={500}>
                <nav aria-label="System">
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary={"OS: " + data.system + " " + data.release}/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary={"System version: " + data.version}/>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </nav>
                <Divider/>
                <nav aria-label="CPU">
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary={"Machine type: " + data.machine}/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary={"Processor: " + data.processor}/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#simple-list">
                                <ListItemText primary={"Physical cores: " + data.physical_cores}/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#simple-list">
                                <ListItemText primary={"Logical cores: " + data.logical_cores}/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#simple-list">
                                <ListItemText primary={"Cpu frequency: " + data.cpu_freq + "MHz"}/>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </nav>
                <Divider/>
                <nav aria-label="OTHER">
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary={"Total memory: " + data.total_memory}/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary={"Total disk size: " + data.total_disk_size}/>
                            </ListItemButton>
                        </ListItem>

                    </List>


                </nav>
            </Box>
        </>
    );

}


export const BasicList = () => {
    const pcs = ["PC1", "PC2", "PC3"]

    return (
        <Box sx={{width: '100%', maxWidth: 360}}>
            <nav aria-label="main mailbox folders">
                <List>
                    {
                        pcs.map((pc) => {
                            return <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary={pc}/>
                                </ListItemButton>
                            </ListItem>
                        })
                    }
                </List>
            </nav>

        </Box>
    );
}