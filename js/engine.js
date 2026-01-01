// js/engine.js
const ThreeEngine = {
    scene: null, camera: null, renderer: null, particles: null,

    init() {
        console.log("3D Engine Initializing..."); // ব্রাউজার কনসোলে চেক করার জন্য
        this.scene = new THREE.Scene();
        
        // ব্যাকগ্রাউন্ড পুরোপুরি ডার্ক রাখা
        this.scene.background = new THREE.Color(0x050a15); 

        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ 
            canvas: document.getElementById('bg-canvas'), 
            antialias: true, 
            alpha: true 
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);

        // নক্ষত্রপুঞ্জ তৈরি (Infinite Stars)
        const geometry = new THREE.BufferGeometry();
        const vertices = [];
        for (let i = 0; i < 10000; i++) {
            vertices.push(
                Math.random() * 2000 - 1000,
                Math.random() * 2000 - 1000,
                Math.random() * 2000 - 1000
            );
        }
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
        const material = new THREE.PointsMaterial({ 
            size: 2, 
            color: 0x22d3ee, 
            transparent: true, 
            opacity: 0.8 
        });
        this.particles = new THREE.Points(geometry, material);
        this.scene.add(this.particles);

        this.camera.position.z = 100;
        
        // উইন্ডো রিসাইজ হ্যান্ডেলার
        window.addEventListener('resize', () => this.onWindowResize(), false);
        
        this.animate();
    },

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    },

    animate() {
        requestAnimationFrame(() => this.animate());
        
        // ইনফিনিট রোটেশন এবং মুভমেন্ট
        this.particles.rotation.y += 0.001;
        this.particles.rotation.x += 0.0005;
        
        this.renderer.render(this.scene, this.camera);
    }
};
