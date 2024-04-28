import {formatData} from '../Utils/formatDate';

describe('formatData', () => {
    it('formats the timestamps to "mm:ss" format', () => {
        const data = [
            {
                "timestamp": "2024-04-22T16:58:20.044137",
                "usage": 10.5
            },
            {
                "timestamp": "2024-04-22T16:58:21.058292",
                "usage": 4.1
            }
        ];

        const result = formatData(data);

        expect(result[0].timestamp).toBe('58:20');
        expect(result[1].timestamp).toBe('58:21');
    });
});