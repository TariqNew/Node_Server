import { responseHelper } from "../Utils/responseHelper.js";  // don't forget the `.js` if you're using ESModules

const fetchDataAll = (req, res) => {
    const response = { message: 'All data are fetched' };
    responseHelper(res, 200, response);
};

const fetchDataId = (req, res, id) => {
    const response = { message: `The id you requested is ${id}` };
    responseHelper(res, 200, response);
};

const fetchDataContact = (req, res) => {
    const response = { message: 'This is the Contact page' };
    responseHelper(res, 200, response);
};

const fetchDataAbout = (req, res) => {
    const response = { message: 'This is the About page' };
    responseHelper(res, 200, response);
};

export { fetchDataAll, fetchDataId, fetchDataContact, fetchDataAbout };
