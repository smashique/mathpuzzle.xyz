/* js/games/fruitMath.js - */
const FruitMath = {
    fruits: ['🍎', '🍌', '🍇', '🍊', '🍓', '🍍', '🍒'],
    level: 'easy', // প্রাথমিক লেভেল
    answer: null,

    generate() {
        const f1 = this.fruits[Math.floor(Math.random() * this.fruits.length)];
        const f2 = this.fruits[(Math.floor(Math.random() * this.fruits.length) + 1) % this.fruits.length];
        const f3 = this.fruits[(Math.floor(Math.random() * this.fruits.length) + 2) % this.fruits.length];
        
        let val1 = Math.floor(Math.random() * 8) + 2;
        let val2 = Math.floor(Math.random() * 8) + 2;
        let val3 = Math.floor(Math.random() * 5) + 1;
        
        let question = "";

        // বয়স ভিত্তিক ৫টি লেভেলের লজিক
        switch(this.level) {
            case 'easy': // ৪-৫ বছর: সহজ যোগ
                this.answer = val1;
                question = `${f1} + ${f1} = ${val1 + val1}<br>${f1} = ?`;
                break;
                
            case 'easy-medium': // ৬-৭ বছর: যোগ ও ছোট সংখ্যার বিয়োগ
                this.answer = val2;
                question = `${f1} = ${val1}<br>${f1} + ${f2} = ${val1 + val2}<br>${f2} = ?`;
                break;
                
            case 'medium': // ৮-৯ বছর: যোগ ও বিয়োগের সমন্বয়
                this.answer = val1;
                question = `${f1} + ${f2} = ${val1 + val2}<br>${f1} - ${f2} = ${val1 - val2}<br>${f1} = ?`;
                // ফলাফল পজিটিভ রাখতে চেক
                if(val1 <= val2) return this.generate(); 
                break;
                
            case 'medium-hard': // ১০-১১ বছর: গুণ ও যোগের সূচনা
                this.answer = val2;
                question = `${f1} × ${f1} = ${val1 * val1}<br>${f1} + ${f2} = ${val1 + val2}<br>${f2} = ?`;
                break;
                
            case 'hard': // ১২+ বছর: জটিল গুণ, ভাগ ও যোগ
                this.answer = val3;
                question = `${f1} × ${f2} = ${val1 * val2}<br>${f1} + ${f2} = ${val1 + val2}<br>${f2} - ${f3} = ${val2 - val3}<br>${f3} = ?`;
                if(val2 <= val3) return this.generate();
                break;
        }

        return { 
            question, 
            options: this.getOptions(this.answer) 
        };
    },

    getOptions(correct) {
        let opts = new Set([correct]);
        while(opts.size < 4) {
            // ভুল উত্তরগুলো লজিক্যালি কাছাকাছি রাখা
            let fake = correct + (Math.floor(Math.random() * 5) + 1) * (Math.random() < 0.5 ? 1 : -1);
            if(fake > 0) opts.add(fake);
        }
        return Array.from(opts).sort(() => Math.random() - 0.5); // বাটন এলোমেলো করা
    }
};
