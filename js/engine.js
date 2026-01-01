/* js/engine.js - */
const ThreeEngine = {
    scene: null, camera: null, renderer: null, particles: null,

    init() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('render-canvas'), antialias: true, alpha: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        const geometry = new THREE.BufferGeometry();
        const pos = [];
        for(let i=0; i<5000; i++) pos.push((Math.random()-0.5)*120, (Math.random()-0.5)*120, (Math.random()-0.5)*120);
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
        this.particles = new THREE.Points(geometry, new THREE.PointsMaterial({ size: 0.1, color: 0x38bdf8 }));
        this.scene.add(this.particles);
        this.camera.position.z = 2;
        this.animate();
    },

    animate() {
        requestAnimationFrame(() => this.animate());
        this.particles.rotation.y += 0.002;
        this.renderer.render(this.scene, this.camera);
    }
};

const SoundEffects = {
    ctx: new (window.AudioContext || window.webkitAudioContext)(),
    play(type) {
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
                o.frequency.value = f; g.gain.setValueAtTime(0.1, this.ctx.currentTime + i * 0.1);
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
