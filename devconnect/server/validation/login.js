const validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = validateLoginInput = data => {
    let errors = {};

    data.email = isEmpty(data.email) ? "" : data.email;
    data.password = isEmpty(data.password) ? "" : data.password;

    if(!validator.isEmail(data.email)) {
        errors.email = "Invalid email";
    }

    if(validator.isEmpty(data.email)) {
        errors.email = "Email required";
    }
    
    if(validator.isEmpty(data.password)) {
        errors.password = "Password required";
    }
    
    return {
        errors,
        isValid: isEmpty(errors)
    };
}
