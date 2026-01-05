/* js/games/kakuroMath.js - */
const KakuroMath = {
    level: 'easy',
    answer: null,

    generate() {
        // সহজ ২x২ গ্রিড তৈরি
        let a = Math.floor(Math.random() * 5) + 1;
        let b = Math.floor(Math.random() * 5) + 1;
        let c = Math.floor(Math.random() * 5) + 1;
        let d = Math.floor(Math.random() * 5) + 1; // এটিই হবে উত্তর (?)
        
        this.answer = d;

        const sumR1 = a + b;
        const sumR2 = c + d;
        const sumC1 = a + c;
        const sumC2 = b + d;

        const question = `
            <div class="flex flex-col items-center gap-4">
                <div class="text-[10px] font-black text-fuchsia-400 uppercase tracking-widest">ক্রস-সাম ধাঁধাটি সমাধান করো</div>
                <div class="grid grid-cols-3 gap-2 bg-white/5 p-4 rounded-3xl border border-white/10">
                    <div class="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg">${a}</div>
                    <div class="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg">${b}</div>
                    <div class="w-12 h-12 flex items-center justify-center border-l-2 border-fuchsia-500 font-bold">${sumR1}</div>
                    
                    <div class="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg">${c}</div>
                    <div class="w-12 h-12 flex items-center justify-center bg-cyan-500/20 border-2 border-dashed border-cyan-400 text-cyan-400 animate-pulse">?</div>
                    <div class="w-12 h-12 flex items-center justify-center border-l-2 border-fuchsia-500 font-bold">${sumR2}</div>
                    
                    <div class="w-12 h-12 flex items-center justify-center border-t-2 border-fuchsia-500 font-bold">${sumC1}</div>
                    <div class="w-12 h-12 flex items-center justify-center border-t-2 border-fuchsia-500 font-bold">${sumC2}</div>
                    <div class="w-12 h-12"></div>
                </div>
            </div>`;

        return { question, options: this.getOptions(d) };
    },

    getOptions(correct) {
        let opts = new Set([correct]);
        while(opts.size < 4) {
            let fake = Math.floor(Math.random() * 9) + 1;
            opts.add(fake);
        }
        return Array.from(opts).sort(() => Math.random() - 0.5);
    }
};
