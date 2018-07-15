const validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = validateProfileInput = data => {
    let errors = {};

    /*data.handle = isEmpty(data.handle) ? '' : data.handle;
    data.status = isEmpty(data.status) ? '' : data.status;
    data.skills = isEmpty(data.skills) ? '' : data.skills;*/

    /*if(validator.isEmpty(data.handle)) {
        errors.handle = 'Handle is required';
    }*/

    const dataFields = ['handle', 'status', 'skills'];
    const siteUrls = ['website', 'facebook', 'linkedin', 'twitter', 'instagram', 'youtube'];

    //MAKE SURE NO FIELDS ARE EMPTY
    dataFields.forEach(field => {
        data[field] = isEmpty(data[field]) ? '' : data[field];
        
        if(validator.isEmpty(data[field])) {
            errors[field] = `${field} field is required`;
        }
    });

    if(!validator.isLength(data.handle, {min: 2, max: 40})) {
        errors.handle = 'Handle must be between 2 and 40 characters';
    };

    siteUrls.forEach(url => {
        //CHECK FOR VALUE
        if(!isEmpty(data[url])) {
            //CHECK IF URLS ARE INVALID
            if(!validator.isURL(data[url])) {
                errors[url] = `${url} url is not valid`;
            }
        }
    });

    return { 
        errors,
        isValid: isEmpty(errors)
    };

};
