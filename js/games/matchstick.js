/* js/games/matchstick.js - */
const Matchstick = {
    level: 'easy',
    answer: null,

    generate() {
        const n1 = Math.floor(Math.random() * 5) + 1;
        const n2 = Math.floor(Math.random() * 4) + 1;
        const result = n1 + n2;
        this.answer = result;

        const question = `
            <div class="flex flex-col items-center gap-8">
                <div class="text-[10px] font-black text-yellow-400 uppercase tracking-widest">ম্যাচস্টিক ইকুয়েশনটি সমাধান করো</div>
                <div class="flex items-center gap-4 math-display text-5xl">
                    <span class="p-4 bg-white/5 rounded-xl border border-white/10">${n1}</span>
                    <span class="text-cyan-400">+</span>
                    <span class="p-4 bg-white/5 rounded-xl border border-white/10">${n2}</span>
                    <span class="text-cyan-400">=</span>
                    <span class="p-4 bg-yellow-500/20 border-2 border-dashed border-yellow-400 text-yellow-400 animate-pulse">?</span>
                </div>
                <div class="text-[9px] text-slate-500 italic uppercase">সঠিক যোগফলটি নিচের অপশন থেকে বেছে নিন</div>
            </div>`;

        return { question, options: this.getOptions(result) };
    },

    getOptions(correct) {
        let opts = new Set([correct]);
        while(opts.size < 4) {
            let fake = correct + (Math.floor(Math.random() * 3) + 1) * (Math.random() < 0.5 ? 1 : -1);
            if(fake > 0) opts.add(fake);
        }
        return Array.from(opts).sort(() => Math.random() - 0.5);
    }
};
