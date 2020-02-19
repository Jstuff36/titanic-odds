import React, { useContext } from 'react';
import { Passenger } from '../AddPassengers/Models';
import PassengerContext from '../../Context/PassengerContext';
import { List } from 'semantic-ui-react';

const Stats = () => {

    const { passengers } = useContext(PassengerContext);

    if (!passengers.length) {
        return null;
    }

    const getMedian = (sortedData) => {
        const dataLen = sortedData.length;
        if (dataLen === 1) {
            return sortedData[0];
        } else if (dataLen % 2 === 0) {
            return (sortedData[dataLen / 2 - 1] + sortedData[dataLen / 2]) / 2;
        } else {
            return sortedData[(dataLen - 1) / 2];
        }
    }

    const survivalDataAsNumbers: number[] = passengers.map(({surivialPercentage}) => parseFloat(surivialPercentage || '0'));
    const averageSurvivalRate = survivalDataAsNumbers.reduce((total, rate) => total + rate) / survivalDataAsNumbers.length;
    const sortedSurivalRate = survivalDataAsNumbers.slice().sort((a, b) => a - b);
    const medianSurivalRate = getMedian(sortedSurivalRate);


    return (
        <List size={'massive'}>
            <List.Item>{`Average Survival Rate: ${(averageSurvivalRate * 100).toFixed(2)}`}</List.Item>
            <List.Item>{`Median Surival Rate: ${(medianSurivalRate * 100).toFixed(2)}`}</List.Item>
        </List>
    )
};

export default Stats;