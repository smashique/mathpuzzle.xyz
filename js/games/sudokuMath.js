/* js/games/sudokuMath.js - 4x4 Mini Sudoku Logic */
const SudokuMath = {
    level: 'easy',
    answer: null,

    generate() {
        // একটি বেসিক ৪x৪ সুডোকু প্যাটার্ন
        const baseGrid = [
            [1, 2, 3, 4],
            [3, 4, 1, 2],
            [2, 3, 4, 1],
            [4, 1, 2, 3]
        ];

        // সংখ্যাগুলোকে র‍্যান্ডমলি সাফল (Shuffle) করা
        const nums = [1, 2, 3, 4].sort(() => Math.random() - 0.5);
        const grid = baseGrid.map(row => row.map(cell => nums[cell - 1]));

        // একটি র‍্যান্ডম সেল সিলেক্ট করে সেটি লুকানো (?)
        const rowIdx = Math.floor(Math.random() * 4);
        const colIdx = Math.floor(Math.random() * 4);
        this.answer = grid[rowIdx][colIdx];
        grid[rowIdx][colIdx] = '?';

        // গ্রিডটি এইচটিএমএল (HTML) হিসেবে তৈরি করা
        let gridHTML = '<div class="grid grid-cols-4 gap-2 bg-white/5 p-4 rounded-3xl border border-white/10">';
        grid.forEach(row => {
            row.forEach(cell => {
                const isQuest = cell === '?';
                gridHTML += `
                    <div class="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-xl text-2xl font-black 
                        ${isQuest ? 'bg-cyan-500/20 text-cyan-400 border-2 border-dashed border-cyan-400 animate-pulse' : 'bg-white/10 text-white'}">
                        ${cell}
                    </div>`;
            });
        });
        gridHTML += '</div>';

        const question = `
            <div class="flex flex-col items-center gap-6">
                <div class="text-xs font-bold text-cyan-400 tracking-widest uppercase">Fill the Missing Number</div>
                ${gridHTML}
                <p class="text-[10px] text-slate-400 italic">Each row and column must have unique numbers 1-4</p>
            </div>`;

        return { question, options: [1, 2, 3, 4].sort(() => Math.random() - 0.5) };
    }
};
