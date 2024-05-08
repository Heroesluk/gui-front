import axios from 'axios';
import {Snapshot} from "../types/snapshot.ts";


const url = "http://127.0.0.1:8000/Stats/"
const user_id = "1"

export const fetchCpuData = async (type: string) => {
    const now = new Date();
    now.setMinutes(now.getMinutes() - 1);
    now.setHours(now.getHours() + 2)
    const period_start = now.toISOString().split('.')[0];

    try {
        const response = await axios.get<CpuData[] | RamData[] | NetworkData[] | DiskData[]>(url + type + "?user_id=" + user_id, {
            params: {
                period_start
            }
        });
        return response.data;
    } catch (error) {
        return []
        console.error(error);
    }
};


export const fetchBannerValues = async () => {
    const now = new Date();
    now.setMinutes(now.getMinutes() - 1);
    now.setHours(now.getHours() + 2)
    const period_start = now.toISOString().split('.')[0];

    try {
        const response = await axios.get<Snapshot>(url + "SNAPSHOT" + "?user_id=" + user_id, {
            params: {
                period_start
            }
        });
        return response.data;
    } catch (error) {
        return {}
        console.error(error);
    }
};