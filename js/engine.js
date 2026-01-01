// js/engine.js
const ThreeEngine = {
    init() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('bg-canvas'), alpha: true, antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        
        // নক্ষত্রপুঞ্জ জেনারেশন
        const geometry = new THREE.BufferGeometry();
        const pos = [];
        for(let i=0; i<8000; i++) pos.push((Math.random()-0.5)*150, (Math.random()-0.5)*150, (Math.random()-0.5)*150);
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
        
        this.particles = new THREE.Points(geometry, new THREE.PointsMaterial({ size: 0.2, color: 0x22d3ee }));
        this.scene.add(this.particles);
        this.camera.position.z = 5;
        this.animate();
    },
    animate() {
        requestAnimationFrame(() => this.animate());
        // ইনফিনিট রোটেশন
        this.particles.rotation.y += 0.001;
        this.particles.rotation.z += 0.0005;
        this.renderer.render(this.scene, this.camera);
    }
};
ThreeEngine.init();
