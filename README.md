# Titanic Odds

### Description

Titanic Odds is a single page web application where you can predict you and your friends chances of surviving a voyage on the ill fated maiden voyage Titanic.

### Getting started
If this is your first time using Titanic Odds, let's get started. After cloning the repo, navigate to `src/public/frontend` and run `yarn start` to spin up the frontend web server and backend API server. Now all you need is to add data from one of the options in the dropdown! You can either add passenger data manually or import data from an external file. For your convenience one has been provided under `/src/api/database/PassengerDataSet.csv`. Your data will now run through a machine learning and predict the chances of each passenger's survival. You can use the graph and table to explore relationships between various parameters and survival rates. \
**Note: The machine learning model is still being developed so the backend just randomly assign each passenger a  number between 0 and 1.** 

### Implementation Details
The frontend is written in React.JS and TypeScript. \
The backend is written in Node, Express, and TypeScript. \
[NeDB](https://github.com/louischatriot/nedb), an in-memory datastore, was chosen as the database to allow for rapid development. \
Testing is accomplished using Jest for the frontend and Jasmine for the backend.

### Future Work
* Call prediction API once development is complete.
* Add authorization
* Stricter validation on passenger inputs
* Use real DB such as MongoDB or PostGreSQL. (Need to explore benefits of relational vs non-relational database for this application)
* HighCharts is very a powerful graphing tool and it would be cool to use it to display the data in more powerful ways
* Ability to delete and update passenger data from the frontend
* Better error handling by both the frontend and backend
* Backend API needs to be more secure before this can be deployed on the public internet