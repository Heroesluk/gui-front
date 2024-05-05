import {format, parseISO} from 'date-fns';


export const formatData = (data: DiskData[] | NetworkData[] | RamData[] | CpuData[]) => {
    return data.map(item => {
        if ('used' in item && 'total' in item) {
            return {
                'used': item.used / 1000,
                timestamp: format(parseISO(item.timestamp), 'mm:ss')
            };
        } else {
            return {
                ...item,
                timestamp: format(parseISO(item.timestamp), 'mm:ss')
            };
        }
    });
};