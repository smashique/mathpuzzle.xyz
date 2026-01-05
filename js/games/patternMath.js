/* js/games/patternMath.js - Number Series Pattern Logic */
const PatternMath = {
    level: 'easy',
    answer: null,

    generate() {
        let sequence = [];
        let start = Math.floor(Math.random() * 10) + 1;
        let step = Math.floor(Math.random() * 5) + 2;
        
        // লেভেল অনুযায়ী প্যাটার্নের ধরণ পরিবর্তন
        if (this.level.includes('hard')) step = Math.floor(Math.random() * 10) + 5;

        for (let i = 0; i < 4; i++) {
            sequence.push(start + (i * step));
        }
        
        this.answer = start + (4 * step);
        const displaySeries = sequence.join(', ') + ', ?';

        const question = `
            <div class="flex flex-col items-center gap-6">
                <div class="text-xs font-bold text-cyan-400 tracking-widest uppercase">Complete the Series</div>
                <div class="text-5xl sm:text-7xl font-black text-white tracking-tighter math-display">
                    ${displaySeries}
                </div>
            </div>`;

        return { question, options: this.getOptions(this.answer, step) };
    },

    getOptions(correct, step) {
        let opts = new Set([correct]);
        while(opts.size < 4) {
            let fake = correct + (step * (Math.floor(Math.random() * 3) + 1)) * (Math.random() < 0.5 ? 1 : -1);
            if(fake > 0 && fake !== correct) opts.add(fake);
        }
        return Array.from(opts).sort(() => Math.random() - 0.5);
    }
};
