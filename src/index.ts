import * as Hapi from "hapi";

const server: Hapi.Server = new Hapi.Server({
    host: 'localhost',
    port: 8000,
});

server.route({
    method: 'GET',
    path: '/hello',
    handler: (request, h) => "Helo You",
})

const start = async () => {
    try {
        await server.start();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
}

start();