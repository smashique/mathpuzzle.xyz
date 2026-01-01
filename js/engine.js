// js/engine.js
const ThreeEngine = {
    scene: null, camera: null, renderer: null, stars: null,

    init() {
        // ১. সিন এবং ক্যামেরা সেটআপ
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        
        // ২. রেন্ডারার সেটআপ (সাদা স্ক্রিন এড়াতে alpha: true এবং antialias)
        this.renderer = new THREE.WebGLRenderer({ 
            canvas: document.getElementById('bg-canvas'), 
            antialias: true, 
            alpha: true 
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);

        // ৩. নক্ষত্রপুঞ্জ জেনারেশন (Infinite Particles)
        const starGeometry = new THREE.BufferGeometry();
        const starVertices = [];
        for (let i = 0; i < 15000; i++) {
            const x = (Math.random() - 0.5) * 2000;
            const y = (Math.random() - 0.5) * 2000;
            const z = (Math.random() - 0.5) * 2000;
            starVertices.push(x, y, z);
        }
        starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
        
        const starMaterial = new THREE.PointsMaterial({ 
            color: 0x22d3ee, // আপনার সায়ান কালার থিম
            size: 0.8,
            transparent: true,
            opacity: 0.8
        });
        
        this.stars = new THREE.Points(starGeometry, starMaterial);
        this.scene.add(this.stars);

        this.camera.position.z = 1;
        this.animate();
    },

    animate() {
        requestAnimationFrame(() => this.animate());
        
        // ৪. ইনফিনিট রোটেশন লজিক
        if(this.stars) {
            this.stars.rotation.y += 0.0005;
            this.stars.rotation.x += 0.0002;
        }
        
        this.renderer.render(this.scene, this.camera);
    }
};

// উইন্ডো রিসাইজ করলে যাতে অ্যানিমেশন না ভাঙে
window.addEventListener('resize', () => {
    if (ThreeEngine.renderer) {
        ThreeEngine.camera.aspect = window.innerWidth / window.innerHeight;
        ThreeEngine.camera.updateProjectionMatrix();
        ThreeEngine.renderer.setSize(window.innerWidth, window.innerHeight);
    }
});
