import { Server } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';

class ApiServer extends Server {

    constructor() {
        super();
    }

    public start(port: number): void {
        this.app.listen(port, () => {
            Logger.Imp(`Server started on port: ${port}`);
        });
    }
}

export default ApiServer;