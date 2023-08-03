'use client'
import { useFBO, Text, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { folder, useControls } from "leva";
import { useMemo, useRef, useEffect, useState, Suspense } from "react";
import * as THREE from "three";
import { v4 as uuidv4 } from "uuid";
import { makeNoise4D } from "open-simplex-noise";
import { EffectComposer, SSAO, Bloom } from "@react-three/postprocessing";
import sphereVertexShader from "@/utils/shaders/vertexShaders";
import sphereFragmentShader from "@/utils/shaders/fragmentShaders";
import { usePathname } from 'next/navigation';
import { useSpring } from "@react-spring/three";
import { lerp } from "three/src/math/MathUtils";

const UnstableSphere = () => {
  const noise = useMemo(() => makeNoise4D(Date.now()), []);
  // This reference gives us direct access to our mesh
  const mesh = useRef<THREE.Mesh<THREE.SphereGeometry, THREE.RawShaderMaterial>>(null);
  const sphereGeometry = useRef<THREE.SphereGeometry>(null);

  const [logo] = useTexture(['/assets/images/Logo.png']);
  
  // This is our main render target where we'll render and store the scene as a texture
  const mainRenderTarget = useFBO();
  const backRenderTarget = useFBO();

  const pathname = usePathname();
  console.log(pathname);
  
  const {methods: {
    curve: methodsCurve
  }} = useMemo(() => {
    return {
      methods: {
        curve: new THREE.CatmullRomCurve3( [
          new THREE.Vector3(),
          new THREE.Vector3( -1, 0, 2.1 ),
          new THREE.Vector3( 0, 0, 4.2 )
        ])
      }
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

  useEffect(() => {
    if (sphereGeometry.current) {
      for (let i = 0; i < sphereGeometry.current.attributes.position.count; i++){
        v3.fromBufferAttribute(sphereGeometry.current.attributes.position, i);
        positionData.push(v3.clone());
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { progressSpring } = useSpring({
    progressSpring: '/services/our-method' === pathname ? 1 : 0,
    config: { mass: 1, tension: 280, friction: 100 }
  });

  useFrame((state) => {
    const { gl, scene, camera } = state;
    if (!mesh.current || !sphereGeometry.current) return;

    let t = state.clock.getElapsedTime() / 1.;
    positionData.forEach((p, idx) => {
        let setNoise = noise(p.x * noiseX, p.y * noiseY, p.z * noiseZ, t * noiseSpeed);
        if (pathname === '/services/our-method')
          v3.copy(p).addScaledVector(p, setNoise*lerp(noiseStrenth, 0.02, progressSpring.get()));
        else 
          v3.copy(p).addScaledVector(p, setNoise*noiseStrenth);

        sphereGeometry.current?.attributes.position.setXYZ(idx, v3.x, v3.y, v3.z);
    })
    sphereGeometry.current.computeVertexNormals();
    sphereGeometry.current.attributes.position.needsUpdate = true;

    
    mesh.current.visible = false;

    mesh.current.material.uniforms.uDiffuseness.value = diffuseness;
    mesh.current.material.uniforms.uShininess.value = shininess;
    mesh.current.material.uniforms.uLight.value = new THREE.Vector3(
      light.x,
      light.y,
      light.z
    );
    mesh.current.material.uniforms.uFresnelPower.value = fresnelPower;

    mesh.current.material.uniforms.uIorR.value = iorR;
    mesh.current.material.uniforms.uIorY.value = iorY;
    mesh.current.material.uniforms.uIorG.value = iorG;
    mesh.current.material.uniforms.uIorC.value = iorC;
    mesh.current.material.uniforms.uIorB.value = iorB;
    mesh.current.material.uniforms.uIorP.value = iorP;

    if (pathname === '/services/our-method') {
      mesh.current.material.uniforms.uChromaticAberration.value = lerp(chromaticAberration, 0.5, progressSpring.get());
      mesh.current.material.uniforms.uSaturation.value = lerp(saturation, 1, progressSpring.get());
    } else {
      mesh.current.material.uniforms.uSaturation.value = saturation;
      mesh.current.material.uniforms.uChromaticAberration.value = chromaticAberration;
    }
    mesh.current.material.uniforms.uRefractPower.value = refraction;

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
    mesh.current.position.set(newPos.x, newPos.y, newPos.z);
   
  });

  return (
    <>
      <color attach="background" args={["black"]} />
      <mesh ref={mesh}>
        <sphereGeometry ref={sphereGeometry} args={[2.5, 256, 256]} />
        <shaderMaterial
          key={uuidv4()}
          vertexShader={sphereVertexShader}
          fragmentShader={sphereFragmentShader}
          uniforms={{
            ...uniforms
          }}
        />
      </mesh>
      {/*<mesh position={[0, 2, 10]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="white" />
        </mesh>*/}
      <sprite
        position={[0, 0, -5]} /* position */
        scale={new THREE.Vector3(64.5/3, 9.125/3, 1)}
      >
        <spriteMaterial map={logo} />
      </sprite>
      {/* <Text
        color={"#FFFFFF"}
        fontSize={5} 
        maxWidth={200} 
        lineHeight={1}
        letterSpacing={0.02}
        textAlign={"left"}
        anchorX="center"
        anchorY="middle"
        position={[0, 0, -5]}
      >
        KANSHA
      </Text> */}
      {/*<mesh position={[0, 0, -10]}>
        <Image scale={23} url="/FMB full_square.png" transparent opacity={1} />
        </mesh>*/}
    </>
  );
};

export default UnstableSphere;

useTexture.preload('/assets/images/Logo.png');
