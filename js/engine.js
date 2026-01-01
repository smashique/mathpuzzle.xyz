/* js/engine.js - */
const ThreeEngine = {
    scene: null, camera: null, renderer: null, particles: null,

    init() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ 
            canvas: document.getElementById('render-canvas'), 
            antialias: true, alpha: true 
        });
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

window.addEventListener('resize', () => {
    if(ThreeEngine.renderer) {
        ThreeEngine.camera.aspect = window.innerWidth / window.innerHeight;
        ThreeEngine.camera.updateProjectionMatrix();
        ThreeEngine.renderer.setSize(window.innerWidth, window.innerHeight);
    }
});
