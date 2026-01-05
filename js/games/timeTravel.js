/* js/games/timeTravel.js - */
const TimeTravel = {
    level: 'easy',
    answer: null,

    generate() {
        const hour = Math.floor(Math.random() * 12) + 1;
        const minute = (Math.floor(Math.random() * 4) * 15); // ০, ১৫, ৩০, ৪৫ মিনিট
        this.answer = `${hour}:${minute === 0 ? '00' : minute}`;

        const question = `
            <div class="flex flex-col items-center gap-6">
                <div class="text-[10px] font-bold text-cyan-400 uppercase tracking-widest">এই ঘড়িতে এখন কয়টা বাজে?</div>
                <div class="relative w-40 h-40 rounded-full border-4 border-white/20 flex items-center justify-center bg-white/5 shadow-2xl">
                    <div class="absolute w-1 h-12 bg-fuchsia-500 rounded-full origin-bottom" 
                         style="transform: rotate(${(hour * 30) + (minute / 2)}deg); bottom: 50%;"></div>
                    <div class="absolute w-1 h-16 bg-cyan-400 rounded-full origin-bottom" 
                         style="transform: rotate(${minute * 6}deg); bottom: 50%;"></div>
                    <div class="absolute w-3 h-3 bg-white rounded-full z-10"></div>
                </div>
            </div>`;

        // অপশন জেনারেট করা
        let opts = new Set([this.answer]);
        while(opts.size < 4) {
            let h = Math.floor(Math.random() * 12) + 1;
            let m = (Math.floor(Math.random() * 4) * 15);
            opts.add(`${h}:${m === 0 ? '00' : m}`);
        }
        return { question, options: Array.from(opts).sort(() => Math.random() - 0.5) };
    }
};
