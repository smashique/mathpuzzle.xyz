/* js/games/magicSquare.js - */
const MagicSquare = {
    level: 'easy',
    answer: null,

    generate() {
        // ৩x৩ ম্যাজিক স্কোয়ার (প্রতি সারি ও কলামের যোগফল ১৫)
        const square = [
            [8, 1, 6],
            [3, 5, 7],
            [4, 9, 2]
        ];

        const row = Math.floor(Math.random() * 3);
        const col = Math.floor(Math.random() * 3);
        this.answer = square[row][col];
        square[row][col] = '?';

        let gridHTML = '<div class="grid grid-cols-3 gap-2 bg-transparent p-2">';
        square.flat().forEach(val => {
            const isQuest = val === '?';
            gridHTML += `
                <div class="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-xl text-2xl font-black 
                ${isQuest ? 'bg-fuchsia-500/20 text-fuchsia-400 border-2 border-dashed border-fuchsia-400 animate-pulse' : 'bg-white/5 text-white'}">
                    ${val}
                </div>`;
        });
        gridHTML += '</div>';

        const question = `
            <div class="flex flex-col items-center gap-4">
                <div class="text-[10px] font-bold text-fuchsia-400 uppercase tracking-widest">Magic Sum: 15</div>
                ${gridHTML}
            </div>`;

        return { question, options: this.getOptions(this.answer) };
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
