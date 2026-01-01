// js/token.js
const AuthService = {
    validate(token) {
        if (!token) return { status: 'denied' };
        const cleanToken = token.replace(' ', '+');
        if (cleanToken === "+8801303680618") {
            return { status: 'authorized', user: 'Admin' };
        }
        return { status: 'denied' };
    }
};
