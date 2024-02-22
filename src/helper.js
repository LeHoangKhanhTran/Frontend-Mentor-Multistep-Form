function validateEmail(input) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const match = input.match(emailRegex);
    if (match) {
        return ''
    }
    else return 'Invalid email address'
}

function validatePhoneNum(input) {
    const phoneNumberRegex = /^[\+]?[(]?([0-9]{1,3})?[)]?[-\s\.]?[0-9]{3,4}[-\s\.]?[0-9]{3}?[-\s\.]?[0-9]{3}$/;
    const match = input.match(phoneNumberRegex);
    if (match) {
        return ''
    }
    else return 'Invalid phone number'
}

export function validateField(data, fieldName) {
    if (data[fieldName] === '') {
        return 'This field is required'
    }
    else if (fieldName === 'email') {
        return validateEmail(data[fieldName])
    }

    else if (fieldName === 'phoneNumber') {
        return validatePhoneNum(data[fieldName])
    }
    else {
        return ''
    }
}