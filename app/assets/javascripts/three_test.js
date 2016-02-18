var camera;
var scene;
var renderer;
var geometry;
var material;
var mesh;

$( document ).ready(function() {
  init();
  animate();
  window.addEventListener( 'resize', onWindowResize, false );
});

function init() {
  camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
  camera.position.z = 1000;

  geometry = new THREE.CubeGeometry( 200, 200, 200 );
  material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );

  mesh = new THREE.Mesh( geometry, material );

  scene = new THREE.Scene();
  scene.add( mesh );

  renderer = new THREE.WebGLRenderer({alpha: true});
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  stats = new Stats();
  document.body.appendChild( stats.domElement );
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
}

function apiCall() {
  $.ajax({
    method: "GET",
    url: "/ruby"
  })
  .done(function( msg ) {
    console.log( msg );
        stats.update();
  });
}

function animate() {
  requestAnimationFrame( animate );

  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.02;

  renderer.render( scene, camera );

  apiCall();
}

