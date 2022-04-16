const bcrypt = require("bcrypt");
const userService = require("../user/user.service");
const logger = require("../../services/logger.service");
const { use } = require("./auth.routes");

async function login(email, password) {
  logger.debug(`auth.service - login with email: ${email}`);

  const user = await userService.getByEmail(email);
  console.log(user);
  if (!user) return Promise.reject("Invalid email");
  // TODO: un-comment for real login
  const match = await bcrypt.compare(password, user.password);
  if (!match) return Promise.reject("Invalid password");
  delete user.password;
  user.contactsLength = user.contacts.length;
  delete user.contacts;

  return user;
  
}

async function signup(password, fullname, email, phone) {
  const saltRounds = 10;

  logger.debug(
    `auth.service - signup with email: ${email}, fullname: ${fullname}`
  );
  if (!password || !fullname || !email || !phone)
    return Promise.reject("fullname, email, phone and password are required!");
  const isEmailExist = await userService.getByEmail(email);
  // if (isEmailExist) return Promise.reject("This email is already signed");
  if (isEmailExist) throw "This email is already signed";

  const hash = await bcrypt.hash(password, saltRounds);
  email = email.toLowerCase();
  return userService.add({ password: hash, fullname, email, phone });
}

module.exports = {
  signup,
  login,
};
