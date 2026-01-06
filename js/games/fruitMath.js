/* js/games/fruitMath.js - */
const FruitMath = {
    fruits: ['🍎', '🍌', '🍇', '🍊', '🍓', '🍍', '🍒'],
    level: 'easy',
    answer: null,

    generate() {
        const f1 = this.fruits[Math.floor(Math.random() * this.fruits.length)];
        const f2 = this.fruits[(Math.floor(Math.random() * this.fruits.length) + 1) % this.fruits.length];
        let v1 = Math.floor(Math.random() * 10) + 2;
        let v2 = Math.floor(Math.random() * 8) + 2;
        let question = "";

        // লেভেল অনুযায়ী প্রশ্ন তৈরি
        if (this.level === 'easy') {
            this.answer = v1;
            question = `${f1} + ${f1} = ${v1 + v1}<br>${f1} = ?`;
        } else if (this.level === 'easy-medium') {
            this.answer = v2;
            question = `${f1} = ${v1}<br>${f1} + ${f2} = ${v1 + v2}<br>${f2} = ?`;
        } else if (this.level === 'medium') {
            this.answer = v1;
            question = `${f1} + ${f2} = ${v1 + v2}<br>${f1} - ${f2} = ${v1 - v2}<br>${f1} = ?`;
        } else if (this.level === 'medium-hard') {
            this.answer = v2;
            question = `${f1} × ${f1} = ${v1 * v1}<br>${f1} + ${f2} = ${v1 + v2}<br>${f2} = ?`;
        } else {
            this.answer = v2;
            question = `${f1} × ${f2} = ${v1 * v2}<br>${f1} + ${f2} = ${v1 + v2}<br>${f2} = ?`;
        }

        return { question, options: this.getOptions(this.answer) };
    },

    getOptions(correct) {
        let opts = new Set([correct]);
        while(opts.size < 4) {
            let fake = correct + (Math.floor(Math.random() * 5) + 1) * (Math.random() < 0.5 ? 1 : -1);
            if(fake > 0) opts.add(fake);
        }
        return Array.from(opts).sort(() => Math.random() - 0.5);
    }
};
