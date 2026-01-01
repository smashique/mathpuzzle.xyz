// js/engine.js
const ThreeEngine = {
    themes: {
        'Space': { color: 0x38bdf8, speed: 0.002 },
        'Drone': { color: 0xfacc15, speed: 0.05 },
        'Underwater': { color: 0x0ea5e9, speed: 0.005 }
    },
    init() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('bg-canvas'), alpha: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        
        const geometry = new THREE.BufferGeometry();
        const positions = [];
        for(let i=0; i<5000; i++) positions.push((Math.random()-0.5)*150, (Math.random()-0.5)*150, (Math.random()-0.5)*150);
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        this.particles = new THREE.Points(geometry, new THREE.PointsMaterial({ size: 0.15, color: 0xffffff }));
        
        this.scene.add(this.particles);
        this.camera.position.z = 2;
        this.animate();
    },
    animate() {
        requestAnimationFrame(() => this.animate());
        this.particles.rotation.y += 0.002; // ইনফিনিট লুপ
        this.renderer.render(this.scene, this.camera);
    }
};
ThreeEngine.init();
