// js/token.js
const AuthService = {
    validate(token) {
        if (!token) return { status: 'denied' };
        // URL-এর স্পেসকে '+' এ রূপান্তর
        const cleanToken = token.replace(/\s/g, '+'); 
        if (cleanToken === "+8801303680618") {
            return { status: 'authorized', user: 'Admin' };
        }
        return { status: 'denied' };
    }
};
