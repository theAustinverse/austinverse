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
  camera.position.set(0, 0, 4.4);

  // Cluster of matte-plastic "connector" capsules, tumbled together.
  var group = new THREE.Group();
  scene.add(group);

  var palette = [0x1a2ffb, 0xf5f6fb, 0x111214];
  var pieces = [
    { radius: 0.34, length: 1.5, pos: [0, 0, 0], rot: [0.3, 0.2, 0], color: 0 },
    { radius: 0.3, length: 1.3, pos: [0.55, 0.35, 0.2], rot: [1.4, 0.6, 0.3], color: 1 },
    { radius: 0.26, length: 1.1, pos: [-0.5, -0.3, 0.3], rot: [0.9, -0.7, 1.1], color: 2 },
    { radius: 0.22, length: 0.9, pos: [0.2, -0.6, -0.3], rot: [-0.6, 1.1, 0.4], color: 1 },
    { radius: 0.24, length: 1.0, pos: [-0.3, 0.55, -0.25], rot: [0.5, -1.2, -0.5], color: 0 },
  ];

  pieces.forEach(function (piece) {
    var geometry = new THREE.CapsuleGeometry(piece.radius, piece.length, 6, 16);
    var material = new THREE.MeshStandardMaterial({
      color: palette[piece.color],
      roughness: 0.75,
      metalness: 0.05,
    });
    var capsule = new THREE.Mesh(geometry, material);
    capsule.position.set(piece.pos[0], piece.pos[1], piece.pos[2]);
    capsule.rotation.set(piece.rot[0], piece.rot[1], piece.rot[2]);
    group.add(capsule);
  });

  var keyLight = new THREE.PointLight(0xffffff, 40, 20, 2);
  keyLight.position.set(-3, 3, 4);
  scene.add(keyLight);

  var rimLight = new THREE.PointLight(0x1a2ffb, 35, 20, 2);
  rimLight.position.set(3, -1.5, 2);
  scene.add(rimLight);

  var hemiLight = new THREE.HemisphereLight(0xffffff, 0xf0f1fa, 0.9);
  scene.add(hemiLight);

  scene.add(new THREE.AmbientLight(0xffffff, 0.4));

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
      group.rotation.y = elapsed * 0.16;
      group.rotation.x = Math.sin(elapsed * 0.2) * 0.15;
    }
    camera.position.x += (pointerX * 0.6 - camera.position.x) * 0.04;
    camera.position.y += (-pointerY * 0.6 - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
    renderer.render(scene, camera);
    window.requestAnimationFrame(animate);
  }
  animate();
})();
