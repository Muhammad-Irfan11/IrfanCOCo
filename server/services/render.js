const axios = require("axios");

exports.homeRoutes = (req, res) => {
  // Make a get request to /api/users

  res.render("HOME");
};

exports.menuRoutes = (req, res) => {
  axios
    .get("http://localhost:3000/api/cakes")
    .then(function (response) {
      res.render("menu", { cakes: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.loginRoutes = (req, res) => {
  res.render("login");
};

exports.contactRoutes = (req, res) => {
  res.render("Contact");
};

exports.userRoutes = (req, res) => {
  axios
    .get("http://localhost:3000/api/users")
    .then(function (response) {
      res.render("userlist", { users: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.orderRoutes = (req, res) => {
  axios
    .get("http://localhost:3000/api/orders")
    .then(function (response) {
      res.render("orders", { orders: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.add_user = (req, res) => {
  res.render("add_user");
};

exports.update_user = (req, res) => {
  axios
    .get("http://localhost:3000/api/users", { params: { id: req.query.id } })
    .then(function (userdata) {
      res.render("update_user", { user: userdata.data });
    })
    .catch((err) => {
      res.send(err);
    });
};
