"use client";

import { useEffect, useRef } from "react";

export default function HeroWebGL() {
  const containerRef = useRef(null);

  useEffect(() => {
    let cleanup = () => {};
    let cancelled = false;

    (async () => {
      const THREE = await import("three");
      if (cancelled || !containerRef.current) return;

      const container = containerRef.current;
      const scene = new THREE.Scene();

      const camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.set(window.innerWidth >= 1024 ? 2 : 0, 0, window.innerWidth >= 1024 ? 8 : 12);

      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      const coreGroup = new THREE.Group();
      if (window.innerWidth >= 1024) coreGroup.position.x = 3;
      scene.add(coreGroup);

      const innerRing = new THREE.Mesh(
        new THREE.TorusGeometry(1.2, 0.05, 16, 100),
        new THREE.MeshBasicMaterial({ color: 0x00e5ff, transparent: true, opacity: 0.8 })
      );
      coreGroup.add(innerRing);

      const midRing = new THREE.Mesh(
        new THREE.TorusGeometry(2.0, 0.4, 8, 50),
        new THREE.MeshBasicMaterial({
          color: 0x00e5ff,
          wireframe: true,
          transparent: true,
          opacity: 0.15,
        })
      );
      midRing.rotation.x = Math.PI / 2;
      coreGroup.add(midRing);

      const outerEdges = new THREE.EdgesGeometry(new THREE.TorusGeometry(3.0, 0.02, 16, 100));
      const outerRing = new THREE.LineSegments(
        outerEdges,
        new THREE.LineDashedMaterial({
          color: 0x39ff14,
          dashSize: 0.1,
          gapSize: 0.1,
          transparent: true,
          opacity: 0.4,
        })
      );
      outerRing.computeLineDistances();
      outerRing.rotation.y = Math.PI / 3;
      coreGroup.add(outerRing);

      const particleCount = 1500;
      const particlePos = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount * 3; i += 3) {
        const r = 1.5 + Math.random() * 1.5;
        const theta = Math.random() * 2 * Math.PI;
        const phi = Math.acos(2 * Math.random() - 1);
        particlePos[i] = r * Math.sin(phi) * Math.cos(theta);
        particlePos[i + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.3;
        particlePos[i + 2] = r * Math.cos(phi);
      }
      const particleGeo = new THREE.BufferGeometry();
      particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePos, 3));
      const particles = new THREE.Points(
        particleGeo,
        new THREE.PointsMaterial({
          color: 0x00e5ff,
          size: 0.03,
          transparent: true,
          opacity: 0.6,
          blending: THREE.AdditiveBlending,
        })
      );
      coreGroup.add(particles);

      let mouseX = 0;
      let mouseY = 0;
      const onMouseMove = (e) => {
        mouseX = (e.clientX - window.innerWidth / 2) * 0.001;
        mouseY = (e.clientY - window.innerHeight / 2) * 0.001;
      };
      document.addEventListener("mousemove", onMouseMove);

      const clock = new THREE.Clock();
      let frameId;
      const animate = () => {
        frameId = requestAnimationFrame(animate);
        const t = clock.getElapsedTime();

        innerRing.rotation.y += 0.01;
        innerRing.rotation.x += 0.005;
        midRing.rotation.z -= 0.002;
        outerRing.rotation.x += 0.005;
        outerRing.rotation.y -= 0.008;
        particles.rotation.y += 0.002;

        coreGroup.rotation.y += 0.05 * (mouseX * 0.5 - coreGroup.rotation.y);
        coreGroup.rotation.x += 0.05 * (mouseY * 0.5 - coreGroup.rotation.x);

        innerRing.scale.setScalar(1 + Math.sin(t * 2) * 0.05);

        renderer.render(scene, camera);
      };
      animate();

      const onResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        if (window.innerWidth >= 1024) {
          coreGroup.position.x = 3;
          camera.position.set(2, 0, 8);
        } else {
          coreGroup.position.x = 0;
          camera.position.set(0, 0, 12);
        }
      };
      window.addEventListener("resize", onResize);

      cleanup = () => {
        cancelAnimationFrame(frameId);
        document.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("resize", onResize);
        renderer.dispose();
        if (renderer.domElement.parentNode) {
          renderer.domElement.parentNode.removeChild(renderer.domElement);
        }
      };
    })();

    return () => {
      cancelled = true;
      cleanup();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden
      className="absolute top-0 left-0 w-screen h-screen pointer-events-none z-0"
    />
  );
}
