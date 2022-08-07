var loadCharacter = async (scene) => {
	const objLoader = new THREE.OBJLoader();
	const mtlLoader = new THREE.MTLLoader();

	// set asset paths
	objLoader.setPath('./assets/objects/');
	mtlLoader.setPath('./assets/objects/');

	// load objects
	await mtlLoader.load('DuckModel_3.mtl', (materials) => {
		materials.preload();
		objLoader.setMaterials(materials);
		objLoader.load('DuckModel_3.obj', (object) => {	
			object.position.set(-3.7, 5.7, -1)
			
			object.rotation.set(0, Math.PI/2, Math.PI/2);
			object.scale.setScalar(1);

			scene.add(object);
			character = object;
		});
	});
}
