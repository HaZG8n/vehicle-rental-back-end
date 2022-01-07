const vehicleModel = require('../models/vehicles');
const responseHelper = require('../helpers/sendResponse');

// menambahkan kendaraan baru
const postNewVehicle = (req, res) => {
    const { body } = req;
    vehicleModel
        .postNewVehicle(body)
        .then(({ status, result }) => {
            responseHelper.success(res, status, result);
        }).catch((status, err) => {
            responseHelper.error(res, status, err);
        })
}

const getVehicle = (req, res) => {
    const { query } = req;
    vehicleModel
        .getVehicle(query)
        .then(({ status, result }) => {
            responseHelper.success(res, status, result);
        }).catch(({ status, err }) => {
            responseHelper.error(res, status, err);
        })
}

const updateVehicles = (req, res) => {
    const { body } = req;
    vehicleModel
        .updateVehicles(body)
        .then(({ status, result }) => {
            responseHelper.success(res, status, result);
        }).catch(({ status, err }) => {
            responseHelper.success(res, status, err);
        })
}

// menghapus data kendaraan byId
const delVehicleById = (req, res) => {
    const { query } = req;
    const idVehicle = query.id;
    vehicleModel
        .delVehicleById(idVehicle)
        .then(({ status, result }) => {
            responseHelper.success(res, status, result);
        }).catch(({ status, err }) => {
            responseHelper.error(res, status, err);
        });
}

module.exports = {
    postNewVehicle,
    getVehicle,
    updateVehicles,
    delVehicleById
};