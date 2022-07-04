const express = require("express");
const route = express.Router();

// //const services = require("../services/render");
const usercontroller = require("../controller/userController");
const cakecontroller = require("../controller/cakeController");
const ordercontroller = require("../controller/orderController");

// /**
//  *  @description Root Route
//  *  @method GET /
//  */
route.get("/", services.homeRoutes);

// /**
//  *  @description add users
//  *  @method GET /add-user
//  */
// //route.get("/add-user", services.add_user);

// /**
//  *  @description for update user
//  *  @method GET /update-user
//  */
// //route.get("/update-user", services.update_user);

// User API
route.post("/api/users", usercontroller.create);
route.get("/api/users", usercontroller.find);
route.put("/api/users/:id", usercontroller.update);
route.delete("/api/users/:id", usercontroller.delete);

// cake api
route.post("/api/cakes", cakecontroller.create);
route.get("/api/cakes", cakecontroller.find);
route.put("/api/cakes/:id", cakecontroller.update);
route.delete("/api/cakes/:id", cakecontroller.delete);

//order api
route.post("/api/orders", ordercontroller.create);
route.get("/api/orders", ordercontroller.find);
route.put("/api/orders/:id", ordercontroller.update);
route.delete("/api/orders/:id", ordercontroller.delete);

module.exports = route;
