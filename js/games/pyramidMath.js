/* js/games/pyramidMath.js - Pyramid Puzzle Logic */
const PyramidMath = {
    level: 'easy',
    answer: null,

    generate() {
        let max = this.level.includes('hard') ? 50 : 15;
        let a = Math.floor(Math.random() * max) + 1;
        let b = Math.floor(Math.random() * max) + 1;
        this.answer = a + b;

        const question = `
            <div class="flex flex-col items-center gap-2">
                <div class="w-32 h-32 bg-cyan-500/10 border-4 border-dashed border-cyan-400 rounded-3xl flex items-center justify-center text-5xl">?</div>
                <div class="flex gap-6">
                    <div class="w-20 h-20 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-3xl">${a}</div>
                    <div class="w-20 h-20 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-3xl">${b}</div>
                </div>
            </div>`;

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
