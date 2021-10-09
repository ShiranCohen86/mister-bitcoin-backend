const bcrypt = require("bcrypt");
const userService = require("../user/user.service");
const logger = require("../../services/logger.service");

async function login(email, password) {
  logger.debug(`auth.service - login with email: ${email}`);

  const user = await userService.getByEmail(email);
  if (!user) return Promise.reject("Invalid email or password");
  // TODO: un-comment for real login
  const match = await bcrypt.compare(password, user.password);
  if (!match) return Promise.reject("Invalid email or password");

  delete user.password;
  return user;
}

async function signup(username, password, fullname, email, phone) {
  const saltRounds = 10;

  logger.debug(
    `auth.service - signup with email: ${email}, fullname: ${fullname}`
  );
  if (!username || !password || !fullname || !email || !phone)
    return Promise.reject(
      "fullname, username, email, phone and password are required!"
    );
  const isEmailExist = await userService.getByEmail(email);
  // if (isEmailExist) return Promise.reject("This email is already signed");
  if (isEmailExist) throw "This email is already signed";

  const hash = await bcrypt.hash(password, saltRounds);
  email = email.toLowerCase();
  return userService.add({ username, password: hash, fullname, email, phone });
}

module.exports = {
  signup,
  login,
};
