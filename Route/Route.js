import { fetchDataAll, fetchDataId, fetchDataContact, fetchDataAbout } from "../Controllers/Controller.js";

export const router = (req, res) => {
    const url = req.url.split('?')[0]; 
    const method = req.method;

    // Handle dynamic user ID: /user/:id
    if (url.startsWith("/user/") && method === "GET") {
        const id = url.split("/")[2]; 
        fetchDataId(req, res, id); 
    }
    else if (url === "/" && method === "GET") {
        fetchDataAll(req, res);
    }
    else if (url === "/contact" && method === "GET") {
        fetchDataContact(req, res);
    }
    else if (url === "/about" && method === "GET") {
        fetchDataAbout(req, res);
    }
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ message: "404 - Page Not Found" }));
    }
}
