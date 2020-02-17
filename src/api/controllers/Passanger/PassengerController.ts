import { OK, BAD_REQUEST } from 'http-status-codes';
import { Controller, Post } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { Request, Response } from 'express';
import { Passanger } from './models';
import { addPassangers } from './PassangerService';

@Controller('api/v1/passengar')
class PassengerController {

    @Post()
    private passengers(req: Request, res: Response) {
        try {
            const passengers: Passanger[] = req.body;
            addPassangers(passengers);
            Logger.Info('Added' + passengers);
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