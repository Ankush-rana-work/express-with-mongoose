const Joi = require('joi');
const JoiHelper = require('../../util/joiHelper');

const userSchema = {
    register: (req, res, next) => {
        const schema = Joi.object({
            firstName: Joi.string().required(),
            lastName: Joi.string(),
            email: Joi.string().email().required(),
            age: Joi.number().integer().min(0).max(120).required()
        });

        JoiHelper.validate(schema, req.body, res, next);
    }
}

module.exports = userSchema;