/* js/games/shapeCount.js - */
const ShapeCount = {
    level: 'easy',
    answer: null,

    generate() {
        const shapes = ['🔴', '🟦', '🔺', '⭐'];
        const targetShape = shapes[Math.floor(Math.random() * shapes.length)];
        const count = Math.floor(Math.random() * 5) + 2;
        this.answer = count;

        let pool = [];
        for(let i=0; i<count; i++) pool.push(targetShape);
        while(pool.length < 12) {
            let s = shapes[Math.floor(Math.random() * shapes.length)];
            if(s !== targetShape) pool.push(s);
        }
        pool.sort(() => Math.random() - 0.5);

        const question = `
            <div class="flex flex-col items-center gap-6">
                <div class="text-[10px] font-black text-cyan-400 uppercase tracking-widest">নিচের বক্সে কয়টি ${targetShape} আছে?</div>
                <div class="grid grid-cols-4 gap-4 p-6 bg-white/5 border border-white/10 rounded-3xl">
                    ${pool.map(s => `<div class="text-3xl">${s}</div>`).join('')}
                </div>
            </div>`;

        return { question, options: [count, count+1, count-1, count+2].sort(() => Math.random() - 0.5) };
    }
};
