/* js/games/compareMath.js - */
const CompareMath = {
    level: 'easy',
    answer: null,

    generate() {
        let n1 = Math.floor(Math.random() * 20) + 1;
        let n2 = Math.floor(Math.random() * 20) + 1;
        if(n1 === n2) n2++;

        this.answer = Math.max(n1, n2); // বড় সংখ্যাটি উত্তর

        const question = `
            <div class="flex flex-col items-center gap-6">
                <div class="text-[10px] font-bold text-cyan-400 uppercase tracking-widest">বড় সংখ্যাটি কোনটি?</div>
                <div class="flex gap-10">
                    <div class="p-8 bg-white/5 border border-white/10 rounded-3xl text-5xl font-black">${n1}</div>
                    <div class="p-8 bg-white/5 border border-white/10 rounded-3xl text-5xl font-black">${n2}</div>
                </div>
            </div>`;

        return { question, options: [n1, n2].sort(() => Math.random() - 0.5) };
    }
};
