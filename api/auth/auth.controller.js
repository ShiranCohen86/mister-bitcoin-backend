const authService = require("./auth.service");
const logger = require("../../services/logger.service");

async function login(req, res) {
  const { username, password } = req.body;
  try {
    const user = await authService.login(username, password);
    req.session.user = user;
    res.json(user);
  } catch (err) {
    logger.error("Failed to Login " + err);
    res.status(401).send({ err: "Failed to Login" });
  }
}

async function signup(req, res) {
  try {
    const { username, password, fullname, email, phone } = req.body;
    const account = await authService.signup(
      username,
      password,
      fullname,
      email,
      phone
    );
    logger.debug(
      `auth.route - new account created: ` + JSON.stringify(account)
    );
    const user = await authService.login(username, password);
    req.session.user = user;

    res.json(user);
  } catch (err) {
    logger.error("Failed to signup " + err);
    res.status(500).send({ err: "Failed to signup" });
  }
}

async function logout(req, res) {
  try {
    req.session.destroy();
    res.send({ msg: "Logged out successfully" });
  } catch (err) {
    res.status(500).send({ err: "Failed to logout" });
  }
}

async function getLoggedInUser(req, res) {
  try {
    res.json(req.session.user);
  } catch (err) {
    logger.error("Failed to signup " + err);
    res.status(500).send({ err: "No Loggedin User" });
  }
}
module.exports = {
  login,
  signup,
  logout,
  getLoggedInUser,
};
