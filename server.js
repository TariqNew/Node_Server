import http from "http";
import dotenv from "dotenv";
import { router } from "./Route/Route.js"

dotenv.config();

const PORT = process.env.PORT || 5000;

const server = http.createServer(router);

server.listen(PORT, () => {
    console.log(`The server is now running at port ${PORT}`);
});


