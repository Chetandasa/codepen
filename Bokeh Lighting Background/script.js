!function() {
  "use strict";
  function e() {
      t.aspect = window.innerWidth / window.innerHeight, t.updateProjectionMatrix(), i.setSize(window.innerWidth, window.innerHeight);
  }
  let t, n, i, o, r, a, d;
  const s = 1e3, E = 50, u = 10;
  !function() {
      const w = document.createElement("div");
      document.body.appendChild(w), n = new THREE.Scene(), (i = new THREE.WebGLRenderer({
          antialias: !0,
          alpha: !0
      })).setPixelRatio(window.devicePixelRatio), i.setSize(window.innerWidth, window.innerHeight), 
      i.outputEncoding = THREE.sRGBEncoding, w.appendChild(i.domElement), (t = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, .01, 3 * E)).position.set(0, 0, E), 
      t.lookAt(0, 0, 0);
      const l = new THREE.AmbientLight(16777215);
      n.add(l), n.fog = new THREE.FogExp2(0, .003), d = {
          pointTexture: {
              value: new THREE.TextureLoader().load("https://threejs.org/examples/textures/sprites/spark1.png")
          }
      };
      const h = new THREE.ShaderMaterial({
          uniforms: d,
          vertexShader: document.getElementById("vertexshader").textContent,
          fragmentShader: document.getElementById("fragmentshader").textContent,
          blending: THREE.AdditiveBlending,
          depthTest: !1,
          transparent: !0,
          vertexColors: !0
      });
      r = new THREE.BufferGeometry();
      const m = [], p = [], c = [], g = new THREE.Color();
      for (let e = 0; e < s; e++) m.push((2 * Math.random() - 1) * E), m.push((2 * Math.random() - 1) * E), 
      m.push((2 * Math.random() - 1) * E), g.setHSL(e / s, 1, .6), p.push(g.r, g.g, g.b), 
      c.push(u);
      r.setAttribute("position", new THREE.Float32BufferAttribute(m, 3)), r.setAttribute("color", new THREE.Float32BufferAttribute(p, 3)), 
      r.setAttribute("size", new THREE.Float32BufferAttribute(c, 1).setUsage(THREE.DynamicDrawUsage)), 
      a = new THREE.Points(r, h), n.add(a), (o = new THREE.OrbitControls(t, i.domElement)).autoRotate = !0, 
      o.autoRotateSpeed = 1, o.enableDamping = !0, o.enablePan = !1, o.minDistance = .1, 
      o.maxDistance = E * Math.sqrt(2), o.minPolarAngle = 0, o.maxPolarAngle = Math.PI / 2, 
      o.target.set(0, 0, 0), o.update(), window.addEventListener("resize", e);
  }(), function e() {
      requestAnimationFrame(e), o.update(), i.render(n, t);
  }();
}();