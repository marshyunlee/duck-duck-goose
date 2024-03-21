// ====== Settings ======
let data = {
	"settings": {
		"frameRate": 30,
		"offsetY": -30,
		"background": "0, 0, 16",
		"globalLight": "255, 255, 255",
		"ambientLight": "255, 255, 255",
		// "pointLight": "255, 173, 236",
	}
}

let scene;
let renderer;
let controls;
let camera;
let settings;
let grid;
let light;
let ambient;

const width = window.innerWidth;
const height = window.innerHeight;
const aspectRatio = width/height;
const fieldOfView = 5;
const nearView = 100;
const farView = 2000;

const initScene = async () => {
	// env
	scene = new THREE.Scene();

	renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(width, height);
	renderer.setClearColor(0xffbb6c);
	renderer.shadowMap.enabled = true;
	renderer.shadowMap.type = THREE.PCFSoftShadowMap;

	// scene.add(new THREE.AxesHelper(1000));

	// camera
	camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearView, farView)
	camera.position.set(300, -300, 300);
	camera.up = new THREE.Vector3(0, 0, 1.5);

	// light
	light = new THREE.PointLight(`rgb(${settings.globalLight})`, 1, 500);
	light.position.set(100, -30, 50);
	light.castShadow = true;
	ambient = new THREE.AmbientLight(`rgb(${settings.ambientLight})`, 0.5); 
	scene.add(light, ambient);

	// orbit control
	controls = new THREE.OrbitControls(camera, renderer.domElement);
	controls.minPolarAngle = Math.PI/2 - 0.5;
	controls.maxPolarAngle = Math.PI/2 - 0.5;
	controls.zoomSpeed = 0.3;
	controls.minDistance = 150;
	controls.maxDistance = 250;
	controls.enableDamping = true;
	controls.dampingFactor = 0.3;
	
	controls.autoRotate = true;
	controls.autoRotateSpeed = -3;

	document.body.appendChild(renderer.domElement);
}
