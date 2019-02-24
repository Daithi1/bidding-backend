"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Hapi = require("hapi");
const server = new Hapi.Server({
    host: 'localhost',
    port: 8000,
});
server.route({
    method: 'GET',
    path: '/hello',
    handler: (request, h) => "Helo You",
});
const start = () => __awaiter(this, void 0, void 0, function* () {
    try {
        yield server.start();
    }
    catch (error) {
        console.error(error);
        process.exit(1);
    }
    console.log('Server running at:', server.info.uri);
});
start();
//# sourceMappingURL=index.js.map