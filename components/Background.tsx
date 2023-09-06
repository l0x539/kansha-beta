import { FC, ForwardedRef, forwardRef, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BackSide, CatmullRomCurve3, Color, FrontSide, Group, InstancedMesh, Mesh, Object3D, PlaneGeometry, RawShaderMaterial, ShaderMaterial, SphereGeometry, Sprite, Vector2, Vector3 } from "three";
import {dropVertexShader, sphereVertexShader} from "@/utils/shaders/vertexShaders";
import {dropFragmentShader, sphereFragmentShader} from "@/utils/shaders/fragmentShaders";
import { Html, Text, useFBO, useFont, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { makeNoise4D } from "open-simplex-noise";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { disableIntro, selectGl, setProgress } from "@/store/features/gl/glSlice";
import { lerp } from "three/src/math/MathUtils";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { useSpring } from "@react-spring/three";
import { throttle } from "lodash";
import NoisyBackground from "./NoisyBackground";
import { getGPUTier } from "detect-gpu";
import { COMING_SOON, pages, tracking } from "@/utils/constants";
import { useWheel } from "@use-gesture/react";

const Background: FC<{
  gpuTier: number;
}> = ({
  gpuTier
}) => {
  const {
    indexedPages
  } = useMemo(() => {
    
    const indexedPages = Object.keys(pages);
    
    return {
      indexedPages
    }
  }, []);
  const pathname = usePathname() as keyof typeof pages;
  const searchParams  = useSearchParams();  

  const [{
    color,
    prevPosition,
    prevRotation,
    opacity,
    speed,
    noiseStrength,
    noiseSpeed
  }, setOptions] = useState({
    color: new Color('#FFF'),
    opacity: 0,
    prevPosition: new Vector3,
    prevRotation: new Vector3,
    speed: 0.1,
    noiseStrength: 0,
    noiseSpeed: 0
  });

  const {progress: preProgress} = useAppSelector(selectGl);
  const dispatch = useAppDispatch();

  const setPreProgress = (value: number) => {
    dispatch(setProgress(value));
  }

  // useFrame(() => {
  //   console.log(progress.get(), currentPan, progress.isAnimating);
  // })
  

  useEffect(() => {
    const speed = pages[pathname]?.speed ?? pages['default'].speed;
    setOptions((prevState) => ({
      color: pages[pathname]?.color ?? pages['default'].color,
      opacity: pages[pathname]?.opacity ?? pages['default'].opacity,
      prevPosition: pages[pathname]?.bubble1Pos ?? pages['default'].bubble1Pos,
      prevRotation: pages[pathname]?.bubble1Pos ?? pages['default'].bubble1Pos,
      speed,
      noiseSpeed: lerp(prevState.noiseSpeed, pages[pathname]?.noiseSpeed ?? pages['default'].noiseSpeed, speed),
      noiseStrength: lerp(prevState.noiseStrength, pages[pathname]?.noiseStrength ?? pages['default'].noiseStrength, speed)
    }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const currentTab = (parseInt(`${searchParams.get('tab')}`) || 1) -1;

  const mainBubblePos = pathname === '/services/our-method' 
  ? pages['/services/our-method'].tabs.bubble1Pos.getPoint(currentTab/4) 
  : pages[pathname]?.bubble1Pos ?? pages['default'].bubble1Pos;

  const mainBubbleRot = pages[pathname]?.bubble1Rot ?? pages['default'].bubble1Rot

  const mainBubble2Pos =  pathname === '/services/our-method' ? pages['/services/our-method'].tabs.bubble2Pos.getPoint(currentTab/4) : pages[pathname]?.bubble2Pos ?? pages['default'].bubble2Pos

  const currentPan = parseInt(`${searchParams.get('pan')}`) || 0;

  const currentPos = pathname === '/' ? 
  pages['/']?.panPath.getPoint(currentPan/4) : mainBubblePos;
  
  const currentLookAt = pathname === '/' ? 
  pages['/']?.panLookAt.getPoint(currentPan/4) : mainBubblePos;

  const newObj = new Object3D();
  
  newObj.position.set(currentPos.x, currentPos.y, currentPos.z);
  newObj.lookAt(currentLookAt);

  const currentRot = new Vector3();
  currentRot.set(mainBubbleRot.x, newObj.rotation.y, mainBubbleRot.z);
  
  return (
    <>
      <color attach="background" args={["black"]} />
      {COMING_SOON && !searchParams.get('demo') ? <ComingSoonText /> : <IntroText />}
      <LogoBg opacity={opacity} color={color} speed={speed} />
      <group>
        <Bubble preProgress={preProgress} setPreProgress={setPreProgress} tracking={tracking} indexedPages={indexedPages} progress={preProgress} gpuTier={gpuTier} index="0" uniforms={pages[pathname]?.uniforms ?? pages['default'].uniforms} position={currentPos} rotation={currentRot} speed={speed} noiseSpeed={pages[pathname]?.noiseSpeed ?? pages['default'].noiseSpeed} noiseStrength={pages[pathname]?.noiseStrength ?? pages['default'].noiseStrength} />
      </group>
      <group>
        <Bubble preProgress={preProgress} setPreProgress={setPreProgress} tracking={tracking} indexedPages={indexedPages} progress={preProgress} gpuTier={gpuTier} index="1" uniforms={pages[pathname]?.uniforms ?? pages['default'].uniforms} position={mainBubble2Pos} rotation={pages[pathname]?.bubble2Rot ?? pages['default'].bubble2Rot} speed={speed} noiseSpeed={pages[pathname]?.noiseSpeed ?? pages['default'].noiseSpeed} noiseStrength={pages[pathname]?.noiseStrength ?? pages['default'].noiseStrength} />
      </group>
      <DropEffect speed={speed} uniforms={pages[pathname]?.dropUniforms ?? pages['default'].dropUniforms} />
      <NoisyBackground getProgress={() => 0} />
    </>
  );
};

const DropEffect: FC<{
  uniforms: {
    diffuseness: number;
    fresnelPower: number;
    iorR: number;
    iorY: number;
    iorG: number;
    iorC: number;
    iorB: number;
    iorP: number;
    chromaticAberration: number;
    refraction: number;
  };
  speed: number;
}> = ({uniforms, speed}) => {
  const mesh = useRef<Mesh<PlaneGeometry, ShaderMaterial>>(null);
  const dotRef = useRef<Group>(null);
  const mainRenderTarget = useFBO();
  const backRenderTarget = useFBO();

  const {
    defaultUniforms,
    v3,
  } = useMemo(
    () => ({
      defaultUniforms: {
        uTexture: {
          value: null
        },
        uIorR: { value: 1.15 },
        uIorY: { value: 1.16 },
        uIorG: { value: 1.18 },
        uIorC: { value: 2.22 },
        uIorB: { value: 1.22 },
        uIorP: { value: 1.22 },
        uRefractPower: {
          value: 0.22
        },
        uChromaticAberration: {
          value: 1.4
        },
        uSaturation: { value: 0.0 },
        uShininess: { value: 40.0 },
        uDiffuseness: { value: 0.2 },
        uFresnelPower: { value: 20.0 },
        uLight: {
          value: new Vector3(-1.0, 1.0, 1.0)
        },
        winResolution: {
          value: new Vector2(
            window.innerWidth,
            window.innerHeight
          ).multiplyScalar(Math.min(window.devicePixelRatio, 2))
        },
        noiseStrength: {value: 0},
        noiseSpeed: {value: 0},
        noiseX: {value: 0},
        noiseY: {value: 0},
        noiseZ: {value: 0},
      },
      v3: new Vector3,
    }),
    []
  );

  const {
    diffuseness,
    fresnelPower,
    iorR,
    iorY,
    iorG,
    iorC,
    iorB,
    iorP,
    chromaticAberration,
    refraction,
  } = uniforms;

  
  useFrame(({gl, scene, camera, clock}) => {
    if (!mesh.current) return;

    const obj0 = scene.getObjectByName('bubble0');
    const obj1 = scene.getObjectByName('bubble1');
    obj0 && (obj0.visible = false);
    obj1 && (obj1.visible = false);

    mesh.current.material.uniforms.uIorR.value = iorR;
    mesh.current.material.uniforms.uIorY.value = iorY;
    mesh.current.material.uniforms.uIorG.value = iorG;
    mesh.current.material.uniforms.uIorC.value = iorC;
    mesh.current.material.uniforms.uIorB.value = iorB;
    mesh.current.material.uniforms.uIorP.value = iorP;
    
    mesh.current.material.uniforms.uRefractPower.value = refraction;

    mesh.current.material.uniforms.uDiffuseness.value = diffuseness;
    mesh.current.material.uniforms.uFresnelPower.value = fresnelPower;

    mesh.current.visible = false;
    gl.setRenderTarget(backRenderTarget);
    gl.render(scene, camera);

    mesh.current.material.uniforms.uTexture.value = backRenderTarget.texture;
    mesh.current.material.side = BackSide;



    gl.setRenderTarget(mainRenderTarget);
    gl.render(scene, camera);

    obj0 && (obj0.visible = true);
    obj1 && (obj1.visible = true);
    mesh.current.visible = true;

    mesh.current.material.uniforms.uTexture.value = mainRenderTarget.texture;
    mesh.current.material.side = FrontSide;

    gl.setRenderTarget(null);

    if (!dotRef.current) return;
    dotRef.current.position.setY(dotRef.current.position.y+(Math.cos(clock.getElapsedTime()))*.01)
    dotRef.current.scale.setScalar(1+(Math.cos(clock.getElapsedTime()))*.1)
    mesh.current.material.uniforms.uChromaticAberration.value = (chromaticAberration + (Math.cos(clock.getElapsedTime()))*.1);

  });

  return (
    <group position={[0., 0., -10]} scale={1.6} visible={chromaticAberration > 0}>
      <group ref={dotRef} visible={chromaticAberration > 0}>
        <Text position={[-11, 4, -.1]} anchorX="center" anchorY="middle" fontSize={13} letterSpacing={-0.025} color="white" fillOpacity={chromaticAberration > 0 ? 0.8:0}>
          .
        </Text>
      </group>
      <group>
        <Text position={[-11.5, -1.5, -.1]} anchorX="center" anchorY="middle" fontSize={13} letterSpacing={-0.025} color="white" fillOpacity={chromaticAberration > 0 ? 0.8:0}>
          .
        </Text>
      </group>
      <group ref={dotRef}>
        <Text position={[8, 3, -.1]} anchorX="center" anchorY="middle" fontSize={40} letterSpacing={-0.025} color="white" fillOpacity={chromaticAberration > 0 ? 0.8:0}>
          .
        </Text>
      </group>
      <mesh ref={mesh} position={[0, 0, 0]} visible={chromaticAberration > 0}>
        <planeGeometry args={[30, 30]} />
        <shaderMaterial fragmentShader={dropFragmentShader} vertexShader={dropVertexShader} 
        key={uuidv4()}
        uniforms={{
          ...defaultUniforms
        }}
        />
      </mesh>
    </group>
  );
};

const LogoBg: FC<{
  color: Color;
  opacity: number;
  speed: number;
}> = ({color, speed, opacity}) => {
  const [logo] = useTexture(['/assets/images/Logo.png']);
  const meshSprite = useRef<Sprite>(null);
  const [ready, setReady] = useState(false);
  useFrame(() => {
    if (!meshSprite.current) return;
    meshSprite.current?.material.color.lerp(color, speed);
    if (ready) {
      meshSprite.current.material.opacity = lerp(meshSprite.current.material.opacity, opacity, speed);
    }
  });

  useEffect(() => {
    const timout = setTimeout(() => {
      setReady(true);
    }, 5000);

    return () => {clearTimeout(timout)}
  }, []);

  return (
    <sprite
        position={[0, 0, -5]} /* position */
        scale={new Vector3(64.5/3, 9.125/3, 1)}
        ref={meshSprite}
      >
      <spriteMaterial map={logo} color={"#FFF"} alphaTest={0} opacity={0} />
    </sprite>
  );
}

const ComingSoonText = () => {
  const pathname = usePathname();
  const [logo] = useTexture(['/assets/images/Logo.png']);

  return (<group position={[0, 0, -3]}>
    <sprite
        position={[0, 0.9, -5]} /* position */
        scale={new Vector3(64.5/4, 9.125/4, 1)}
      >
      <spriteMaterial map={logo} color={"#FFF"} alphaTest={0} opacity={1} />
    </sprite>

    <Text position={[0, -1., 0]} anchorX="center" anchorY="middle" visible={pathname === '/'} fontSize={0.75} letterSpacing={-0.025} font={'/assets/fonts/HelveticaNeueMedium.woff'} color="white">
      COMING SOON!
    </Text>
  </group>);
};

const IntroText = () => {
  const pathname = usePathname();
  const params = useSearchParams();  
  const ref = useRef<Group>(null);

  const TEXTS = useMemo(() => [
    "Lorem\nContent Lab\n& Ipsum dolor\n/Sit amet\n2022—2023",
    "We help \nfounders \nmake profits \nthat match \ntheir passions.",
    "We help \nfounders \nmake profits \nthat match \ntheir passions.",
    "We empowering \ncompanies to \nembrace \ndisruptive ideas",
    "We reduce the gap \nfor innovation and \nguide our clients \ntowards sustainable \nsuccess",
  ], []);

  const text = useRef<any>(null);

  useFrame(({clock}) => {
    if (!ref.current) return;

    ref.current.position.lerp(ref.current.position.clone().setX(- ((parseInt(`${params.get('pan')}`)||0)*20)), 0.1)
    
  });

  return (<group ref={ref} position={[20, 0, 0]}>
    {TEXTS.map((text, index) => {
      return <Text key={index} visible={pathname === '/'} fontSize={1.4} position={[(index*20) -2, 0, -3]} letterSpacing={-0.025} font={'/assets/fonts/HelveticaNeueMedium.woff'} color="white">
        {text}
      </Text>
    })}
  </group>);
};

const IntroTextOld = () => {
  const text = useRef<any>(null);
  const pathname = usePathname();

  const TEXTS = useMemo(() => [
    "Lorem\nContent Lab\n& Ipsum dolor\n/Sit amet\n2022—2023",
    "We help \nfounders \nmake profits \nthat match \ntheir passions.",
    "We help \nfounders \nmake profits \nthat match \ntheir passions.",
    "We empowering \ncompanies to \nembrace \ndisruptive ideas",
    "We reduce the gap \nfor innovation and \nguide our clients \ntowards sustainable \nsuccess",
    ""
  ], [])

  const [content, setContent] = useState(TEXTS[0]);

  useEffect(() => {
    let interval = setInterval(() => {},99999);
    interval = setInterval(() => {
      const index = TEXTS.findIndex((t) => t === content);
      const char = TEXTS.find((t) => t === content);
      if (char === "") return clearInterval(interval);
      setContent(TEXTS[index+1]);
    }, 5000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [

  ])

  useFrame(({clock}) => {
    if (!text.current) return;

    const progress = (clock.elapsedTime-3)*0.06;
    
    text.current.fillOpacity = lerp(text.current.fillOpacity, 0, progress > 1 ? 1 : progress < 0 ? 0 : progress);
    
  });

  return(
    <>
      <Text visible={pathname === '/'} ref={text} fontSize={1.25} position={[-2, 0, -2]} letterSpacing={-0.025} font={'/assets/fonts/HelveticaNeueMedium.woff'} color="white">
        {content}
      </Text>
    </>
    
  );
};

const Bubble: FC<{
  tracking: typeof tracking;
  indexedPages: string[];
  progress: number;
  position: Vector3;
  speed: number;
  rotation: Vector3;
  index: string;
  noiseSpeed: number;
  noiseStrength: number;
  uniforms: {
    light: {
      x: number;
      y: number;
      z: number;
    };
    diffuseness: number;
    shininess: number;
    fresnelPower: number;
    iorR: number;
    iorY: number;
    iorG: number;
    iorC: number;
    iorB: number;
    iorP: number;
    saturation: number;
    chromaticAberration: number;
    refraction: number;
    noiseX: number;
    noiseY: number;
    noiseZ: number;
  };
  gpuTier: number;
  preProgress: number;
  setPreProgress: (value: number) => void;
}> = ({
  index,
  position,
  rotation,
  speed,
  uniforms,
  noiseSpeed,
  noiseStrength,
  gpuTier,
  indexedPages,
  progress,
  tracking,
  preProgress,
  setPreProgress
}) => {
  const mesh = useRef<Mesh<SphereGeometry, RawShaderMaterial>>(null);
  const mainRenderTarget = useFBO();
  const backRenderTarget = useFBO();

  const [excite, setExcite] = useState(false);
  const {
    pp,
  } = useSpring({
    pp: progress,
    config: { mass: 1, tension: 280, friction: 100 }
  });

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
    noiseZ
  } = uniforms;

  const {
    defaultUniforms,
    v3,
    positionData,
    noise
  } = useMemo(
    () => ({
      defaultUniforms: {
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
          value: 0.0
        },
        uChromaticAberration: {
          value: 0.0
        },
        uSaturation: { value: 0.0 },
        uShininess: { value: 40.0 },
        uDiffuseness: { value: 0.2 },
        uFresnelPower: { value: 8.0 },
        uLight: {
          value: new Vector3(-1.0, 1.0, 1.0)
        },
        winResolution: {
          value: new Vector2(
            window.innerWidth,
            window.innerHeight
          ).multiplyScalar(Math.min(window.devicePixelRatio, 2))
        },
        noiseStrength: {value: 0},
        noiseSpeed: {value: 0},
        noiseX: {value: 0},
        noiseY: {value: 0},
        noiseZ: {value: 0},
      },
      v3: new Vector3,
      positionData: [] as Vector3[],
      noise: makeNoise4D(Date.now())
    }),
    []
  );

  useLayoutEffect(() => {
    if (mesh.current) {
      for (let i = 0; i < mesh.current.geometry.attributes.position.count; i++){
        v3.fromBufferAttribute(mesh.current.geometry.attributes.position, i);
        positionData.push(v3.clone());
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pathname = usePathname() as keyof typeof tracking;
  const searchParams = useSearchParams();0
  const currentPan = (parseInt(`${searchParams.get('pan')}`) || 0) as 0 | 1 | 2 | 3;



  useFrame(({gl, scene, camera, clock}) => {
    if (!mesh.current) return;

    const t = clock.getElapsedTime() / 1.;

    const lerpNoiseX = lerp(mesh.current?.material.uniforms.noiseX.value, noiseX, speed);
    mesh.current.material.uniforms.noiseX.value = lerpNoiseX;
    const lerpNoiseY = lerp(mesh.current?.material.uniforms.noiseY.value, noiseY, speed);
    mesh.current.material.uniforms.noiseY.value = lerpNoiseY;
    const lerpNoiseZ = lerp(mesh.current?.material.uniforms.noiseZ.value, noiseZ, speed);
    mesh.current.material.uniforms.noiseZ.value = lerpNoiseZ
    const lerpNoiseStrength = lerp(mesh.current?.material.uniforms.noiseStrength.value, noiseStrength, speed);
    mesh.current.material.uniforms.noiseStrength.value = lerpNoiseStrength;
    const lerpNoiseSpeed = lerp(mesh.current?.material.uniforms.noiseSpeed.value, noiseSpeed, speed);
    mesh.current.material.uniforms.noiseSpeed.value = noiseSpeed;

    positionData.forEach((p, idx) => {
      
      const simpNoise = noise(p.x * lerpNoiseX, p.y * lerpNoiseY, p.z * lerpNoiseZ, t * lerpNoiseSpeed);
      v3.copy(p).addScaledVector(p, simpNoise*lerpNoiseStrength);
      mesh.current?.geometry.attributes.position.setXYZ(idx, v3.x, v3.y, v3.z);
    });
    mesh.current?.geometry.computeVertexNormals();
    mesh.current.geometry.attributes.position.needsUpdate = true;
    const obj0 = scene.getObjectByName('bubble0');
    const obj1 = scene.getObjectByName('bubble1');
    obj0 && (obj0.visible = false);
    obj1 && (obj1.visible = false);
    mesh.current.visible = false;

    mesh.current.material.uniforms.uLight.value = new Vector3(
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

    // if (pp.isAnimating) {
    //   if (pathname === '/') {
    //     const currPos = index === '0' ? pages[pathname].panPath.getPoint(currentPan/4) : pages[pathname].bubble2Pos;
    //     if (currentPan < 4) {
    //       const nextPos = index === '0' ? pages[pathname].panPath.getPoint((currentPan+1)/4) : pages[pathname].bubble2Pos;
          
    //       const newPos = currPos.clone().lerp(nextPos, pp.get())
    //       mesh.current.position.set(newPos.x, newPos.y, newPos.z)
    //     }
    //   }
    // } else {
    mesh.current.position.lerp(position, speed);

    const newRot = v3.set(mesh.current.rotation.x, mesh.current.rotation.y,mesh.current.rotation.z);
    newRot.lerp(rotation, speed);
    mesh.current.rotation.set(newRot.x, newRot.y, newRot.z);
    
    mesh.current.material.uniforms.uChromaticAberration.value = lerp(mesh.current.material.uniforms.uChromaticAberration.value, chromaticAberration, speed);
    mesh.current.material.uniforms.uSaturation.value = lerp(mesh.current.material.uniforms.uSaturation.value, saturation, speed);
    mesh.current.material.uniforms.uDiffuseness.value = lerp(mesh.current.material.uniforms.uDiffuseness.value, diffuseness, speed);
    mesh.current.material.uniforms.uShininess.value = lerp(mesh.current.material.uniforms.uShininess.value, shininess, speed);
    mesh.current.material.uniforms.uFresnelPower.value = lerp(mesh.current.material.uniforms.uFresnelPower.value, fresnelPower, speed);

    gl.setRenderTarget(backRenderTarget);
    gl.render(scene, camera);

    mesh.current.material.uniforms.uTexture.value = backRenderTarget.texture;
    mesh.current.material.side = BackSide;

    obj0 && (obj0.visible = true);
    obj1 && (obj1.visible = true);


    gl.setRenderTarget(mainRenderTarget);
    gl.render(scene, camera);

    if (index === '0')
      obj1 && (obj1.visible = true);
    else
      obj0 && (obj0.visible = true);

    mesh.current.material.uniforms.uTexture.value = mainRenderTarget.texture;
    mesh.current.material.side = FrontSide;

    gl.setRenderTarget(null);

  });

  useEffect(() => {
    if (!mesh.current) return;

    mesh.current.matrixWorldNeedsUpdate = true;
    mesh.current.geometry.attributes.position.needsUpdate = true;
    mesh.current.material.needsUpdate = true;
    mesh.current.updateMatrix();
    mesh.current.updateMatrixWorld();
  }, [gpuTier])

  return (
    <mesh onPointerMove={() => {
      setExcite(true);

      throttle(() => {
        setExcite(false)
      }, 400, {
        leading: true,
        trailing: false
      })
    }} name={"bubble"+index} ref={mesh}>
      <sphereGeometry args={[2.5, gpuTier * 32, gpuTier * 32]} />
      <shaderMaterial
        key={uuidv4()}
        vertexShader={sphereVertexShader}
        fragmentShader={sphereFragmentShader}
        uniforms={{
          ...defaultUniforms
        }}
      />
    </mesh>
  );
};

export default Background;

useTexture.preload('/assets/images/Logo.png');