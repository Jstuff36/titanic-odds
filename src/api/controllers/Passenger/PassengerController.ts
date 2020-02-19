import { OK, BAD_REQUEST } from 'http-status-codes';
import { Controller, Post, Get } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { Request, Response } from 'express';
import { Passenger } from './models';
import { addPassangers, getPassangers } from './PassengerService';

@Controller('api/v1/passengar')
class PassengerController {

    @Get()
    private getAll(_: Request, res: Response) {
        try {
            Logger.Info(`Getting all passengers`);
            const onQuerySuccess = (passengers: Passenger[]) => {
                Logger.Info(`Retrieved ${passengers.length} passengers`);
                return res.status(OK).json(passengers);
            }
            getPassangers(onQuerySuccess);
        } catch (err) {
            Logger.Err(err, true);
            return res.status(BAD_REQUEST).json({
                error: err.message,
            });
        }
    }

    @Post()
    private passengers(req: Request, res: Response) {
        try {
            const passengers: Passenger[] = req.body;
            Logger.Info(`Adding ${passengers.length} passengers`);
            addPassangers(passengers);
            Logger.Info(`Added ${passengers.length} passengers`);
            return res.status(OK).json(passengers);
        } catch (err) {
            Logger.Err(err, true);
            return res.status(BAD_REQUEST).json({
                error: err.message,
            });
        }
    }
}

export default PassengerController;