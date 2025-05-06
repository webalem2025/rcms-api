
const express = require('express');
rummersController = require("../controller/rumorController");
const rummersRouter = express.Router();

rummersRouter.get("/", rummersController.getAllRumours);
rummersRouter.get("/rumour/:id", rummersController.getRumoursById);
rummersRouter.put("/rumour/:id", rummersController.updateRumourById);

module.exports = rummersRouter;