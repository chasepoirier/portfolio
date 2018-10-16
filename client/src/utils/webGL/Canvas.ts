import * as THREE from 'three'
// import * as TWEEN from 'tween.js';

class Canvas {
  public width: any
  public height: any
  public texture: any
  public scene: any
  public camera: any
  public renderer: any
  public animation: any
  public plane: any
  public center: any
  public vLength: any
  public mouse: any
  public mouseX: any
  public mouseY: any
  public lights: any

  constructor(texture: any) {
    this.width = 0
    this.height = 0
    this.texture = texture
    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(75, 0 / 0, 0.1, 1000)
    this.renderer = new THREE.WebGLRenderer({ antialias: true })

    this.animation = null

    // this.plane = this.createplane()
    this.plane = this.createPlane()
    this.center = new THREE.Vector2(-10, 10)
    this.vLength = this.plane.geometry.vertices.length
    // this.lights = this.createLights()
    this.mouse = new THREE.Vector2()
  }

  public initCanvas = (canvas: any) => {
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setClearColor(0xffffff)
    this.resize(canvas.clientWidth, canvas.clientHeight)
    canvas.appendChild(this.renderer.domElement)

    this.scene.add(this.plane)
    // this.lights.map(light => this.scene.add(light))
    // this.camera.position.set(100, -400, 2000);
    this.camera.position.z = 3.4

    this.startAnimation('')
  }

  public createLights = () => {
    // first point light
    const light = new THREE.SpotLight(0xffffff)
    light.position.set(0, 0, 10)
    light.intensity = 1

    // const helper = new THREE.CameraHelper( light.shadow.camera );
    // this.scene.add( helper );

    return [light]
  }

  public createPlane = () => {
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
    // plane.rotation.x = -0.5

    return plane
  }

  public createVertices = () => {
    // for (let i = 0; i < this.vLength; i++) {
    // 	const v = this.plane.geometry.vertices[i];
    // 	const dist = new THREE.Vector2(v.x, v.y).sub(this.center);
    // 	const size = 2.8;
    // 	const magnitude = .03;
    // 	v.z = Math.sin(dist.length()/-size + (ts/500)) * magnitude;
    // }
  }

  public update = () => {
    // this.plane.rotation.x += 0.01
    // this.plane.rotation.y += 0.005
  }

  public render = () => {
    this.renderer.render(this.scene, this.camera)
  }

  public startAnimation = (ts: any) => {
    // console.log('animated running', ts)

    this.animation = requestAnimationFrame(this.startAnimation)

    for (let i = 0; i < this.vLength; i++) {
      const v = this.plane.geometry.vertices[i]
      const dist = new THREE.Vector2(v.x, v.y).sub(this.center)
      const size = 2.8
      const magnitude = 0.03
      v.z = Math.sin(dist.length() / -size + ts / 500) * magnitude
    }
    this.plane.geometry.verticesNeedUpdate = true
    this.update()
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

  public onMouseMove = (event: any) => {
    this.mouse.x = (event.clientX / this.width) * 2 - 1
    this.mouse.y = -(event.clientY / this.height) * 2 + 1
    this.mouseX = event.clientX - this.width / 2
    this.mouseY = event.clientY - this.height / 2

    const x = (this.mouseX - this.camera.position.x) * 0.000005
    const y = (this.mouseY - this.camera.position.y) * 0.000005

    this.camera.position.x = x
    this.camera.position.y = y

    this.lights[0].position.y = (this.mouseY - this.camera.position.y) * 0.005
    this.lights[0].position.x = (this.mouseX - this.camera.position.x) * 0.005

    this.camera.lookAt(this.scene.position)
  }
  // methods
}

export default Canvas
