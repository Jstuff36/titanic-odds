
import * as supertest from 'supertest';
import { } from 'jasmine';
import { OK, BAD_REQUEST } from 'http-status-codes';
import { SuperTest, Test } from 'supertest';
import { Logger } from '@overnightjs/logger';
import TestServer from '../shared/TestServer.test';
import PassengerController from './PassengerController';
import { Passenger } from './models';
import { getPassangers } from './PassengerService';
import passengersDatastore from '../../database/setup';

describe('PassengerController', () => {

    const passengerController = new PassengerController();
    let agent: SuperTest<Test>;

    beforeAll(done => {
        const server = new TestServer();
        server.setController(passengerController);
        agent = supertest.agent(server.getExpressInstance());
        done();
    });

    describe("api/v1/passengar", () => {

        const passenger: Passenger = {
            id: '1',
            age: '25',
            cabin: 'a123',
            embarked: 'Q',
            fare: '55.55',
            numberOfParentsOrChildrenAboard: '0',
            numberOfSiblingsOrSpousesAboard: '1',
            pClass: '1',
            sex: 'male',
            ticketNumber: '12321',
            surivialPercentage: 0.5
        };

        it(`should be able to fetch all passengers`, done => {
            const passengerController = new passengersDatastore();
            spyOn(passengerController, "find").and.returnValue(passenger);
            agent.get('/api/v1/passengar')
                .end((err, res) => {
                    if (err) {
                        Logger.Err(err, true);
                    }
                    Logger.Info(res)
                    expect(res.status).toBe(OK);
                    expect(res.body).toBe(passenger);
                    done();
                });
        });

        it(`it should be able to add passengers`, done => {

            agent.post('/api/v1/passengar')
                .end((err, res) => {
                    if (err) {
                        Logger.Err(err, true);
                    }
                    expect(res.status).toBe(OK);
                    expect(res.body).toBe(passenger);
                    done();
                });
        });
    });
});