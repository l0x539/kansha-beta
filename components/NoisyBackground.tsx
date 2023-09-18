import { useFrame } from "@react-three/fiber";
import { FC, useEffect, useMemo, useRef, useState } from "react";
import { Color, MathUtils, Vector2 } from "three";
import { useControls, Leva } from "leva";
import { bgVertexShader } from "@/utils/shaders/vertexShaders";
import { bgFragmentShader } from "@/utils/shaders/fragmentShaders";
import { usePathname, useSearchParams } from "next/navigation";
import { COMING_SOON } from "@/utils/constants";

const NoisyBackground: FC<{
  getProgress: () => number;
}> = ({getProgress}) => {
  const shaderMaterialRef: any = useRef();
  const bgRef: any = useRef();
  const pathname = usePathname();

  const {
    uniforms,
    fragmentShader,
    vertexShader
  } = useMemo(
    () => ({
      uniforms: {
        uTime: {
            value: 1
        },
        uBlackPosition: {
            value: new Vector2(.0,.0)
        },
        uBlackRadius: {
            value: .141
        },
        uBlackBorderFade: {
            value: .12
        },
        uBlackTimeScale: {
            value: .4
        },
        uBlackAlpha: {
            value: 0
        },
        uColor1: {
            value: new Color("#000") // 54aba5
        },
        uColor2: {
            value: new Color("#000")
        },
        uTimeScale: {
            value: .19
        },
        uScale: {
            value: 1.08
        },
        uColor3: {
            value: new Color("#000")
        },
        uScale3: {
            value: 1.08
        },
        uScaleVignette: {
            value: .523
        },
        uVignetteBorderFade: {
            value: .216
        },
        uAlpha: {
            value: 1
        },
        uactive: {
          value: false
      }
    },
      fragmentShader: bgVertexShader,
      vertexShader: bgFragmentShader
    }),
    []
  );

  const [
    defaultColor1,
    defaultColor2,
    defaultColor3,
    partnersColor1,
    partnersColor2,
    partnersColor3,
    lazoColor1,
    lazoColor2,
    lazoColor3,
    downPartnerColor1,
    downPartnerColor2,
    downPartnerColor3,
    servicesColor1,
    servicesColor2,
    servicesColor3,
    servicesMColor1,
    servicesMColor2,
    servicesMColor3
  ] = useMemo(() => {
    return [
      new Color("#000"),
      new Color("#000"),
      new Color("#000"),
      // (new Color("#48a9b9")).lerp(new Color("#D14CA6"), 0.9),
      // (new Color("#781671")).lerp(new Color("#1e274e"), 0.2),
      // (new Color("#89B378")).lerp(new Color("#1c2e2a"), 0.1),
      new Color("#48a9b9"),
      new Color("#1e274e"),
      new Color("#1c2e2a"),
      new Color("#48a9b9"),
      new Color("#1e274e"),
      new Color("#1c2e2a"),
      new Color("#D14CA6"),
      new Color("#781671"),
      new Color("#89B378"),
      new Color("#ff0073"),
      new Color("#000000"),
      new Color("#100180"),
      new Color("#D14CA6"),
      new Color("#781671"),
      new Color("#89B378"),
    ]
  }, []);

  const {
    uBlackRadius,
    uBlackBorderFade,
    uBlackTimeScale,
    uScale,
    uScale3,
    uScaleVignette,
    uVignetteBorderFade,
    uAlpha,
    uTimeScale,
    uBlackPosition,
    uBlackAlpha,
    uColor1,
    uColor2,
    uColor3,
    useConstrolsColors
  } = useControls('Background', {
    uBlackRadius: {
      value: .141,
      min: 0,
      max: 1,
      step: .001
    },
    uBlackBorderFade: {
      value: .12,
      min: 0,
      max: 1,
    },
    uBlackTimeScale: {
      value: .4,
      min: 0,
      max: 1,
    },
    uScale: {
      value: 1.08,
      min: 0,
      max: 2,
    },
    uScale3: {
      value: 1.08,
      min: 0,
      max: 2,
    },
    uScaleVignette: {
      value: .523,
      min: 0,
      max: 1,
    },
    uVignetteBorderFade: {
      value: .216,
      min: 0,
      max: 1,
    },
    uAlpha: {
      value: 1,
      min: 0,
      max: 1,
    },
    uTimeScale: {
      value: .19,
      min: 0,
      max: 1,
    },
    uBlackPosition: {
      value: {
        x: 0,
        y: 0
      },
    },
    uBlackAlpha: {
      value: 0,
      min: 0,
      max: 1,
    },
    useConstrolsColors: {
      value: false
    },
    uColor1: {
      value: {
        r: 0x0,
        g: 0x0,
        b: 0x0
      },
    },
    uColor2: {
      value: {
        r: 0x0,
        g: 0x0,
        b: 0x0
      },
    },
    uColor3: {
      value: {
        r: 0x0,
        g: 0x0,
        b: 0x0
      },
    },
  });
  const searchParams  = useSearchParams();

  useEffect(() => {
    if (pathname === '/partners') {
      setTimeout(() => {
        partnersColor1.lerp(downPartnerColor1, 1);
        partnersColor2.lerp(downPartnerColor2, 1);
        partnersColor3.lerp(downPartnerColor3, 1);
      }, 15000)
    }
    if (COMING_SOON && !searchParams.get('demo') && pathname === '/') {
      setTimeout(() => {
        defaultColor1.lerp(partnersColor1, 1);
        defaultColor2.lerp(partnersColor2, 1);
        defaultColor3.lerp(partnersColor3, 1);
      }, 3000)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);


  useFrame(({clock}) => {
    if (!shaderMaterialRef.current) return;
    shaderMaterialRef.current.uniforms.uTime.value =  clock.elapsedTime;
    if (!bgRef.current) return;
    
    shaderMaterialRef.current.uniforms.uBlackRadius.value = uBlackRadius
    shaderMaterialRef.current.uniforms.uScale.value = uScale
    shaderMaterialRef.current.uniforms.uScale3.value = uScale3
    shaderMaterialRef.current.uniforms.uScaleVignette.value = uScaleVignette
    shaderMaterialRef.current.uniforms.uVignetteBorderFade.value = uVignetteBorderFade
    shaderMaterialRef.current.uniforms.uAlpha.value = uAlpha
    shaderMaterialRef.current.uniforms.uTimeScale.value = uTimeScale
    shaderMaterialRef.current.uniforms.uBlackAlpha.value = uBlackAlpha
    if (useConstrolsColors) {
      
      shaderMaterialRef.current.uniforms.uBlackPosition.value = uBlackPosition
      shaderMaterialRef.current.uniforms.uColor1.value = {
        r: uColor1.r/255, g: uColor1.g/255, b: uColor1.b/255
      }
      shaderMaterialRef.current.uniforms.uColor2.value = {
        r: uColor2.r/255, g: uColor2.g/255, b: uColor2.b/255
      }
      shaderMaterialRef.current.uniforms.uColor3.value = {
        r: uColor3.r/255, g: uColor3.g/255, b: uColor3.b/255
      }
    } else {
      if (pathname === '/partners') {
        shaderMaterialRef.current.uniforms.uColor1.value = shaderMaterialRef.current.uniforms.uColor1.value.lerp(partnersColor1, .01)
        shaderMaterialRef.current.uniforms.uColor2.value = shaderMaterialRef.current.uniforms.uColor2.value.lerp(partnersColor2, .02)
        shaderMaterialRef.current.uniforms.uColor3.value = shaderMaterialRef.current.uniforms.uColor3.value.lerp(partnersColor3, .03)
      }else if (pathname.startsWith('/portfolio/')) {
        shaderMaterialRef.current.uniforms.uColor1.value = shaderMaterialRef.current.uniforms.uColor1.value.lerp(lazoColor1, .01)
        shaderMaterialRef.current.uniforms.uColor2.value = shaderMaterialRef.current.uniforms.uColor2.value.lerp(lazoColor2, .02)
        shaderMaterialRef.current.uniforms.uColor3.value = shaderMaterialRef.current.uniforms.uColor3.value.lerp(lazoColor3, .03)
      } else if (pathname === '/services') {
        shaderMaterialRef.current.uniforms.uColor1.value.lerp(servicesColor1, 0.01)
        shaderMaterialRef.current.uniforms.uColor2.value.lerp(servicesColor2, 0.01)
        shaderMaterialRef.current.uniforms.uColor3.value.lerp(servicesColor3, 0.01)
      } else if (pathname === '/services/our-method') {
        shaderMaterialRef.current.uniforms.uColor1.value.lerp(servicesMColor1, 0.1)
        shaderMaterialRef.current.uniforms.uColor2.value.lerp(servicesMColor2, 0.1)
        shaderMaterialRef.current.uniforms.uColor3.value.lerp(servicesMColor3, 0.1)
        shaderMaterialRef.current.uniforms.uAlpha.value = MathUtils.inverseLerp(shaderMaterialRef.current.uniforms.uAlpha.value, Math.random()*0.1, 0.8)
      } else {
        shaderMaterialRef.current.uniforms.uColor1.value = shaderMaterialRef.current.uniforms.uColor1.value.lerp(defaultColor1, .01)
        shaderMaterialRef.current.uniforms.uColor2.value = shaderMaterialRef.current.uniforms.uColor2.value.lerp(defaultColor2, .02)
        shaderMaterialRef.current.uniforms.uColor3.value = shaderMaterialRef.current.uniforms.uColor3.value.lerp(defaultColor3, .03)
      }
    }
    shaderMaterialRef.current.uniforms.uBlackBorderFade.value = uBlackBorderFade
    shaderMaterialRef.current.uniforms.uBlackTimeScale.value = uBlackTimeScale

    
    shaderMaterialRef.current.uniforms.uBlackPosition = {
      value: bgRef.current.position
    }
  })

  return (<>
    <mesh ref={bgRef} position={[0, 0, -50]}>
      <planeGeometry args={[2, 2]} attach="geometry" />
      <shaderMaterial
        ref={shaderMaterialRef}
        attach="material"
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        depthTest={false}
        alphaTest={0}
      />
    </mesh>
  </>);
}

export default NoisyBackground;