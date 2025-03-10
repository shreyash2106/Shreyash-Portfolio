import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Background3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create drone body
    const body = new THREE.Group();

    // Main body (center cube)
    const bodyGeometry = new THREE.BoxGeometry(0.5, 0.2, 0.5);
    const bodyMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xB86EFF,
      emissive: 0x2a0066,
      specular: 0xB86EFF,
      shininess: 100
    });
    const bodyMesh = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.add(bodyMesh);

    // Arms
    const armGeometry = new THREE.CylinderGeometry(0.05, 0.05, 1, 8);
    const armMaterial = new THREE.MeshPhongMaterial({ color: 0x171738 });

    // Create 4 arms
    const positions = [
      { rotation: 0, x: 0.5, z: 0.5 },
      { rotation: Math.PI/2, x: -0.5, z: 0.5 },
      { rotation: Math.PI, x: -0.5, z: -0.5 },
      { rotation: -Math.PI/2, x: 0.5, z: -0.5 }
    ];

    positions.forEach(pos => {
      const arm = new THREE.Mesh(armGeometry, armMaterial);
      arm.rotation.y = pos.rotation;
      arm.position.set(pos.x, 0, pos.z);
      body.add(arm);

      // Add propeller to each arm
      const propGeometry = new THREE.CylinderGeometry(0.2, 0.2, 0.05, 16);
      const propMaterial = new THREE.MeshPhongMaterial({ 
        color: 0xB86EFF,
        transparent: true,
        opacity: 0.6
      });
      const propeller = new THREE.Mesh(propGeometry, propMaterial);
      propeller.position.set(pos.x, 0, pos.z);
      body.add(propeller);
    });

    // Scale down the entire drone
    body.scale.set(0.4, 0.4, 0.4);

    scene.add(body);

    // Add lights
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 1, 1);
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    camera.position.z = 5;
    camera.position.y = 2;
    camera.lookAt(0, 0, 0);

    // Animation variables
    let time = 0;
    const radius = 3;
    const height = 1;
    const speed = 0.003; // Increased speed

    // Animation
    function animate() {
      requestAnimationFrame(animate);

      time += speed;

      // More dynamic flight pattern
      const x = Math.cos(time) * radius + Math.sin(time * 2) * (radius / 2);
      const z = Math.sin(time) * radius + Math.cos(time * 3) * (radius / 2);
      const y = Math.sin(time * 2) * height + Math.cos(time * 4) * (height / 2) + 2;

      body.position.x = x;
      body.position.z = z;
      body.position.y = y;

      // Rotate drone to face direction of movement
      body.rotation.y = time + Math.PI/2;

      // More pronounced tilt
      body.rotation.z = Math.sin(time) * 0.2;
      body.rotation.x = Math.cos(time) * 0.2;

      // Rotate propellers faster
      body.children.forEach((child, index) => {
        if (index > 4) { // Only rotate propellers
          child.rotation.y += 0.8;
        }
      });

      renderer.render(scene, camera);
    }
    animate();

    // Handle resize
    function handleResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          object.material.dispose();
        }
      });
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute top-0 left-0 w-full h-full z-0" />;
}