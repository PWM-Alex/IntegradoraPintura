export const validMail = (email) => {
    var valid = true;
    const valueMail = email;
    if(valueMail.includes('@') === true) {
        const trackmail = valueMail.split('@');
        trackmail < 0 ? 
        valid = true
        : trackmail[1].includes('.') ? 
        valid = false : valid = true;
        return valid;
    } else {
        return valid;
    }   
}

export const loginMethod = async ({data, reload}) => {
    localStorage.setItem('session', JSON.stringify({user: data.mail, rol: 1}));
    reload();
}