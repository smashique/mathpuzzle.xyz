// js/token.js
const ADMIN_TOKEN = "+8801303680618";

const AuthService = {
    validate(token) {
        // '+' সাইন হ্যান্ডেল করার জন্য ডিকোড করা হয়েছে
        const cleanToken = token ? token.replace(' ', '+') : "";
        if (cleanToken === ADMIN_TOKEN) {
            return { status: 'authorized', user: 'Admin' };
        }
        return { status: 'unauthorized' };
    }
};
