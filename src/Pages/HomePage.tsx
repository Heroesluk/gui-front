import {CommonUsageChart} from "../Components/LineChart.tsx";

import cpu_data from '../tests/cpu_mock.json'
import ram_data from '../tests/mock_ram.json'


export const HomePage = () => {
    return <>
        <div className="flex">
            <CommonUsageChart data={cpu_data}></CommonUsageChart>
            <CommonUsageChart data={ram_data}></CommonUsageChart>
        </div>

    </>
}

