
import axios from 'axios';
import { Passenger } from './Components/AddPassengers/Models';

export const fetchPassengers = (setPassengers: (passengers: Passenger[]) => void) =>
    axios.get<Passenger[]>('/api/v1/passengar')
            .then(({ data }) => setPassengers(data))