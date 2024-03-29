import * as THREE from 'three';

import './style.css';

// Сцена
const scene = new THREE.Scene();

// Объект
const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
const material = new THREE.MeshBasicMaterial({ color: 'purple' });
const mesh = new THREE.Mesh(geometry, material);
mesh.position.y = -0.5;


scene.add(mesh);

// Камера
const sizes = {
    width: 800,
    height: 800,
};
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
camera.position.y = 1;

scene.add(camera);

const canvas = document.querySelector('.canvas');

const renderer = new THREE.WebGLRenderer({ canvas });

renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);