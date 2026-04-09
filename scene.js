import * as THREE from 'three';

const geometryScale = 3;

// Scene, Camera, Renderer
const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(
  window.innerWidth / -100,
  window.innerWidth / 100,
  window.innerHeight / 100,
  window.innerHeight / -100,
  0.1,
  1000
);
camera.position.z = 5;

// Append renderer to Document
const container = document.getElementById('scene-container');
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(container.clientWidth, container.clientHeight);
camera.aspect = container.clientWidth / container.clientHeight;
camera.updateProjectionMatrix();
container.appendChild(renderer.domElement);

// Cube
const cubeScale = geometryScale * 2 / 3 ;
const geometry = new THREE.BoxGeometry( cubeScale, cubeScale, cubeScale );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: true } );
const cube = new THREE.Mesh( geometry, material );
cube.position.x = -7;
scene.add( cube );

// Icosahedron
const icosahedronScale = geometryScale;
const icosahedronGeometry = new THREE.IcosahedronGeometry(icosahedronScale);
const icosahedronMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
const icosahedron = new THREE.Mesh(icosahedronGeometry, icosahedronMaterial);
scene.add(icosahedron);

// Octahedron
const octahedronScale = geometryScale * 2 / 3;
const octahedronGeometry = new THREE.OctahedronGeometry(octahedronScale);
const octahedronMaterial = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: true } );
const octahedron = new THREE.Mesh( octahedronGeometry, octahedronMaterial );
octahedron.position.x = 7;
scene.add( octahedron );

// Animation
function animate() {
  requestAnimationFrame(animate);
  
  cube.rotation.y += 0.01;
  cube.rotation.x -= 0.02;

  icosahedron.rotation.x += 0.01;
  icosahedron.rotation.y += 0.01;

  octahedron.rotation.z += 0.01;
  octahedron.rotation.y -= 0.02;

  renderer.render(scene, camera);
}
animate();

// Resize
function onWindowResize() {
  const width = container.clientWidth;
  const height = container.clientHeight;

  // OrthographicCamera adjust
  camera.left = -width / 100;
  camera.right = width / 100;
  camera.top = height / 100;
  camera.bottom = -height / 100;

  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
}

window.addEventListener('resize', onWindowResize);