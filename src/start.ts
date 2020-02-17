import ApiServer from './ApiServer';

if (process.argv[2] !== 'test') {
    let server = new ApiServer();
    server.start(3030);
} else {}