// ======misc=====
const mouse = new THREE.Vector2();
const mousePointer = new THREE.Raycaster();

// =====variables=====
let character;
let MOUSE_POINTED;
let CHARACTER_LOCATED;

var frameCount = 0;
var fpsInterval, startTime, now, then, elapsed;

// ========== ON LOAD ==========
var loadListener = async () => {
	window.addEventListener('load', async () => {
		console.log('loaded');
		settings = data.settings;
		document.body.style.background = `rgb(${settings.background})`;
		floorplan = data.floorplan;
		await initScene()
		.then(await loadCharacter(scene)
			.then(() => {
				// limit frame rate based on the settings
				fpsInterval = 1000 / settings.frameRate;
				then = Date.now();
				startTime = then;
				animate();
			}))
	});

	window.addEventListener('resize', () => {
		console.log('resized');
		camera.aspect = window.innerWidth/window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(window.innerWidth, window.innerHeight);
	}, false);


	document.addEventListener("mousewheel", (event) => {
		console.log('wheeldown');
		console.log(event.deltaY);
		camera.position.y += event.deltaY;
	}, false);

	const animate = () => {
		requestAnimationFrame(animate);
		now = Date.now();
		elapsed = now - then;
		if (elapsed > fpsInterval) {
			then = now - (elapsed % fpsInterval);
	
			// render
			if (controls) controls.update();
			renderer.render(scene, camera);
		}

		
		// if (camera.fov > 0.2) {
		// 	camera.fov -= 0.01;
		// 	camera.updateProjectionMatrix();
		// }
	}
}
