/* js/games/fractionMath.js - */
const FractionMath = {
    level: 'easy',
    answer: null,

    generate() {
        const denominators = this.level.includes('easy') ? [2, 4, 8] : [3, 5, 6];
        const d = denominators[Math.floor(Math.random() * denominators.length)];
        const n = Math.floor(Math.random() * (d - 1)) + 1;
        
        this.answer = n;

        // পিজ্জা ভিজ্যুয়াল: conic-gradient ব্যবহার করা হয়েছে যা দ্রুত লোড হয়
        const fillPercent = (n / d) * 100;
        const pizzaHTML = `
            <div class="relative w-44 h-44 rounded-full border-4 border-white/10 shadow-2xl overflow-hidden" 
                 style="background: conic-gradient(rgba(34, 211, 238, 0.5) 0% ${fillPercent}%, rgba(255, 255, 255, 0.05) ${fillPercent}% 100%);">
                ${this.generateDividers(d)}
                <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span class="text-[8px] font-black text-white/20 uppercase tracking-[0.3em]">Fraction Pizza</span>
                </div>
            </div>`;

        const question = `
            <div class="flex flex-col items-center gap-6 animate__animated animate__zoomIn">
                <div class="text-[10px] font-black text-cyan-400 uppercase tracking-widest italic">ভগ্নাংশটি পূর্ণ করো</div>
                ${pizzaHTML}
                <div class="flex items-center gap-4 text-6xl font-black">
                    <div class="border-b-4 border-cyan-400 pb-2 text-cyan-400">?</div>
                    <div class="text-white/80">/ ${d}</div>
                </div>
                <p class="text-[9px] text-slate-500 font-bold uppercase">উপরে কয়টি স্লাইস রাঙানো আছে?</p>
            </div>`;

        return { question, options: this.getOptions(n, d) };
    },

    // ডিভাইডার লাইন তৈরির হেল্পার ফাংশন
    generateDividers(d) {
        let lines = '';
        for(let i=0; i<d; i++) {
            const rotate = (360 / d) * i;
            lines += `<div class="absolute inset-0 border-r border-white/10 origin-center" style="transform: rotate(${rotate}deg);"></div>`;
        }
        return lines;
    },

    getOptions(correct, d) {
        let opts = new Set([correct]);
        while(opts.size < 4) {
            let fake = Math.floor(Math.random() * (d - 1)) + 1;
            if (fake !== correct) opts.add(fake);
        }
        return Array.from(opts).sort(() => Math.random() - 0.5);
    }
};
