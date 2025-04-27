import http from "http";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 5000;

const requestHandler = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    
    // Default response object
    let response;

    if (req.method === "GET" && req.url === "/") {
        response = {
            name: "shacks",
            carrier: "developer"
        };
        res.statusCode = 200; // Success
    } else if (req.method === "GET" && req.url === "/about") {
        response = {
            name: "shacks",
            carrier: "developer of Ifm"
        };
        res.statusCode = 200; // Success
    } else {
        // Handling 404 for non-matching routes
        response = {
            error: "Page not found"
        };
        res.statusCode = 404; // Not found
    }

    // Sending the response as JSON
    res.end(JSON.stringify(response));
};

const server = http.createServer(requestHandler);

server.listen(PORT, () => {
    console.log(`The server is now running at port ${PORT}`);
});
