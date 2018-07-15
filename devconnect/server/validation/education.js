const validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = validateEducationInput = data => {
    const errors = {};
    const dataFields = ['school', 'degree', 'fieldOfStudy', 'from'];

    dataFields.forEach(field => {
        data[field] = isEmpty(data[field]) ? '' : data[field];

        if(validator.isEmpty(data[field])) {
            errors[field] = `${field} field is required`;
        }
    });

    return { errors, isValid: isEmpty(errors) };
}
