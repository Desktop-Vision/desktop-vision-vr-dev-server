// THREE is already in the global scope
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Monkey from './assets/monkey.glb'

let m = null
const loader = new GLTFLoader()
loader.load(Monkey, function (gltf) {
  m = gltf.scene
  m.scale.setScalar(0.1)
  m.position.y += 1.2
  m.position.z -= 0.4
  m.position.x += 0.6
  DVScene.add(m)
})

// this function is invoked every frame via a request animation frame loop
window.DVTick = function () {
  if (m) {
    m.rotation.x += 0.01
    m.rotation.y += 0.01
  }
}
