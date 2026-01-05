/* js/games/memoryMatch.js - */
const MemoryMatch = {
    level: 'easy',
    answer: null,
    tempPool: [],

    generate() {
        const icons = ['🍎', '🍌', '🍇', '🍓', '🍒', '🥝'];
        const targetIcon = icons[Math.floor(Math.random() * icons.length)];
        this.answer = targetIcon;

        const question = `
            <div class="flex flex-col items-center gap-6">
                <div id="mem-instruction" class="text-[10px] font-black text-cyan-400 uppercase tracking-widest animate-bounce">এই ফলটি মনে রাখুন!</div>
                <div id="mem-target" class="text-8xl p-10 bg-white/5 border border-white/10 rounded-[40px] shadow-2xl transition-all duration-500">
                    ${targetIcon}
                </div>
            </div>`;

        // ৩ সেকেন্ড পর ছবি লুকিয়ে অপশন দেখানো
        setTimeout(() => {
            const instr = document.getElementById('mem-instruction');
            const target = document.getElementById('mem-target');
            if(instr && target) {
                instr.innerText = "ফলটি খুঁজে বের করুন!";
                target.innerHTML = "❓";
                target.classList.add('bg-cyan-500/20', 'border-cyan-500/50');
            }
        }, 2000);

        return { question, options: icons.sort(() => Math.random() - 0.5) };
    }
};
