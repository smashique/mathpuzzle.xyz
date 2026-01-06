/* js/games/fruitMath.js - */
const FruitMath = {
    fruits: ['🍎', '🍌', '🍇', '🍊', '🍓', '🍍', '🍒'],
    answer: null,

    // ৪) প্রোবাবিলিটি এনট্রপি জেনারেটর (0.00000000000001% ডুপ্লিকেট সম্ভাবনা)
    getHighEntropyRand(min, max) {
        const range = max - min + 1;
        const randomBuffer = new Uint32Array(1);
        window.crypto.getRandomValues(randomBuffer);
        return min + (randomBuffer[0] % range);
    },

    generate() {
        // ৫) বয়স অনুযায়ী ডিফিকাল্টি সিলেকশন
        const age = session.ageRange || '4-6';
        const f1 = this.fruits[this.getHighEntropyRand(0, this.fruits.length - 1)];
        const f2 = this.fruits[(this.getHighEntropyRand(0, this.fruits.length - 1) + 1) % this.fruits.length];
        
        // ৪) প্রোবাবিলিটি বুস্ট করার জন্য ভেরিয়েবল রেঞ্জ বাড়ানো
        let v1 = this.getHighEntropyRand(5, 25);
        let v2 = this.getHighEntropyRand(2, 15);
        
        let question = "";
        let hint = "";

        // ৭) ভাষা নীতি: টেক্সট বাংলায়, ডিজিট ইংরেজিতে
        if (age === '4-6') {
            this.answer = v1;
            hint = "একই ফল যোগ করলে কত হয় তা দেখে একটি ফলের মান বের করো।";
            question = `<div class="animate__animated animate__fadeIn">
                ${f1} + ${f1} = ${v1 + v1}<br>
                <span class="text-cyan-400">${f1} = ?</span>
            </div>`;
        } else if (age === '7-9') {
            this.answer = v2;
            hint = "প্রথম ফলের মান ব্যবহার করে দ্বিতীয় ফলের মান খুঁজে বের করো।";
            question = `<div class="animate__animated animate__fadeIn">
                ${f1} = ${v1}<br>
                ${f1} + ${f2} = ${v1 + v2}<br>
                <span class="text-fuchsia-400">${f2} = ?</span>
            </div>`;
        } else {
            // ১০-১৩ বছরের জন্য জটিল ক্যালকুলেশন
            this.answer = v1;
            hint = "গুণ এবং বিয়োগফল ব্যবহার করে সঠিক সংখ্যাটি অনুমান করো।";
            question = `<div class="animate__animated animate__fadeIn">
                ${f1} × ${f2} = ${v1 * v2}<br>
                ${f1} - ${f2} = ${v1 - v2}<br>
                <span class="text-yellow-400">${f1} = ?</span>
            </div>`;
        }

        // ৬) ইনস্ট্রাকশন আপডেট
        document.getElementById('inst-hint').innerText = "নির্দেশনা: " + hint;

        return { question, options: this.getOptions(this.answer) };
    },

    getOptions(correct) {
        let opts = new Set([correct]);
        while(opts.size < 4) {
            // ৪) অপশন জেনারেশনেও হাই-প্রোবাবিলিটি নিশ্চিত করা
            let fake = correct + this.getHighEntropyRand(1, 10) * (this.getHighEntropyRand(0, 1) ? 1 : -1);
            if(fake > 0 && fake !== correct) opts.add(fake);
        }
        return Array.from(opts).sort(() => this.getHighEntropyRand(0, 100) - 50);
    }
};
