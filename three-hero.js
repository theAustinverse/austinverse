import * as THREE from "./vendor/three.module.min.js";

(function () {
  "use strict";

  var canvas = document.getElementById("hero-canvas");
  if (!canvas || window.innerWidth < 768) return;

  var container = canvas.parentElement;
  var prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  var renderer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true,
    });
  } catch (err) {
    return;
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.set(0, 0, 6);

  var geometry = new THREE.IcosahedronGeometry(1.6, 6);
  var material = new THREE.MeshPhysicalMaterial({
    color: 0x1c1d22,
    metalness: 0.3,
    roughness: 0.42,
    clearcoat: 0.6,
    clearcoatRoughness: 0.3,
  });
  var mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  var keyLight = new THREE.PointLight(0x21a179, 75, 20, 2);
  keyLight.position.set(-3, 2, 3);
  scene.add(keyLight);

  var rimLight = new THREE.PointLight(0xc026d3, 85, 20, 2);
  rimLight.position.set(3, -1.5, 2);
  scene.add(rimLight);

  var hemiLight = new THREE.HemisphereLight(0xffffff, 0xf3f1ec, 0.6);
  scene.add(hemiLight);

  scene.add(new THREE.AmbientLight(0xffffff, 0.15));

  function resize() {
    var w = container.clientWidth;
    var h = container.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  window.addEventListener("resize", resize);
  resize();

  var pointerX = 0;
  var pointerY = 0;
  window.addEventListener("mousemove", function (event) {
    pointerX = (event.clientX / window.innerWidth) * 2 - 1;
    pointerY = (event.clientY / window.innerHeight) * 2 - 1;
  });

  var clock = new THREE.Clock();

  function animate() {
    var elapsed = clock.getElapsedTime();
    if (!prefersReducedMotion) {
      mesh.rotation.y = elapsed * 0.18;
      mesh.rotation.x = elapsed * 0.08;
    }
    camera.position.x += (pointerX * 0.6 - camera.position.x) * 0.04;
    camera.position.y += (-pointerY * 0.6 - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
    renderer.render(scene, camera);
    window.requestAnimationFrame(animate);
  }
  animate();
})();
