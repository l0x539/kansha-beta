import { useFBO } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { usePathname } from "next/navigation";
import { useSpring } from "@react-spring/three";
import { useEffect, useRef, useState } from "react";
import { PerspectiveCamera, Texture } from "three";
import TransitionEffect from "./TransitionEffect";
import { Effect } from 'postprocessing'
import { EffectComposer } from "@react-three/postprocessing";
import { getGPUTier } from "detect-gpu";

const HomeEffects = () => {
  const [gpuTier, setGpuTier] = useState(3);
  useEffect(() => {
    getGPUTier().then((gpuTier) => {
      setGpuTier(gpuTier.tier);
    })
  }, []);
  const mainRenderTarget = useFBO();
  const backRenderTarget = useFBO();
  const pathname = usePathname();
  const {gl} = useThree();
  const camRef = useRef<PerspectiveCamera>(null)
  const transRef = useRef<Effect>(null);

  const { progressSpring } = useSpring({
    progressSpring: '/services/discovery' === pathname ? 0 : 1,
    config: { mass: 1, tension: 280, friction: 100 }
  });

  useFrame(({scene, camera, set}) => {
    if (!transRef.current) return;

    const uProgress = transRef.current?.uniforms.get('u_progress')

    // set({
    //   camera: camRef.current ?? camera
    // });

    uProgress && (uProgress.value = progressSpring.get());

    gl.setRenderTarget(backRenderTarget);
    gl.render(scene, camera);
    const uFrom = transRef.current?.uniforms.get('u_fromScene')
    uFrom && (uFrom.value = backRenderTarget.texture);
    // gl.setRenderTarget(mainRenderTarget);
    // gl.render(scene, camera);
    // const uTo = transRef.current?.uniforms.get('u_toScene')
    // uTo && (uTo.value = mainRenderTarget.texture);
    // gl.setRenderTarget(null);
  });

  return (<>
    <perspectiveCamera frustumCulled ref={camRef} position={[10, 0, 7]} />
    {
      navigator.userAgent.indexOf('Mac OS X') == -1 ? 
        <EffectComposer disableNormalPass>
          
          {gpuTier > 1 ? <TransitionEffect
            ref={transRef}
            u_fromScene={new Texture()}
            u_progress={transRef.current?.uniforms.get('u_progress')?.value ?? 0}
            t u_time={0}
          /> : <></>}
        </EffectComposer>
      : <></>
    }
  </>);
};

export default HomeEffects;