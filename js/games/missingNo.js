/* js/games/missingNo.js - */
const MissingNo = {
    level: 'easy',
    answer: null,

    generate() {
        let n1 = Math.floor(Math.random() * 10) + 2;
        let n2 = Math.floor(Math.random() * 5) + 2;
        let result = n1 * n2;
        
        // ভিন্ন ভ্যারিয়েশন
        const types = ['multiply', 'add'];
        const type = types[Math.floor(Math.random() * types.length)];
        
        if(type === 'add') {
            result = n1 + n2;
            this.answer = n2;
            var display = `
                <div class="flex items-center gap-4 text-3xl font-bold">
                    <div class="p-4 bg-white/5 rounded-xl">${n1}</div>
                    <div>+</div>
                    <div class="p-4 bg-cyan-500/20 border-2 border-dashed border-cyan-400 text-cyan-400">?</div>
                    <div>=</div>
                    <div class="p-4 bg-white/5 rounded-xl">${result}</div>
                </div>`;
        } else {
            this.answer = n2;
            var display = `
                <div class="flex items-center gap-4 text-3xl font-bold">
                    <div class="p-4 bg-white/5 rounded-xl">${n1}</div>
                    <div>×</div>
                    <div class="p-4 bg-cyan-500/20 border-2 border-dashed border-cyan-400 text-cyan-400">?</div>
                    <div>=</div>
                    <div class="p-4 bg-white/5 rounded-xl">${result}</div>
                </div>`;
        }

        const question = `
            <div class="flex flex-col items-center gap-6">
                <div class="text-[10px] font-black text-slate-400 uppercase tracking-widest">Find the Missing Number</div>
                ${display}
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
