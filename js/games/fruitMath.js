// js/games/fruitMath.js
const FruitMath = {
    generate(level) {
        // লেভেল আপ লজিক: ইজি, মিডিয়াম, হার্ড
        const range = level === 'hard' ? 100 : (level === 'medium' ? 30 : 10);
        let a = Math.floor(Math.random() * range) + 1;
        let b = Math.floor(Math.random() * range) + 1;
        
        return {
            question: `🍎 + 🍎 = ${a+a} <br> 🍎 + ? = ${a+b}`,
            answer: b,
            hint: "ফলের মান বের করো।"
        };
    }
};
