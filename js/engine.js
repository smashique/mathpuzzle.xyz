// js/engine.js
const ThreeEngine = {
    scene: null, camera: null, renderer: null, stars: null,

    init() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        
        this.renderer = new THREE.WebGLRenderer({ 
            canvas: document.getElementById('bg-canvas'), 
            antialias: true, 
            alpha: true 
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);

        // অসীম নক্ষত্রপুঞ্জ তৈরি
        const starGeometry = new THREE.BufferGeometry();
        const starVertices = [];
        for (let i = 0; i < 15000; i++) {
            starVertices.push((Math.random() - 0.5) * 2000, (Math.random() - 0.5) * 2000, (Math.random() - 0.5) * 2000);
        }
        starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
        
        const starMaterial = new THREE.PointsMaterial({ color: 0x22d3ee, size: 0.7 });
        this.stars = new THREE.Points(starGeometry, starMaterial);
        this.scene.add(this.stars);

        this.camera.position.z = 1;
        this.animate();
    },

    animate() {
        requestAnimationFrame(() => this.animate());
        // ইনফিনিট লুপ মুভমেন্ট
        this.stars.rotation.y += 0.0005;
        this.stars.rotation.x += 0.0002;
        this.renderer.render(this.scene, this.camera);
    }
};

// উইন্ডো রিসাইজ হ্যান্ডেলার
window.addEventListener('resize', () => {
    if (ThreeEngine.camera) {
        ThreeEngine.camera.aspect = window.innerWidth / window.innerHeight;
        ThreeEngine.camera.updateProjectionMatrix();
        ThreeEngine.renderer.setSize(window.innerWidth, window.innerHeight);
    }
});
