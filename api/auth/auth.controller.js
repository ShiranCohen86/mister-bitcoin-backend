const authService = require('./auth.service');
const logger = require('../../services/logger.service');

async function login(req, res) {
	const { email, password } = req.body;
	try {
		const user = await authService.login(email, password);
		req.session.userId = user._id;
		res.json(user);
	} catch (err) {
		logger.error('Failed to Login ' + err);
		res.status(401).send(err);
	}
}

async function signup(req, res) {
	try {
		const { password, fullname, email, phone } = req.body;
		const account = await authService.signup(password, fullname, email, phone);
		logger.debug(`auth.route - new account created: ` + JSON.stringify(account));
		const user = await authService.login(email, password);
		req.session.userId = user._id;

		res.json(user);
	} catch (err) {
		logger.error('Failed to signup ' + err);
		res.status(500).send({ err: 'Failed to signup' });
	}
}

async function logout(req, res) {
	try {
		req.session.destroy();
		res.send({ msg: 'Logged out successfully' });
	} catch (err) {
		res.status(500).send({ err: 'Failed to logout' });
	}
}

module.exports = {
	login,
	signup,
	logout
};
