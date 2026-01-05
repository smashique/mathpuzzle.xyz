/* js/games/fractionMath.js - */
const FractionMath = {
    level: 'easy',
    answer: null,

    generate() {
        const denominators = this.level.includes('easy') ? [2, 3, 4] : [5, 6, 8];
        const d = denominators[Math.floor(Math.random() * denominators.length)];
        const n = Math.floor(Math.random() * (d - 1)) + 1;
        
        this.answer = n; // MCQ তে লব (Numerator) বের করতে হবে

        // পিজ্জা স্লাইস ভিজ্যুয়াল তৈরি
        let pizzaHTML = `<div class="relative w-40 h-40 rounded-full bg-white/5 border-4 border-white/10 overflow-hidden">`;
        for(let i=0; i<d; i++) {
            const rotate = (360 / d) * i;
            const isFilled = i < n;
            pizzaHTML += `
                <div class="absolute inset-0 origin-center border-r border-white/20" 
                     style="transform: rotate(${rotate}deg); 
                            background: ${isFilled ? 'rgba(245, 158, 11, 0.4)' : 'transparent'};
                            clip-path: polygon(50% 50%, 50% 0%, ${50 + 50 * Math.tan(Math.PI / d)}% 0%);">
                </div>`;
        }
        pizzaHTML += `<div class="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-white/40 uppercase tracking-widest">Pizza Math</div></div>`;

        const question = `
            <div class="flex flex-col items-center gap-6">
                <div class="text-[10px] font-black text-orange-400 uppercase tracking-widest">ভগ্নাংশটি পূর্ণ করো</div>
                ${pizzaHTML}
                <div class="flex items-center gap-4 text-5xl font-black">
                    <div class="border-b-4 border-white pb-2 text-cyan-400">?</div>
                    <div class="text-white">/ ${d}</div>
                </div>
            </div>`;

        return { question, options: this.getOptions(n, d) };
    },

    getOptions(correct, d) {
        let opts = new Set([correct]);
        while(opts.size < 4) {
            let fake = Math.floor(Math.random() * (d - 1)) + 1;
            opts.add(fake);
        }
        return Array.from(opts).sort(() => Math.random() - 0.5);
    }
};
