import { Passanger } from "./models";
import passengersDatastore from "../../database/setup";

export const addPassangers = (passangers: Passanger[]) => {
    passengersDatastore.insert(passangers);
};