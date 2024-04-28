// utils.ts
import {format, parseISO} from 'date-fns';

export const formatData = (data: { timestamp: string, usage: number }[]) => {
    return data.map(item => ({
        ...item,
        timestamp: format(parseISO(item.timestamp), 'mm:ss')
    }));
}