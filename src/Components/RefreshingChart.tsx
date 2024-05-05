import {useEffect, useState} from 'react';
import {CommonLineChart} from '../Components/LineChart.tsx';
import {fetchCpuData} from "../Utils/Connection.ts";


export interface RefreshingProps {
    type: string

}

export const RefreshingCpuLineChart = (refresingProps: RefreshingProps) => {

    const [data, setData] = useState<CpuData[] | RamData[] | DiskData[] | NetworkData[]>([]);

    useEffect(() => {
        const interval = setInterval(async () => {
            const newData = await fetchCpuData(refresingProps.type);
            setData(newData);
        }, 1000);

        return () => clearInterval(interval);
    }, [refresingProps.type]);


    if (refresingProps.type === "CPU") {
        return (
            <CommonLineChart label="Cpu usage in %" data={data} line_keywords={["usage"]}
                             colors={["#65F300", "#FF5900"]}></CommonLineChart>
        );
    } else if (refresingProps.type === "RAM") {
        return (
            <CommonLineChart label="Ram usage in MB/s" data={data} line_keywords={["used", "total"]}
                             colors={["#65F300", "#FF5900"]}></CommonLineChart>
        );
    } else if (refresingProps.type === "DISK") {
        return (
            <CommonLineChart label="Disk usage in KB/s" data={data} line_keywords={["read", "sent"]}
                             colors={["#65F300", "#FF5900"]}></CommonLineChart>
        );
    } else if (refresingProps.type === "NETWORK") {
        return (
            <CommonLineChart label="Network usage in KB/s" data={data} line_keywords={["recieved", "sent"]}
                             colors={["#65F300", "#FF5900"]}></CommonLineChart>
        );
    }
    ;
}


