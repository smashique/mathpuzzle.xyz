/* js/engine.js - */
const ThreeEngine = {
    scene: null, camera: null, renderer: null, particles: null,

    init() {
        try {
            this.scene = new THREE.Scene();
            this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            
            this.renderer = new THREE.WebGLRenderer({ 
                canvas: document.getElementById('render-canvas'), 
                antialias: true, 
                alpha: true 
            });
            this.renderer.setPixelRatio(window.devicePixelRatio); // হাই-ডিপিআই স্ক্রিনের জন্য
            this.renderer.setSize(window.innerWidth, window.innerHeight);

            const geometry = new THREE.BufferGeometry();
            const pos = [];
            for(let i=0; i<5000; i++) {
                pos.push((Math.random()-0.5)*120, (Math.random()-0.5)*120, (Math.random()-0.5)*120);
            }
            geometry.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
            
            // পার্টিকেল কালার আপনার ব্র্যান্ডের সাথে মিল রেখে (cyan-400)
            this.particles = new THREE.Points(geometry, new THREE.PointsMaterial({ size: 0.12, color: 0x22d3ee }));
            this.scene.add(this.particles);
            
            this.camera.position.z = 2;

            // উইন্ডো রিসাইজ হ্যান্ডেলার যোগ করা হলো
            window.addEventListener('resize', () => this.onWindowResize(), false);
            
            this.animate();
        } catch(e) { console.error("Three.js Init Error:", e); }
    },

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    },

    animate() {
        requestAnimationFrame(() => this.animate());
        if(this.particles) {
            this.particles.rotation.y += 0.0015;
            this.particles.rotation.x += 0.0005;
        }
        this.renderer.render(this.scene, this.camera);
    }
};

const SoundEffects = {
    ctx: null,

    initContext() {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
    },

    play(type) {
        this.initContext();
        if (this.ctx.state === 'suspended') this.ctx.resume(); // মোবাইল ব্রাউজার ফিক্স

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.connect(gain); gain.connect(this.ctx.destination);

        if (type === 'success') {
            osc.frequency.setValueAtTime(600, this.ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(1200, this.ctx.currentTime + 0.1);
            gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.2);
            osc.start(); osc.stop(this.ctx.currentTime + 0.2);
        } else if (type === 'levelup') {
            [523, 659, 783, 1046].forEach((f, i) => {
                const o = this.ctx.createOscillator(); const g = this.ctx.createGain();
                o.connect(g); g.connect(this.ctx.destination);
                o.frequency.value = f; 
                g.gain.setValueAtTime(0.1, this.ctx.currentTime + i * 0.1);
                o.start(this.ctx.currentTime + i * 0.1); o.stop(this.ctx.currentTime + i * 0.1 + 0.3);
            });
        } else if (type === 'fail') {
            osc.frequency.setValueAtTime(150, this.ctx.currentTime);
            osc.frequency.linearRampToValueAtTime(50, this.ctx.currentTime + 0.3);
            gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.3);
            osc.start(); osc.stop(this.ctx.currentTime + 0.3);
        }
    }
};
