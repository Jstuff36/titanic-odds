import { Passanger } from "./models";
import passengersDatastore from "../../database/setup";

export const addPassangers = (passangers: Passanger[]) => {
    passengersDatastore.insert(passangers);
};

export const getPassangers = (onQuerySuccess: (passangers: Passanger[]) => void): void => {
    return passengersDatastore.find({}, (err: Error, docs: Passanger[]) => {
        if (err) {
            throw new Error(err.message);
        } else {
            onQuerySuccess(docs);
        }
    })
}