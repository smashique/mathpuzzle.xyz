// js/engine.js
const ThreeEngine = {
    scene: null, camera: null, renderer: null, particles: null,

    init() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('bg-canvas'), alpha: true, antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);

        // অসীম নক্ষত্রপুঞ্জ
        const geometry = new THREE.BufferGeometry();
        const pos = [];
        for(let i=0; i<8000; i++) pos.push((Math.random()-0.5)*2000, (Math.random()-0.5)*2000, (Math.random()-0.5)*2000);
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
        
        this.particles = new THREE.Points(geometry, new THREE.PointsMaterial({ size: 1.5, color: 0x22d3ee, transparent: true, opacity: 0.8 }));
        this.scene.add(this.particles);
        this.camera.position.z = 500;
        this.animate();
    },

    animate() {
        requestAnimationFrame(() => this.animate());
        // ইনফিনিট রোটেশন
        this.particles.rotation.y += 0.001;
        this.particles.rotation.x += 0.0005;
        this.renderer.render(this.scene, this.camera);
    }
};
