import React from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import * as dat from 'dat.gui';
import './ThreeD.css'

class Navigation extends React.Component {
	componentDidMount() {
		/**
		 * Base
		 */
		// Canvas
		const canvas = document.querySelector("canvas.webgl");

		// Scene
		const scene = new THREE.Scene();

		/**
		 * Object
		 */
		const loader = new GLTFLoader();

		loader.load(
			"/test/scene.gltf",
			function (gltf) {
				scene.add(gltf.scene);
			},
			undefined,
			function (error) {
				console.error(error);
			}
		);
		// const light = new THREE.PointLight( 0xffffff, 1000, 100 );
		// light.position.set( 0, 10, 0 );
		// gui.add(light.position,"x",-10,10,0.01)
		// gui.add(light.position,"y",-10,10,0.01)
		// gui.add(light.position,"z",-10,10,0.01)
		// gui.add(light,"intensity",0,1000,0.01)
		// scene.add( light );
		// const geometry = new THREE.BoxBufferGeometry(1, 1, 1)
		// const material = new THREE.MeshBasicMaterial({ color:0xff0000 })
		// const mesh = new THREE.Mesh(geometry, material)
		// scene.add(mesh)
		const params={
			func1:function(){
				window.location.href='/3d';
			},func2:function(){
				window.location.href='/3d2';
			},func3:function(){
				window.location.href='/3d3';
			}
		}
		const gui = new dat.GUI();
		gui.add(params,"func1").name("First View")
		gui.add(params,"func2").name("Second View")
		gui.add(params,"func3").name("Third View")
		gui.domElement.id = 'gui';

		/**
		 * Sizes
		 */
		const sizes = {
			width: window.innerWidth,
			height: window.innerHeight,
		};

		window.addEventListener("resize", () => {
			// Update sizes
			sizes.width = window.innerWidth;
			sizes.height = window.innerHeight;

			// Update camera
			camera.aspect = sizes.width / sizes.height;
			camera.updateProjectionMatrix();

			// Update renderer
			renderer.setSize(sizes.width, sizes.height);
			renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		});

		/**
		 * Camera
		 */
		// Base camera
		const camera = new THREE.PerspectiveCamera(
			75,
			sizes.width / sizes.height,
			0.1,
			100
		);
		camera.position.x = 1;
		camera.position.y = 1;
		camera.position.z = 1;
		scene.add(camera);

		// Controls
		const controls = new OrbitControls(camera, canvas);
		controls.enableDamping = true;

		/**
		 * Renderer
		 */
		const renderer = new THREE.WebGLRenderer({
			canvas: canvas,
		});
		renderer.setSize(sizes.width, sizes.height);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

		/**
		 * Animate
		 */
		const clock = new THREE.Clock();

		const tick = () => {
			const elapsedTime = clock.getElapsedTime();

			// Update controls
			controls.update();

			// Render
			renderer.render(scene, camera);

			// Call tick again on the next frame
			window.requestAnimationFrame(tick);
		};

		tick();
	}
	render() {
		return (
			<div>
				<canvas class="webgl"></canvas>
			</div>
		);
	}
}
export default Navigation;
