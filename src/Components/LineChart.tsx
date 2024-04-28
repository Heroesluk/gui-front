import {CartesianGrid, Label, Line, LineChart, Tooltip, XAxis, YAxis} from 'recharts';
import {formatData} from "../Utils/formatDate.ts";


interface CommonUsageChartProps {
    data: { timestamp: string, usage: number }[];
}

export const CommonUsageChart = (props: CommonUsageChartProps) => {
    return (
        <LineChart width={750} height={500} data={formatData(props.data)} margin={{bottom: 30}}>
            <Line type="monotone" dataKey="usage" dot={false} stroke="#8884d8" strokeWidth={1.2}/>
            <CartesianGrid stroke="#ccc"/>
            <XAxis dataKey="timestamp" tick={false} padding={{left: 5, right: 5}}>
                <Label value="Time" offset={0} position="insideBottom"/>
            </XAxis>
            <YAxis tickFormatter={(tick) => `${tick}%`} domain={[0, 100]}>
                <Label value="CPU Usage (%)" angle={-90} position="insideLeft"/>
            </YAxis>
            <Tooltip/>
        </LineChart>
    );
}

