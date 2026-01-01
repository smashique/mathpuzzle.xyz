// js/token.js
const ADMIN_TOKEN = "+8801303680618"; // আপনার হোয়াটসঅ্যাপ নম্বর

async function checkAccess(token) {
    if (token === ADMIN_TOKEN) return { status: 'active', type: 'admin' };
    
    // গুগল শিট থেকে ডেটা চেক করার লজিক (ভবিষ্যতে যুক্ত হবে)
    //
    return { status: 'denied' };
}
