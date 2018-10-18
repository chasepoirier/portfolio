import * as THREE from 'three'
import { Scene, Texture } from 'three'
// import * as TWEEN from 'tween.js';

class Canvas {
  public width: number
  public height: number
  public texture: Texture
  public scene: Scene
  public camera: any
  public renderer: any
  public animation: any
  public plane: any
  public center: any
  public vLength: any

  constructor(texture: any) {
    this.width = 0
    this.height = 0
    this.texture = texture
    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(75, 0 / 0, 0.1, 1000)
    this.renderer = new THREE.WebGLRenderer({ antialias: true })

    this.animation = null

    this.plane = this.createPlane()
    this.center = new THREE.Vector2(-10, 10)
    this.vLength = this.plane.geometry.vertices.length
  }

  public initCanvas = (canvas: HTMLDivElement | null) => {
    if (canvas) {
      this.renderer.setPixelRatio(window.devicePixelRatio)
      this.renderer.setClearColor(0xffffff)
      this.resize(canvas.clientWidth, canvas.clientHeight)
      canvas.appendChild(this.renderer.domElement)

      this.scene.add(this.plane)
      // this.lights.map(light => this.scene.add(light))
      // this.camera.position.set(100, -400, 2000);
      this.camera.position.z = 3.4
    }
  }

  public startAnimation = (ts: any) => {
    this.animation = requestAnimationFrame(this.startAnimation)
    for (let i = 0; i < this.vLength; i++) {
      const v = this.plane.geometry.vertices[i]
      const dist = new THREE.Vector2(v.x, v.y).sub(this.center)
      const size = 2.8
      const magnitude = 0.072
      const duration = 950
      v.z = Math.sin(dist.length() / -size + ts / duration) * magnitude
    }
    this.plane.geometry.verticesNeedUpdate = true
    this.render()
  }

  public stopAnimation = () => {
    cancelAnimationFrame(this.animation)
  }

  public resize = (width: number, height: number) => {
    this.width = width
    this.height = height
    this.renderer.setSize(width, height)
    this.camera.aspect = width / height
    this.camera.updateProjectionMatrix()
  }

  private render = () => {
    this.renderer.render(this.scene, this.camera)
  }

  private createPlane = () => {
    const texture = this.texture
    texture.wrapS = THREE.RepeatWrapping
    texture.wrapT = THREE.RepeatWrapping

    const geometry = new THREE.PlaneGeometry(9, 5, 40, 40)

    const material = new THREE.MeshBasicMaterial({
      map: texture,
      side: THREE.DoubleSide,
      wireframe: false
    }) as any

    material.shininess = 10

    const plane = new THREE.Mesh(geometry, material)
    plane.position.set(0, 0, 0)

    return plane
  }
}

export default Canvas
