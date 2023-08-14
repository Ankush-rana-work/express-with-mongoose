const { sendSucess } = require("../../util/commonHelper");
const User = require('../../models/userModel');

const UserController = {
    register: async (req, res, next) => {
        try {
            /* const user = new User(req.body);
            const savedUser = await user.save(); */
            const users = await User.find();
            sendSucess(res, 200, 'All data', users);
        } catch (error) {
            next(error);
        }
    },
};

module.exports = UserController;