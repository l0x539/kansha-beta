'use client'
import { useFBO, Text, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { folder, useControls } from "leva";
import { useMemo, useRef, useEffect, useLayoutEffect, useState, Suspense } from "react";
import * as THREE from "three";
import { v4 as uuidv4 } from "uuid";
import { makeNoise4D } from "open-simplex-noise";
import sphereVertexShader from "@/utils/shaders/vertexShaders";
import sphereFragmentShader from "@/utils/shaders/fragmentShaders";
import { usePathname } from 'next/navigation';
import { useSpring } from "@react-spring/three";
import { lerp } from "three/src/math/MathUtils";

const UnstableSphere = () => {
  const noise = useMemo(() => makeNoise4D(Date.now()), []);
  // This reference gives us direct access to our mesh
  const mesh = useRef<THREE.InstancedMesh<THREE.SphereGeometry, THREE.RawShaderMaterial>>(null);
  const meshSprite = useRef<THREE.Sprite>(null);
  const sphereGeometry = useRef<THREE.SphereGeometry>(null);

  const [logo] = useTexture(['/assets/images/Logo.png']);
  
  // This is our main render target where we'll render and store the scene as a texture
  const mainRenderTarget = useFBO();
  const backRenderTarget = useFBO();

  const pathname = usePathname();
  
  const {
    methods: {
      curve: methodsCurve
    },
    discoveryPosition1,
    discoveryPosition2,
    defaultPosition,
    discoveryTextColor,
    homeTextColor,
  } = useMemo(() => {
    return {
      methods: {
        curve: new THREE.CatmullRomCurve3( [
          new THREE.Vector3(),
          new THREE.Vector3( -1, 0, 2.1 ),
          new THREE.Vector3( 0, 0, 4.2 )
        ])
      },
      discoveryPosition1: new THREE.Vector3(-4.5, 0.5, -2),
      discoveryPosition2: new THREE.Vector3(-8.5, -2.6, -6),
      defaultPosition: new THREE.Vector3(),
      discoveryTextColor: new THREE.Color("#6f6f6f"),
      homeTextColor: new THREE.Color("#FFFFFF")
    }
  }, []);
  

  // const positionData = useMemo(() => {}, []);

  const {
    light,
    shininess,
    diffuseness,
    fresnelPower,
    iorR,
    iorY,
    iorG,
    iorC,
    iorB,
    iorP,
    saturation,
    chromaticAberration,
    refraction,
    noiseX,
    noiseY,
    noiseZ,
    noiseSpeed,
    noiseStrenth
  } = useControls({
    light: {
      value: {
        x: -1,
        y: 1,
        z: 1
      }
    },
    diffuseness: {
      value: 0.2
    },
    shininess: {
      value: 15.0
    },
    fresnelPower: {
      value: 8.0
    },
    ior: folder({
      iorR: { min: 1.0, max: 2.333, step: 0.001, value: 1.15 },
      iorY: { min: 1.0, max: 2.333, step: 0.001, value: 1.16 },
      iorG: { min: 1.0, max: 2.333, step: 0.001, value: 1.18 },
      iorC: { min: 1.0, max: 2.333, step: 0.001, value: 1.22 },
      iorB: { min: 1.0, max: 2.333, step: 0.001, value: 1.22 },
      iorP: { min: 1.0, max: 2.333, step: 0.001, value: 1.22 }
    }),
    saturation: { value: 1.03, min: 1, max: 1.25, step: 0.01 },
    chromaticAberration: {
      value: 0.04,
      min: 0,
      max: 1.5,
      step: 0.01
    },
    refraction: {
      value: 0.22,
      min: 0,
      max: 1,
      step: 0.01
    },
    noiseX: {
      value: 1,
      min: -2,
      max: 2,
      step: 0.01
    },
    noiseY: {
      value: 1,
      min: -2,
      max: 2,
      step: 0.01
    },
    noiseZ: {
      value: 1,
      min: -2,
      max: 2,
      step: 0.01
    },
    noiseSpeed: {
      value: 1.05,
      min: -2,
      max: 2,
      step: 0.01
    },
    noiseStrenth: {
      value: 0.17,
      min: -2,
      max: 2,
      step: 0.01
    }
  });

  const uniforms = useMemo(
    () => ({
      uTexture: {
        value: null
      },
      uIorR: { value: 1.0 },
      uIorY: { value: 1.0 },
      uIorG: { value: 1.0 },
      uIorC: { value: 1.0 },
      uIorB: { value: 1.0 },
      uIorP: { value: 1.0 },
      uRefractPower: {
        value: 0.2
      },
      uChromaticAberration: {
        value: 1.0
      },
      uSaturation: { value: 0.0 },
      uShininess: { value: 40.0 },
      uDiffuseness: { value: 0.2 },
      uFresnelPower: { value: 8.0 },
      uLight: {
        value: new THREE.Vector3(-1.0, 1.0, 1.0)
      },
      winResolution: {
        value: new THREE.Vector2(
          window.innerWidth,
          window.innerHeight
        ).multiplyScalar(Math.min(window.devicePixelRatio, 2)) // if DPR is 3 the shader glitches 🤷‍♂️
      }
    }),
    []
  );

  const v3 = useMemo(() => new THREE.Vector3, []);
  const positionData = useMemo<THREE.Vector3[]>(() => [], []);
  const positionData1 = useMemo<THREE.Vector3[]>(() => [], []);
  const instanceDummy = useMemo(() => new THREE.Object3D(), []);

  useLayoutEffect(() => {
    if (sphereGeometry.current) {
      for (let i = 0; i < sphereGeometry.current.attributes.position.count; i++){
        instanceDummy.position.set(0, 0, 0);
        instanceDummy.updateMatrix();
        mesh.current?.setMatrixAt(0, instanceDummy.matrix);
        v3.fromBufferAttribute(sphereGeometry.current.attributes.position, i);
        positionData.push(v3.clone());
      }
      for (let i = 0; i < sphereGeometry.current.attributes.position.count; i++){
        instanceDummy.position.set(-10, -10, 0);
        instanceDummy.updateMatrix();
        mesh.current?.setMatrixAt(1, instanceDummy.matrix);
        v3.fromBufferAttribute(sphereGeometry.current.attributes.position, i);
        positionData1.push(v3.clone());
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const {
    progressSpring,
    progressDiscoverySpring,
    progressHomeSpring
  } = useSpring({
    progressSpring: '/services' === pathname ? 1 : 0,
    progressDiscoverySpring: '/services/discovery' === pathname ? 1 : 0,
    progressHomeSpring: '/' === pathname || '/services/our-method' === pathname ? 1 : 0,
    config: { mass: 1, tension: 280, friction: 100 }
  });

  useFrame((state) => {
    const { gl, scene, camera } = state;
    if (!mesh.current || !sphereGeometry.current) return;

    let t = state.clock.getElapsedTime() / 1.;
    positionData.forEach((p, idx) => {
      let setNoise = noise(p.x * lerp(noiseX, 2, progressDiscoverySpring.get()), p.y * lerp(noiseY, 2, progressDiscoverySpring.get()), p.z * lerp(noiseZ, 2, progressDiscoverySpring.get()), t * noiseSpeed);
      switch (pathname) {
        case '/services':
          v3.copy(p).addScaledVector(p, setNoise*lerp(noiseStrenth, 0.02, progressSpring.get()));
          break;
        case '/services/discovery':
          v3.copy(p).addScaledVector(p, setNoise*lerp(noiseStrenth, 0.05, progressDiscoverySpring.get()));
          break;
        default:
          v3.copy(p).addScaledVector(p, setNoise*noiseStrenth);

      }

      sphereGeometry.current?.attributes.position.setXYZ(idx, v3.x, v3.y, v3.z);
    })
    sphereGeometry.current.computeVertexNormals();
    sphereGeometry.current.attributes.position.needsUpdate = true;

    
    mesh.current.visible = false;

    mesh.current.material.uniforms.uLight.value = new THREE.Vector3(
      light.x,
      light.y,
      light.z
    );

    mesh.current.material.uniforms.uIorR.value = iorR;
    mesh.current.material.uniforms.uIorY.value = iorY;
    mesh.current.material.uniforms.uIorG.value = iorG;
    mesh.current.material.uniforms.uIorC.value = iorC;
    mesh.current.material.uniforms.uIorB.value = iorB;
    mesh.current.material.uniforms.uIorP.value = iorP;
    
    mesh.current.material.uniforms.uRefractPower.value = refraction;
    const newColor = homeTextColor.clone().lerp(discoveryTextColor, progressDiscoverySpring.get())
    meshSprite.current?.material.color.set(newColor);
    
    gl.setRenderTarget(backRenderTarget);
    gl.render(scene, camera);

    mesh.current.material.uniforms.uTexture.value = backRenderTarget.texture;
    mesh.current.material.side = THREE.BackSide;

    mesh.current.visible = true;

    gl.setRenderTarget(mainRenderTarget);
    gl.render(scene, camera);

    mesh.current.material.uniforms.uTexture.value = mainRenderTarget.texture;
    mesh.current.material.side = THREE.FrontSide;

    gl.setRenderTarget(null);
    const newPos = methodsCurve.getPointAt(progressSpring.get());

    switch (pathname) {
      case '/services':
        // const pos = mesh.current.position.clone().lerp(newPos, progressSpring.get());
        instanceDummy.position.set(newPos.x, newPos.y, newPos.z);
        instanceDummy.rotateY(progressSpring.get()*((1 - progressSpring.get())*Math.PI/2));
        instanceDummy.updateMatrix();
        mesh.current.setMatrixAt(0, instanceDummy.matrix);

        const pos1 = mesh.current.position.clone().lerp(new THREE.Vector3, progressSpring.get())
        instanceDummy.position.set(pos1.x, pos1.y, pos1.z);
        instanceDummy.rotation.set((1-progressSpring.get()) * instanceDummy.rotation.x, (1-progressSpring.get()) * instanceDummy.rotation.y, (1-progressSpring.get()) * instanceDummy.rotation.z);
        instanceDummy.updateMatrix();
        mesh.current.setMatrixAt(1, instanceDummy.matrix);

        mesh.current.updateMatrix();
        mesh.current.matrixWorldNeedsUpdate = true;
        mesh.current.material.uniforms.uChromaticAberration.value = lerp(chromaticAberration, 0.5, progressSpring.get());
        mesh.current.material.uniforms.uSaturation.value = lerp(saturation, 1, progressSpring.get());
        mesh.current.material.uniforms.uDiffuseness.value = lerp(diffuseness, -0.1, progressSpring.get());
        mesh.current.material.uniforms.uShininess.value = lerp(shininess, 80.0, progressSpring.get());
        mesh.current.material.uniforms.uFresnelPower.value = lerp(fresnelPower, 6.7, progressSpring.get());
        break;
      case '/services/discovery':
        const newVecPos = mesh.current.position.clone()
        newVecPos.lerp(discoveryPosition1, progressDiscoverySpring.get())
        instanceDummy.position.set(newVecPos.x, newVecPos.y, newVecPos.z);
        instanceDummy.rotation.set(progressDiscoverySpring.get() * 0, progressDiscoverySpring.get() * 0, progressDiscoverySpring.get() * 0);
        instanceDummy.updateMatrix();
        mesh.current.setMatrixAt(0, instanceDummy.matrix);

        const newVecPos1 = mesh.current.position.clone();
        newVecPos1.lerp(discoveryPosition2, progressDiscoverySpring.get());
        instanceDummy.position.set(newVecPos1.x, newVecPos1.y, newVecPos1.z);
        instanceDummy.rotation.set((1-progressDiscoverySpring.get()) * instanceDummy.rotation.x, (1-progressDiscoverySpring.get()) * instanceDummy.rotation.y, (1-progressDiscoverySpring.get()) * instanceDummy.rotation.z);
        instanceDummy.updateMatrix();
        mesh.current.setMatrixAt(1, instanceDummy.matrix);

        mesh.current.updateMatrix();
        mesh.current.matrixWorldNeedsUpdate = true;
        mesh.current.material.uniforms.uDiffuseness.value = diffuseness;
        mesh.current.material.uniforms.uShininess.value = shininess;
        mesh.current.material.uniforms.uFresnelPower.value = fresnelPower;
        
        mesh.current.material.uniforms.uSaturation.value = saturation;

        mesh.current.material.uniforms.uChromaticAberration.value = lerp(chromaticAberration, 0.01, progressDiscoverySpring.get());
        break;
      default:
        const newDefPos = mesh.current.position.clone();
        newDefPos.lerp(defaultPosition, progressHomeSpring.get())
        instanceDummy.position.set(newDefPos.x, newDefPos.y, newDefPos.z);
        instanceDummy.rotation.set((1-progressHomeSpring.get()) * instanceDummy.rotation.x, (1-progressHomeSpring.get()) * instanceDummy.rotation.y, (1-progressHomeSpring.get()) * instanceDummy.rotation.z);
        instanceDummy.updateMatrix();

        const newDefPos1 = mesh.current.position.clone();
        newDefPos1.lerp(new THREE.Vector3, progressDiscoverySpring.get())
        instanceDummy.position.set(newDefPos1.x, newDefPos1.y, newDefPos1.z);
        instanceDummy.rotation.set(progressDiscoverySpring.get() * 0, progressDiscoverySpring.get() * 0, progressDiscoverySpring.get() * 0);
        instanceDummy.updateMatrix();
        mesh.current.setMatrixAt(1, instanceDummy.matrix);

        mesh.current.updateMatrix();
        mesh.current.setMatrixAt(0, instanceDummy.matrix);
        mesh.current.matrixWorldNeedsUpdate = true;
        mesh.current.material.uniforms.uDiffuseness.value = diffuseness;
        mesh.current.material.uniforms.uShininess.value = shininess;
        mesh.current.material.uniforms.uFresnelPower.value = fresnelPower;
        
        mesh.current.material.uniforms.uSaturation.value = saturation;
        mesh.current.material.uniforms.uChromaticAberration.value = chromaticAberration;
        break;
    }
    mesh.current.instanceMatrix.needsUpdate = true;
    mesh.current.material.needsUpdate = true
  });

  return (
    <>
      <color attach="background" args={["black"]} />
      <instancedMesh ref={mesh} args={[undefined, undefined, 2]}>
        <sphereGeometry ref={sphereGeometry} args={[2.5, 256, 256]} />
        <shaderMaterial
          key={uuidv4()}
          vertexShader={sphereVertexShader}
          fragmentShader={sphereFragmentShader}
          uniforms={{
            ...uniforms
          }}
        />
      </instancedMesh>
      {/*<mesh position={[0, 2, 10]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="white" />
        </mesh>*/}
      <sprite
        position={[0, 0, -5]} /* position */
        scale={new THREE.Vector3(64.5/3, 9.125/3, 1)}
        ref={meshSprite}
      >
        <spriteMaterial map={logo} />
      </sprite>
      {/* <Bubble /> */}
    </>
  );
};

export default UnstableSphere;

useTexture.preload('/assets/images/Logo.png');
