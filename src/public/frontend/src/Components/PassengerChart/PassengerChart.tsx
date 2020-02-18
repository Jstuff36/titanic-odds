import React, { useContext, useState } from 'react';
import PassengerContext from '../../Context/PassengerContext';
import { Passenger } from '../AddPassengers/Models';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import AxisDropdown from './AxisDropdown';
import { scatterPlotConfig, scatterWithSeries } from './ChartConfigs';

const PassengerChart = () => {
    const [xAxisValue, setXAxisValue] = useState<keyof Passenger>('age');
    const { passengers } = useContext(PassengerContext);

    const chartConfig: Highcharts.Options = (xAxisValue === 'embarked' || xAxisValue === 'sex') ?
        scatterWithSeries(passengers, xAxisValue)
        :
        scatterPlotConfig(passengers, xAxisValue);


    return (
        <div>
            <AxisDropdown selectedDropdownOption={xAxisValue} setDropdownOption={setXAxisValue} />
            <HighchartsReact
                highcharts={Highcharts}
                options={chartConfig}
            />
        </div>
    );

}

export default PassengerChart;

