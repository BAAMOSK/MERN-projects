const validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = validateExperienceInput = data => {
   const errors = {};
   const dataFields = ['title', 'company', 'from'];

    /*for(index in dataFields) {
        let field = dataFields[index];
        data[field] = isEmpty(data[field]) ? '' : data[field];
        
        if (validator.isEmpty(data[field])) {
            errors[field] = `${field} field is required`;    
        }
    }*/
    
    dataFields.forEach(field => {
        data[field] = isEmpty(data[field]) ? '' : data[field];
        
        if(validator.isEmpty(data[field])) {
            errors[field] = `${field} field is required`;
        }
    });

   return { errors, isValid: isEmpty(errors) };
} 
