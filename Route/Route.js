import { fetchDataAll, fetchDataId, fetchDataContact, fetchDataAbout } from "../Controllers/Controller.js";

export const router = (req, res) => {
    if (req.url === "/" && req.method === "GET") {
        fetchDataAll(req, res); 
    }
    else if (req.url === "/user" && req.method === "GET") {
        fetchDataId(req, res); 
    }
    else if (req.url === "/contact" && req.method === "GET") {
        fetchDataContact(req, res); 
    }
    else if (req.url === "/about" && req.method === "GET") {
        fetchDataAbout(req, res); 
    }
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end("<h1>404 - Page Not Found</h1>");
    }
}
