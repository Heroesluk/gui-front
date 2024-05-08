import {CartesianGrid, Label, Line, LineChart, Tooltip, XAxis, YAxis} from 'recharts';
import {formatData} from "../Utils/formatDate.ts";


interface CommonUsageChartProps {
    data: DiskData[] | NetworkData[] | RamData[] | CpuData[];
    line_keywords: string[]
    colors: string[]
    label: string
    height: number
    width: number
}

export const CommonLineChart = (props: CommonUsageChartProps) => {
    const data = formatData(props.data)

    return (
        <div className="">
            <LineChart width={props.width} height={props.height} data={data} margin={{bottom: 30, right: 0, left: 20}}>
                {props.line_keywords.map((keyword, index) =>
                    <Line
                        isAnimationActive={false}
                        key={index}
                        type="monotone"
                        dataKey={keyword}
                        dot={false}
                        stroke={props.colors[index]}
                        strokeWidth={2}
                    />
                )}
                <CartesianGrid stroke="#ccc"/>
                <XAxis dataKey="timestamp" tick={false} padding={{left: 5}}>
                    <Label value={props.label} offset={0} position="insideBottom"/>
                </XAxis>
                <YAxis>
                </YAxis>
                <Tooltip/>
            </LineChart>
        </div>

    );
}

