import React, { useContext, useState } from 'react';
import PassengerContext from '../../Context/PassangerContext';
import { Passenger } from '../AddPassangers/Models';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import { passengerFormFieldsToFriendlyNames } from '../AddPassangers/PassangerConstants';

const PassengerChart = () => {
    const [xAxisValue, setXAxisValue] = useState<keyof Passenger>('age');
    const { passengers } = useContext(PassengerContext);

    const createSeries = () => passengers.map(passenger => [passenger[xAxisValue], passenger.surivialPercentage])

    const chartConfig: Highcharts.Options = {
        chart: {
            type: (xAxisValue === 'embarked' || xAxisValue === 'sex') ? 'bar' : 'scatter'
        },
        title: {
            text: `Surival Chance by ${passengerFormFieldsToFriendlyNames[xAxisValue]}`
        },
        series: [{
            type: (xAxisValue === 'embarked' || xAxisValue === 'sex') ? 'bar' : 'scatter',
            name: 'My first series',
            data: createSeries()
        }]
    };


    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={chartConfig}
        />
    );

}

export default PassengerChart;

