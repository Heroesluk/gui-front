import {useEffect, useState} from 'react';
import {CommonLineChart} from '../Components/LineChart.tsx';
import {fetchCpuData} from "../Utils/Connection.ts";


export interface RefreshingProps {
    type: ChartType
    height: number
    width: number
    rangeSlider: boolean
}
export type ChartType = "CPU" | "RAM" | "DISK" | "NETWORK";


export const RefreshingCpuLineChart = (props: RefreshingProps) => {

    const [data, setData] = useState<CpuData[] | RamData[] | DiskData[] | NetworkData[]>([]);

    useEffect(() => {
        const interval = setInterval(async () => {
            const newData = await fetchCpuData(props.type);
            setData(newData);
        }, 1000);

        return () => clearInterval(interval);
    }, [props.type]);


    const chartConfigs = {
        "CPU": { label: "Cpu usage in %", line_keywords: ["usage"] },
        "RAM": { label: "Ram usage in MB/s", line_keywords: ["used", "total"] },
        "DISK": { label: "Disk usage in KB/s", line_keywords: ["read", "sent"] },
        "NETWORK": { label: "Network usage in KB/s", line_keywords: ["recieved", "sent"] },
    };

    const config = chartConfigs[props.type];

    return (
        <CommonLineChart
            height={props.height}
            width={props.width}
            label={config.label}
            data={data}
            line_keywords={config.line_keywords}
            colors={["#65F300", "#FF5900"]}
        />
    );
}


