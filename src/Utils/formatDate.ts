import {format, parseISO} from 'date-fns';

export const formatData = (data: DiskData[] | NetworkData[] | RamData[] | CpuData[]) => {
    return data.map(item => ({
        ...item,
        timestamp: format(parseISO(item.timestamp), 'mm:ss')
    }));
}