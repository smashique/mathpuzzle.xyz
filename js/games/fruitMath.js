/* js/games/fruitMath.js - */
const FruitMath = {
    fruits: ['🍎', '🍌', '🍇', '🍊', '🍓', '🍍', '🍒'],
    level: 'easy',
    score: 0,
    timer: 15, // ১৫ সেকেন্ড সময়
    answer: null,

    generate() {
        const f1 = this.fruits[Math.floor(Math.random() * this.fruits.length)];
        const f2 = this.fruits[(Math.floor(Math.random() * this.fruits.length) + 1) % this.fruits.length];
        let val1 = Math.floor(Math.random() * 10) + 2;
        let val2 = Math.floor(Math.random() * 10) + 2;
        let question = "";

        // লেভেল অনুযায়ী লজিক
        if (this.level === 'easy') {
            this.answer = val1;
            question = `${f1} + ${f1} = ${val1 + val1}<br>${f1} = ?`;
        } else if (this.level === 'medium') {
            this.answer = val2;
            question = `${f1} = ${val1}<br>${f1} + ${f2} = ${val1 + val2}<br>${f2} = ?`;
        } else {
            this.answer = val2;
            question = `${f1} × ${f1} = ${val1 * val1}<br>${f1} + ${f2} = ${val1 + val2}<br>${f2} = ?`;
        }

        return { question, options: this.getOptions(this.answer) };
    },

    getOptions(correct) {
        let opts = new Set([correct]);
        while(opts.size < 4) {
            let fake = correct + (Math.floor(Math.random() * 5) + 1) * (Math.random() < 0.5 ? 1 : -1);
            if(fake > 0) opts.add(fake);
        }
        return Array.from(opts).sort(() => Math.random() - 0.5); // বাটন এলোমেলো করা
    }
};
