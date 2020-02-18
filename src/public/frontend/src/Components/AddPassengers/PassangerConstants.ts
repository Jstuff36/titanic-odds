import { DropdownItemProps } from "semantic-ui-react";
import { Passenger } from "./Models";

export const passengerPropertyToUserFriendlyName: { [key: string]: string } = {
    S: 'Southampton',
    Q: 'QueensTown',
    C: 'Cherbourg'
};

export const passengerFormFieldsToFriendlyNames: { [key in keyof Passenger]: string } = {
    id: "ID",
    sex: "Sex",
    embarked: "Port of Embarkation",
    age: "Age",
    numberOfSiblingsOrSpousesAboard: "Number of Siblings or Spouses Aboard",
    numberOfParentsOrChildrenAboard: "Number of Parents or Children Aboard",
    ticketNumber: "Ticket Number",
    fare: "Passanger Fare",
    cabin: "Cabin Number",
    pClass: "Ticket Class",
}

export const PASSANGER_FORM_INITIAL_STATE: Passenger = {
    id: '',
    pClass: '',
    embarked: 'Q',
    sex: 'male',
    age: '',
    numberOfSiblingsOrSpousesAboard: '',
    numberOfParentsOrChildrenAboard: '',
    ticketNumber: '',
    fare: '',
    cabin: '',
}

export const GENDER_DROPDOWN_ITEMS: DropdownItemProps[] = [
    {
        value: 'male',
        text: 'male',
    },
    {
        value: 'female',
        text: 'female',
    }
];

export const EMBARKED_LOCATIONS: DropdownItemProps[] = [
    {
        value: 'C',
        text: 'Cherbourg',
    },
    {
        value: 'Q',
        text: 'Queenstown',
    },
    {
        value: 'S',
        text: 'Southampton',
    }
]

export const IMPORT_OPTIONS = [
    {
        text: 'Import Passangers Information',
        value: 'import'
    },
    {
        text: 'Manually Enter Information',
        value: 'form'
    }
]