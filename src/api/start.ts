import ApiServer from './ApiServer';
import { Logger } from '@overnightjs/logger';

// Start the server or run tests
if (process.env.NODE_ENV !== 'testing') {

    const server = new ApiServer();
    server.start(process.env.NODE_ENV === 'development' ? 3030 : 8081);

} else {

    const Jasmine = require('jasmine');
    const jasmine = new Jasmine();

    jasmine.loadConfig({
        "spec_dir": "./",
        "spec_files": [
            "./controllers/**/*.test.ts"
        ],
        "stopSpecOnExpectationFailure": false,
        "random": true
    });

    jasmine.onComplete((passed: boolean) => {
        if (passed) {
            Logger.Info('All tests have passed :)');
        } else {
            Logger.Err('At least one test has failed :(');
        }
    });

    let testPath = process.argv[2];

    if (testPath) {
        testPath = `./${testPath}.test.ts`;
        jasmine.execute([testPath]);
    } else {
        jasmine.execute();
    }
}