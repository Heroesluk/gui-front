import {Button, ButtonGroup, Paper, Typography} from "@mui/material";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import mockData from "../tests/mock_desktop.json";
import mockData2 from "../tests/mock_desktop2.json";
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import {useState} from "react";


export const SystemInfoComponent = () => {
    const dt: SystemInfo = mockData
    const pcList: SystemInfo[] = [dt, mockData2]


    const [curentPC, setCurrentPC] = useState<SystemInfo>(dt)

    const setCurrentFromId = (pc: string) => {

        pcList.forEach((item) => {
            if (item.node === pc) {
                setCurrentPC(item)
            }``
        })
    }


    return <>
        <div className="flex items-center space-x-2">
            <DisplaySettingsIcon fontSize="large"/>
            <Typography variant="h4">System info: </Typography>
        </div>
        <Paper elevation={3} className="pt-0 pl-0 pr-10 pb-10 mt-5">
            <PcSelectionGroup onClick={setCurrentFromId}></PcSelectionGroup>

            <InfoList {...curentPC} />
        </Paper>

    </>
}


export function InfoList(data: SystemInfo) {
    return (
        <>
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

export interface PcSelectionGroupProps {
    onClick: any

}

export const PcSelectionGroup = (basicProps: PcSelectionGroupProps) => {
    const pcs = ["DESKTOP-8T7FU57", "DESKTOP-ABCFU57", "DESKTOP-8T7FU57", "DESKTOP-ABCFU57", "DESKTOP-8T7FU57",]

    return (
        <ButtonGroup fullWidth>
            {
                pcs.map((pc) => {
                    return <Button onClick={() => {
                        basicProps.onClick(pc)
                    }}>{pc}</Button>
                })
            }
        </ButtonGroup>

    );
}