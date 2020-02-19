import { Passenger } from "./models";
import passengersDatastore from "../../database/setup";

export const addPassangers = (passengers: Passenger[]) => {
    // Mock calling model api to get survival data
    const passengersWithSurvivalChance: Passenger[] = passengers.map(passenger => ({
        ...passenger,
        surivialPercentage: Math.random()
    }));
    passengersDatastore.insert(passengersWithSurvivalChance, (err: Error) => {
        throw new Error(err.message);
    });
    return passengersWithSurvivalChance;
};

export const getPassangers = (onQuerySuccess: (passangers: Passenger[]) => void): void => {
    return passengersDatastore.find({}, (err: Error, docs: Passenger[]) => {
        if (err) {
            throw new Error(err.message);
        } else {
            onQuerySuccess(docs);
        }
    })
}