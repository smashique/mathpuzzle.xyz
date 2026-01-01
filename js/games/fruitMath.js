/* js/games/fruitMath.js - */
const FruitMath = {
    fruits: ['🍎', '🍌', '🍇', '🍊', '🍓', '🍍', '🍒'],
    level: 'easy', 
    answer: null,

    generate() {
        const f1 = this.fruits[Math.floor(Math.random() * this.fruits.length)];
        const f2 = this.fruits[(Math.floor(Math.random() * this.fruits.length) + 1) % this.fruits.length];
        const f3 = this.fruits[(Math.floor(Math.random() * this.fruits.length) + 2) % this.fruits.length];
        
        let v1 = Math.floor(Math.random() * 10) + 2;
        let v2 = Math.floor(Math.random() * 8) + 2;
        let v3 = Math.floor(Math.random() * 5) + 1;
        
        let question = "";

        // ৫টি বয়স ক্যাটাগরি অনুযায়ী ডাইনামিক অংক
        switch(this.level) {
            case 'easy': // ৪-৫ বছর: শুধু যোগ
                this.answer = v1;
                question = `${f1} + ${f1} = ${v1 + v1}<br>${f1} = ?`;
                break;
            case 'easy-medium': // ৬-৭ বছর: যোগ ও বিয়োগ
                this.answer = v2;
                question = `${f1} = ${v1}<br>${f1} + ${f2} = ${v1 + v2}<br>${f2} = ?`;
                break;
            case 'medium': // ৮-৯ বছর: বড় সংখ্যার যোগ/বিয়োগ
                this.answer = v1;
                question = `${f1} + ${f2} = ${v1 + v2}<br>${f1} - ${f2} = ${v1 - v2}<br>${f1} = ?`;
                if(v1 <= v2) return this.generate(); 
                break;
            case 'medium-hard': // ১০-১১ বছর: গুণ ও যোগ
                this.answer = v2;
                question = `${f1} × ${f1} = ${v1 * v1}<br>${f1} + ${f2} = ${v1 + v2}<br>${f2} = ?`;
                break;
            case 'hard': // ১২+ বছর: গুণ, ভাগ ও বিয়োগের সমন্বয়
                this.answer = v3;
                question = `${f1} × ${f2} = ${v1 * v2}<br>${f1} + ${f2} = ${v1 + v2}<br>${f2} - ${f3} = ${v2 - v3}<br>${f3} = ?`;
                if(v2 <= v3) return this.generate();
                break;
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
