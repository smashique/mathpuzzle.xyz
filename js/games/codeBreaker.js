/* js/games/codeBreaker.js - */
const CodeBreaker = {
    level: 'easy',
    answer: null,

    generate() {
        const secret = Math.floor(Math.random() * 90) + 10;
        this.answer = secret;
        const hint = secret % 2 === 0 ? "এটি একটি জোড় সংখ্যা" : "এটি একটি বিজোড় সংখ্যা";

        const question = `
            <div class="flex flex-col items-center gap-6">
                <div class="text-[10px] font-black text-cyan-400 uppercase tracking-widest animate-pulse">সিক্রেট কোডটি খুঁজে বের করো!</div>
                <div class="p-10 bg-white/5 border-4 border-dashed border-white/20 rounded-[40px] text-6xl font-black text-white">??</div>
                <div class="px-6 py-2 bg-fuchsia-500/20 rounded-full text-xs font-bold text-fuchsia-400 border border-fuchsia-500/30">
                    হিন্ট: ${hint}
                </div>
            </div>`;

        return { question, options: this.getOptions(secret) };
    },

    getOptions(correct) {
        let opts = new Set([correct]);
        while(opts.size < 4) {
            let fake = Math.floor(Math.random() * 90) + 10;
            opts.add(fake);
        }
        return Array.from(opts).sort(() => Math.random() - 0.5);
    }
};
