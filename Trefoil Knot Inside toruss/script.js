/*!
TrefoilKnotInsideTorus.js
Copyright (c) 2023 Wakana Y.K.
URL:https://codepen.io/wakana-k/pen/wvxqPeL
*/
!function() {
  "use strict";
  function t(t, n) {
      (u = new THREE.TorusKnotGeometry(w, w / 6, c, p, t, n)).rotateX(-Math.PI / 2), 3 == n ? u.rotateX(-Math.PI / 5) : u.rotateX(-Math.PI / 8);
      let i = u.getAttribute("position"), o = [];
      for (let t = 0; t < i.count; t++) {
          h.fromBufferAttribute(i, t);
          let n = new THREE.Vector3(h.x - m.x, h.y - m.y, h.z - m.z);
          (h = e(n)).set(h.x, h.y, h.z), u.getAttribute("position").setXYZ(t, h.x, h.y, h.z), 
          o.push(h.x, h.y, h.z);
      }
      return u.verticesNeedUpdate = !0, u.attributes.position.needsUpdate = !0, u.computeBoundingBox(), 
      u.computeBoundingSphere(), [ u, o ];
  }
  function e(t) {
      let e = 1 / t.length();
      return t.setLength(e), t;
  }
  function n() {
      o.aspect = window.innerWidth / window.innerHeight, o.updateProjectionMatrix(), a.setSize(window.innerWidth, window.innerHeight);
  }
  const i = 5;
  let o, r, a, s, u, d, E, w, l, c = 1200, p = 50, h = new THREE.Vector3(), m = function(t) {
      let e = .5 + Math.cos(t) * Math.cos(t), n = t, i = Math.sin(t);
      return new THREE.Vector3(e, n, i);
  }(0);
  const T = {
      t1: 0,
      t2: 0,
      t3: 0,
      t4: 0
  };
  !function() {
      const e = document.createElement("div");
      document.body.appendChild(e), r = new THREE.Scene(), (a = new THREE.WebGLRenderer({
          antialias: !0,
          alpha: !0
      })).setPixelRatio(window.devicePixelRatio), a.setSize(window.innerWidth, window.innerHeight), 
      a.outputEncoding = THREE.sRGBEncoding, e.appendChild(a.domElement), (o = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, .1, 10 * i)).position.set(0, .3 * i, i), 
      o.lookAt(0, 0, 0), w = 3;
      let u = [], c = t(2, 3);
      (l = c[0]).morphAttributes.position = [], u = (c = t(2, 4))[1], l.morphAttributes.position[0] = new THREE.Float32BufferAttribute(u, 3), 
      u = (c = t(2, 5))[1], l.morphAttributes.position[1] = new THREE.Float32BufferAttribute(u, 3), 
      u = (c = t(2, 7))[1], l.morphAttributes.position[2] = new THREE.Float32BufferAttribute(u, 3), 
      u = (c = t(2, 9))[1], l.morphAttributes.position[3] = new THREE.Float32BufferAttribute(u, 3), 
      d = new THREE.MeshNormalMaterial({
          side: THREE.DoubleSide,
          wireframe: !0
      }), E = new THREE.Mesh(l, d), r.add(E), (s = new THREE.OrbitControls(o, a.domElement)).autoRotate = !0, 
      s.autoRotateSpeed = 1, s.enableDamping = !0, s.enablePan = !1, s.minDistance = .1, 
      s.maxDistance = 10 * i, s.minPolarAngle = 0, s.maxPolarAngle = Math.PI / 2, s.target.set(0, 0, 0), 
      s.update(), window.addEventListener("resize", n);
      let p = new TWEEN.Tween(T).to({
          t1: 0,
          t2: 0,
          t3: 0,
          t4: 0
      }, 2e3), h = new TWEEN.Tween(T).to({
          t1: 0,
          t2: 1,
          t3: 0,
          t4: 0
      }, 2e3), m = new TWEEN.Tween(T).to({
          t1: 0,
          t2: 0,
          t3: 1,
          t4: 0
      }, 2e3), f = new TWEEN.Tween(T).to({
          t1: 0,
          t2: 0,
          t3: 0,
          t4: 1
      }, 2e3);
      p.chain(h).delay(2e3), h.chain(m).delay(2e3), m.chain(f).delay(2e3), f.chain(p).delay(2e3), 
      p.start();
  }(), function t() {
      requestAnimationFrame(t), s.update(), TWEEN.update(), E.morphTargetInfluences[0] = T.t1, 
      E.morphTargetInfluences[1] = T.t2, E.morphTargetInfluences[2] = T.t3, E.morphTargetInfluences[3] = T.t4, 
      a.render(r, o);
  }();
}();