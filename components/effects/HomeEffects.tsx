import { useFBO } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { usePathname } from "next/navigation";
import { useSpring } from "@react-spring/three";
import { useRef } from "react";
import { PerspectiveCamera, Texture } from "three";
import TransitionEffect from "./TransitionEffect";
import { Effect } from 'postprocessing'
import { EffectComposer } from "@react-three/postprocessing";

const HomeEffects = () => {
  const mainRenderTarget = useFBO();
  const backRenderTarget = useFBO();
  const pathname = usePathname();

  const camRef = useRef<PerspectiveCamera>(null)
  const transRef = useRef<Effect>(null);

  const { progressSpring } = useSpring({
    progressSpring: '/services' === pathname ? 1 : 0,
    config: { mass: 1, tension: 280, friction: 100 }
  });

  useFrame(({gl, scene, camera, set}) => {
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
    gl.setRenderTarget(null);
  });

  return (<>
    <perspectiveCamera ref={camRef} position={[5, 5, 5]} />
    <EffectComposer disableNormalPass stencilBuffer>
      <TransitionEffect
        ref={transRef}
        u_fromScene={new Texture()}
        u_progress={transRef.current?.uniforms.get('u_progress')?.value ?? 0}
        t u_time={0}
      />
    </EffectComposer>
  </>);
};

export default HomeEffects;