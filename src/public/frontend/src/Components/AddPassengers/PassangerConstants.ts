import { DropdownItemProps } from "semantic-ui-react";
import { Passenger } from "./Models";

export const passengerFormFieldsToFriendlyNames: { [key in keyof Passenger]: string } = {
    id: "ID",
    pClass: "Ticket Class",
    sex: "Sex",
    age: "Age",
    numberOfSiblingsOrSpousesAboard: "Number of Siblings or Spouses Aboard",
    numberOfParentsOrChildrenAboard: "Number of Parents or Children Aboard",
    ticketNumber: "Ticket Number",
    fare: "Passanger Fare",
    cabin: "Cabin Number",
    embarked: "Port of Embarkation",
}

export const PASSANGER_FORM_INITIAL_STATE: Passenger = {
    id: '',
    pClass: '',
    sex: '',
    age: '',
    numberOfSiblingsOrSpousesAboard: '',
    numberOfParentsOrChildrenAboard: '',
    ticketNumber: '',
    fare: '',
    cabin: '',
    embarked: ''
}

export const GENDER_DROPDOWN_ITEMS: DropdownItemProps[] = [
    {
        text: 'male',
    },
    {
        text: 'femlae',
    }
];

export const EMBARKED_LOCATIONS: DropdownItemProps[] = [
    {
        text: 'Cherbourg'
    },
    {
        text: 'Queenstown'
    },
    {
        text: 'Southampton'
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