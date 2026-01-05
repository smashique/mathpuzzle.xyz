/* js/games/symmetry.js - */
const Symmetry = {
    level: 'easy',
    answer: null,

    generate() {
        const shapes = ['❤️', '🦋', '🍎', '🌓', '🐘'];
        const target = shapes[Math.floor(Math.random() * shapes.length)];
        this.answer = target;

        const question = `
            <div class="flex flex-col items-center gap-8">
                <div class="text-[10px] font-black text-cyan-400 uppercase tracking-widest">নিচের কোনটির দুই পাশ সমান (Symmetry)?</div>
                <div class="text-9xl filter drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">${target}</div>
            </div>`;

        return { question, options: shapes.sort(() => Math.random() - 0.5) };
    }
};
