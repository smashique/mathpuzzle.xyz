/* js/games/codeBreaker.js - */
const CodeBreaker = {
    level: 'easy',
    answer: null,

    generate() {
        const secret = Math.floor(Math.random() * 90) + 10;
        this.answer = secret;
        const hint = secret % 2 === 0 ? "এটি একটি জোড় সংখ্যা" : "এটি একটি বিজোড় সংখ্যা";

        // UI-তে একটি ছোট 'Lock' ইমোজি যোগ করা হয়েছে যা বাচ্চাদের থিম বুঝতে সাহায্য করবে
        const question = `
            <div class="flex flex-col items-center gap-6">
                <div class="text-[10px] font-black text-cyan-400 uppercase tracking-widest animate-pulse tracking-[0.3em]">সিক্রেট কোডটি খুঁজে বের করো!</div>
                <div class="relative group">
                    <div class="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-[45px] blur opacity-20 group-hover:opacity-40 transition"></div>
                    <div class="relative p-10 bg-black/40 border-2 border-white/10 rounded-[40px] text-6xl font-black text-white flex items-center gap-4 shadow-2xl">
                        <span class="text-4xl opacity-50">🔐</span> ??
                    </div>
                </div>
                <div class="px-6 py-2 bg-fuchsia-500/10 rounded-full text-[11px] font-bold text-fuchsia-400 border border-fuchsia-500/20 backdrop-blur-sm">
                    ইঙ্গিত: ${hint}
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
