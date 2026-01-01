// js/token.js
const ADMIN_TOKEN = "+8801303680618"; // আপনার অ্যাডমিন টোকেন

const AuthService = {
    validate(token) {
        if (token === ADMIN_TOKEN) {
            return { status: 'authorized', type: 'admin' };
        }
        // ভবিষ্যতে গুগল শিট ইন্টিগ্রেশন এখানে আসবে
        return { status: 'unauthorized' };
    }
};
