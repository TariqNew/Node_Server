// fetchHandlers.js

const fetchDataAll = (req, res) => {
    res.statusCode = 200; // small 's'
    res.setHeader('Content-Type', 'text/html');
    const response = `<div>This is the All Data page</div>`;
    res.end(response);
};

const fetchDataId = (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    const response = `<div>This is the Data By ID page</div>`;
    res.end(response);
};

const fetchDataContact = (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    const response = `<div>This is the Contact page</div>`;
    res.end(response);
};

const fetchDataAbout = (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    const response = `<div>This is the About page</div>`;
    res.end(response);
};

// Export them all together
export { fetchDataAll, fetchDataId, fetchDataContact, fetchDataAbout };
