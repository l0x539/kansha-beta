import { CatmullRomCurve3, Color, Vector3 } from "three";

export const COMING_SOON = process.env.COMING_SOON;

export const pages = {
  'default': {
    bubble1Pos: new Vector3,
    bubble1Rot: new Vector3(0, Math.PI),
    bubble2Pos: new Vector3(-20, -20, 20),
    bubble2Rot: new Vector3,
    speed: 0.03,
    color: new Color(),
    opacity: 0,
    noiseSpeed: 1.05,
    noiseStrength: 0.17,
    uniforms: {
      light: {
        x: -1,
        y: 1,
        z: 1
      },
      diffuseness: 0.2,
      shininess: 15.0,
      fresnelPower: 8.0,
      iorR: 1.15,
      iorY: 1.16,
      iorG: 1.18,
      iorC: 1.22,
      iorB: 1.22,
      iorP: 1.22,
      saturation: 1.03,
      chromaticAberration: 0.04,
      refraction: 0.22,
      noiseX: 1,
      noiseY: 1,
      noiseZ: 1
    },
    dropUniforms: {
      light: {
        x: -1,
        y: 1,
        z: 1
      },
      diffuseness: 1,
      shininess: 0,
      fresnelPower: 8,
      iorR: 0,
      iorY: 0,
      iorG: 0,
      iorC: 0,
      iorB: 0,
      iorP: 0,
      saturation: 0,
      chromaticAberration: 0,
      refraction: 0,
      noiseX: 0,
      noiseY: 0,
      noiseZ: 0
    }
  },
  '/': {
    bubble1Pos: new Vector3(0, 0, 4),
    bubble1Rot: new Vector3(),
    bubble2Pos: new Vector3(-20, -20, 20),
    bubble2Rot: new Vector3,
    speed: 0.03,
    color: new Color(),
    opacity: 0,
    panPath: new CatmullRomCurve3( [
      new Vector3(),
      new Vector3( 0.2 ),
      new Vector3(0.4),
      new Vector3(0.6),
      new Vector3( 1, 0, 2.1 ),
      new Vector3( 0, 0, 3 )
    ]),
    panLookAt: new CatmullRomCurve3( [
      new Vector3(0, 0, 100),
      new Vector3(100, 0, -90),
      new Vector3(100, 0, -100),
      new Vector3(100, 0, 100),
      new Vector3(100, 0, 200),
      new Vector3(0, 0, 100)
    ]),
    noiseSpeed: 0.6,
    noiseStrength: 0.1,
    uniforms: {
      light: {
        x: -1,
        y: 1,
        z: 1
      },
      diffuseness: 0.15,
      shininess: 2000.0,
      fresnelPower: 7,
      iorR: 1.15,
      iorY: 1.16,
      iorG: 1.18,
      iorC: 1.22,
      iorB: 1.22,
      iorP: 1.22,
      saturation: 1.03,
      chromaticAberration: 0.04,
      refraction: 0.22,
      noiseX: 1,
      noiseY: 1,
      noiseZ: 1
    },
    dropUniforms: {
      light: {
        x: -1,
        y: 1,
        z: 1
      },
      diffuseness: 1,
      shininess: 0,
      fresnelPower: 8,
      iorR: 0,
      iorY: 0,
      iorG: 0,
      iorC: 0,
      iorB: 0,
      iorP: 0,
      saturation: 0,
      chromaticAberration: 0,
      refraction: 0,
      noiseX: 0,
      noiseY: 0,
      noiseZ: 0
    }
  },
  '/services': {
    bubble1Pos: new Vector3(0, 0, 4.2),
    bubble1Rot: new Vector3,
    bubble2Pos: new Vector3(-20, -20, 20),
    bubble2Rot: new Vector3,
    speed: 0.1,
    color: new Color(),
    opacity: 1,
    noiseSpeed: 1.05,
    noiseStrength: 0.02,
    uniforms: {
      light: {
        x: -1,
        y: 1,
        z: 1
      },
      diffuseness: -0.1,
      shininess: 80.0,
      fresnelPower: 8.0,
      iorR: 1.15,
      iorY: 1.16,
      iorG: 1.18,
      iorC: 1.22,
      iorB: 1.22,
      iorP: 1.22,
      saturation: 1,
      chromaticAberration: 0.5,
      refraction: 0.22,
      noiseX: 1,
      noiseY: 1,
      noiseZ: 1
    },
    dropUniforms: {
      light: {
        x: -1,
        y: 1,
        z: 1
      },
      diffuseness: 1,
      shininess: 0,
      fresnelPower: 8,
      iorR: 0,
      iorY: 0,
      iorG: 0,
      iorC: 0,
      iorB: 0,
      iorP: 0,
      saturation: 0,
      chromaticAberration: 0,
      refraction: 0,
      noiseX: 0,
      noiseY: 0,
      noiseZ: 0
    }
  },
  '/services/discovery': {
    bubble1Pos: new Vector3(-4.5, 0.5, -2),
    bubble1Rot: new Vector3,
    bubble2Pos: new Vector3(-8.5, -2.6, -6),
    bubble2Rot: new Vector3,
    speed: 0.1,
    color: new Color("#6f6f6f"),
    opacity: 0,
    noiseSpeed: 2,
    noiseStrength: 0.05,
    uniforms: {
      light: {
        x: -3,
        y: -4,
        z: 1
      },
      diffuseness: 0.2,
      shininess: 30.0,
      fresnelPower: 8.0,
      iorR: 1.15,
      iorY: 1.16,
      iorG: 1.18,
      iorC: 1.22,
      iorB: 1.22,
      iorP: 1.22,
      saturation: 0.3,
      chromaticAberration: 0.01,
      refraction: 0.22,
      noiseX: 1,
      noiseY: 1,
      noiseZ: 1
    },
    dropUniforms: {
      light: {
        x: -1,
        y: 1,
        z: 1
      },
      diffuseness: 1,
      shininess: 0,
      fresnelPower: 8,
      iorR: 0,
      iorY: 0,
      iorG: 0,
      iorC: 0,
      iorB: 0,
      iorP: 0,
      saturation: 0,
      chromaticAberration: 0,
      refraction: 0,
      noiseX: 0,
      noiseY: 0,
      noiseZ: 0
    }
  },
  '/services/development': {
    bubble1Pos: new Vector3(-2.5, 4, 0),
    bubble1Rot: new Vector3,
    bubble2Pos: new Vector3(-10, -3.5, -6),
    bubble2Rot: new Vector3,
    speed: 0.1,
    color: new Color("#6f6f6f"),
    opacity: 0,
    noiseSpeed: 2,
    noiseStrength: 0.05,
    uniforms: {
      light: {
        x: -3,
        y: -4,
        z: 1
      },
      diffuseness: 0.2,
      shininess: 30.0,
      fresnelPower: 8.0,
      iorR: 1.15,
      iorY: 1.16,
      iorG: 1.18,
      iorC: 1.22,
      iorB: 1.22,
      iorP: 1.22,
      saturation: 0.3,
      chromaticAberration: 0.01,
      refraction: 0.22,
      noiseX: 1,
      noiseY: 1,
      noiseZ: 1
    },
    dropUniforms: {
      light: {
        x: -1,
        y: 1,
        z: 1
      },
      diffuseness: 1,
      shininess: 0,
      fresnelPower: 8,
      iorR: 0,
      iorY: 0,
      iorG: 0,
      iorC: 0,
      iorB: 0,
      iorP: 0,
      saturation: 0,
      chromaticAberration: 0,
      refraction: 0,
      noiseX: 0,
      noiseY: 0,
      noiseZ: 0
    }
  },
  '/services/team': {
    bubble1Pos: new Vector3(4, 3, 2),
    bubble1Rot: new Vector3,
    bubble2Pos: new Vector3(-4., -3.5, 0),
    bubble2Rot: new Vector3,
    speed: 0.1,
    color: new Color("#6f6f6f"),
    opacity: 0,
    noiseSpeed: 2,
    noiseStrength: 0.05,
    uniforms: {
      light: {
        x: -3,
        y: -4,
        z: 1
      },
      diffuseness: 0.2,
      shininess: 30.0,
      fresnelPower: 8.0,
      iorR: 1.15,
      iorY: 1.16,
      iorG: 1.18,
      iorC: 1.22,
      iorB: 1.22,
      iorP: 1.22,
      saturation: 0.3,
      chromaticAberration: 0.01,
      refraction: 0.22,
      noiseX: 1,
      noiseY: 1,
      noiseZ: 1
    },
    dropUniforms: {
      light: {
        x: -1,
        y: 1,
        z: 1
      },
      diffuseness: 1,
      shininess: 0,
      fresnelPower: 8,
      iorR: 0,
      iorY: 0,
      iorG: 0,
      iorC: 0,
      iorB: 0,
      iorP: 0,
      saturation: 0,
      chromaticAberration: 0,
      refraction: 0,
      noiseX: 0,
      noiseY: 0,
      noiseZ: 0
    }
  },
  '/services/design': {
    bubble1Pos: new Vector3(5.5, 1.5, 0.3),
    bubble1Rot: new Vector3,
    bubble2Pos: new Vector3(7, -4, -8),
    bubble2Rot: new Vector3,
    speed: 0.1,
    color: new Color("#6f6f6f"),
    opacity: 0,
    noiseSpeed: 2,
    noiseStrength: 0.05,
    uniforms: {
      light: {
        x: -3,
        y: -4,
        z: 1
      },
      diffuseness: 0.2,
      shininess: 30.0,
      fresnelPower: 8.0,
      iorR: 1.15,
      iorY: 1.16,
      iorG: 1.18,
      iorC: 1.22,
      iorB: 1.22,
      iorP: 1.22,
      saturation: 0.3,
      chromaticAberration: 0.01,
      refraction: 0.22,
      noiseX: 1,
      noiseY: 1,
      noiseZ: 1
    },
    dropUniforms: {
      light: {
        x: -1,
        y: 1,
        z: 1
      },
      diffuseness: 1,
      shininess: 0,
      fresnelPower: 8,
      iorR: 0,
      iorY: 0,
      iorG: 0,
      iorC: 0,
      iorB: 0,
      iorP: 0,
      saturation: 0,
      chromaticAberration: 0,
      refraction: 0,
      noiseX: 0,
      noiseY: 0,
      noiseZ: 0
    }
  },
  '/services/services': {
    bubble1Pos: new Vector3(4.5, -0.5, 2),
    bubble1Rot: new Vector3,
    bubble2Pos: new Vector3(8.5, 2.6, -4),
    bubble2Rot: new Vector3,
    speed: 0.1,
    color: new Color("#6f6f6f"),
    opacity: 0,
    noiseSpeed: 2,
    noiseStrength: 0.05,
    uniforms: {
      light: {
        x: -3,
        y: -4,
        z: 1
      },
      diffuseness: 0.2,
      shininess: 30.0,
      fresnelPower: 8.0,
      iorR: 1.15,
      iorY: 1.16,
      iorG: 1.18,
      iorC: 1.22,
      iorB: 1.22,
      iorP: 1.22,
      saturation: 0.3,
      chromaticAberration: 0.01,
      refraction: 0.22,
      noiseX: 1,
      noiseY: 1,
      noiseZ: 1
    },
    dropUniforms: {
      light: {
        x: -1,
        y: 1,
        z: 1
      },
      diffuseness: 1,
      shininess: 0,
      fresnelPower: 8,
      iorR: 0,
      iorY: 0,
      iorG: 0,
      iorC: 0,
      iorB: 0,
      iorP: 0,
      saturation: 0,
      chromaticAberration: 0,
      refraction: 0,
      noiseX: 0,
      noiseY: 0,
      noiseZ: 0
    }
  },
  '/services/our-method': {
    bubble1Pos: new Vector3(4, 3, 2),
    bubble1Rot: new Vector3,
    bubble2Pos: new Vector3(-4., -3.5, 0),
    bubble2Rot: new Vector3,
    speed: 0.1,
    color: new Color("#6f6f6f"),
    opacity: 0,
    noiseSpeed: 2,
    noiseStrength: 0.05,
    tabs: {
      bubble1Pos: new CatmullRomCurve3( [
        new Vector3(4, 3, 2),
        new Vector3( 4, -3, 2 ),
        new Vector3(5.5, 3, 1),
        new Vector3(-2.5, 4, 0),
        new Vector3(-2, 3, 1.2),
      ]),
      bubble2Pos: new CatmullRomCurve3( [
        new Vector3(-3., -3.5, 0),
        new Vector3(-3., 3.5, 0),
        new Vector3(5.5, -2.6, -3),
        new Vector3(-8, -3.5, -6),
        new Vector3(4., -3.5, 0),
      ])
    },
    uniforms: {
      light: {
        x: -1,
        y: 1,
        z: 1
      },
      diffuseness: 0.2,
      shininess: 50.0,
      fresnelPower: 8.0,
      iorR: 1.15,
      iorY: 1.16,
      iorG: 1.18,
      iorC: 1.22,
      iorB: 1.22,
      iorP: 1.22,
      saturation: 1.03,
      chromaticAberration: 0.01,
      refraction: 0.22,
      noiseX: 1,
      noiseY: 1,
      noiseZ: 1
    },
    dropUniforms: {
      light: {
        x: -1,
        y: 1,
        z: 1
      },
      diffuseness: 0.2,
      shininess: 15.0,
      fresnelPower: 20.0,
      iorR: 1.15,
      iorY: 1.16,
      iorG: 1.18,
      iorC: 2.22,
      iorB: 1.22,
      iorP: 1.22,
      saturation: 1.03,
      chromaticAberration: 1.6,
      refraction: 0.22,
      noiseX: 1,
      noiseY: 1,
      noiseZ: 1
    }
  },
  '/partners': {
    bubble1Pos: new Vector3(0, -6),
    bubble1Rot: new Vector3,
    bubble2Pos: new Vector3(-20, -20, 20),
    bubble2Rot: new Vector3,
    speed: 0.1,
    color: new Color,
    opacity: 0,
    noiseSpeed: 1.05,
    noiseStrength: 0.17,
    uniforms: {
      light: {
        x: -1,
        y: 1,
        z: 1
      },
      diffuseness: 0.2,
      shininess: 15.0,
      fresnelPower: 8.0,
      iorR: 1.15,
      iorY: 1.16,
      iorG: 1.18,
      iorC: 1.22,
      iorB: 1.22,
      iorP: 1.22,
      saturation: 1.03,
      chromaticAberration: 0.04,
      refraction: 0.22,
      noiseX: 1,
      noiseY: 1,
      noiseZ: 1
    },
    dropUniforms: {
      light: {
        x: -1,
        y: 1,
        z: 1
      },
      diffuseness: 1,
      shininess: 0,
      fresnelPower: 8,
      iorR: 0,
      iorY: 0,
      iorG: 0,
      iorC: 0,
      iorB: 0,
      iorP: 0,
      saturation: 0,
      chromaticAberration: 0,
      refraction: 0,
      noiseX: 0,
      noiseY: 0,
      noiseZ: 0
    }
  },
  '/contact': {
    bubble1Pos: new Vector3(0, 0, 2.5),
    bubble1Rot: new Vector3,
    bubble2Pos: new Vector3(-20, -20, 20),
    bubble2Rot: new Vector3,
    speed: 0.1,
    color: new Color(),
    opacity: 0,
    noiseSpeed: 1.05,
    noiseStrength: 0.05,
    uniforms: {
      light: {
        x: -1,
        y: 1,
        z: 1
      },
      diffuseness: 0.2,
      shininess: 80.0,
      fresnelPower: 15.0,
      iorR: 10,
      iorY: 10,
      iorG: 10,
      iorC: 10,
      iorB: 10,
      iorP: 3,
      saturation: 1.03,
      chromaticAberration: 0.15,
      refraction: 0.22,
      noiseX: 1,
      noiseY: 1,
      noiseZ: 1
    },
    dropUniforms: {
      light: {
        x: -1,
        y: 1,
        z: 1
      },
      diffuseness: 1,
      shininess: 0,
      fresnelPower: 8,
      iorR: 0,
      iorY: 0,
      iorG: 0,
      iorC: 0,
      iorB: 0,
      iorP: 0,
      saturation: 0,
      chromaticAberration: 0,
      refraction: 0,
      noiseX: 0,
      noiseY: 0,
      noiseZ: 0
    }
  },
  '/contact/form': {
    bubble1Pos: new Vector3,
    bubble1Rot: new Vector3,
    bubble2Pos: new Vector3(-20, -20, 20),
    bubble2Rot: new Vector3,
    speed: 0.1,
    color: new Color(),
    opacity: 0,
    noiseSpeed: 1.05,
    noiseStrength: 0.17,
    uniforms: {
      light: {
        x: -1,
        y: 1,
        z: 1
      },
      diffuseness: 0.2,
      shininess: 15.0,
      fresnelPower: 8.0,
      iorR: 1.15,
      iorY: 1.16,
      iorG: 1.18,
      iorC: 1.22,
      iorB: 1.22,
      iorP: 1.22,
      saturation: 1.03,
      chromaticAberration: 0.04,
      refraction: 0.22,
      noiseX: 1,
      noiseY: 1,
      noiseZ: 1,
    },
    dropUniforms: {
      light: {
        x: -1,
        y: 1,
        z: 1
      },
      diffuseness: 1,
      shininess: 0,
      fresnelPower: 8,
      iorR: 0,
      iorY: 0,
      iorG: 0,
      iorC: 0,
      iorB: 0,
      iorP: 0,
      saturation: 0,
      chromaticAberration: 0,
      refraction: 0,
      noiseX: 0,
      noiseY: 0,
      noiseZ: 0
    }
  },
  '/contact/info': {
    bubble1Pos: new Vector3(0, 0, 4.2),
    bubble1Rot: new Vector3,
    bubble2Pos: new Vector3(-20, -20, 20),
    bubble2Rot: new Vector3,
    speed: 0.1,
    color: new Color(),
    opacity: 0,
    noiseSpeed: 1.05,
    noiseStrength: 0.02,
    uniforms: {
      light: {
        x: -1,
        y: 1,
        z: 1
      },
      diffuseness: -0.1,
      shininess: 150.0,
      fresnelPower: 15.0,
      iorR: 1.15,
      iorY: 1.16,
      iorG: 1.18,
      iorC: 1.22,
      iorB: 1.22,
      iorP: 1.22,
      saturation: 1,
      chromaticAberration: 0.9,
      refraction: 0,
      noiseX: 1,
      noiseY: 1,
      noiseZ: 1
    },
    dropUniforms: {
      light: {
        x: -1,
        y: 1,
        z: 1
      },
      diffuseness: 1,
      shininess: 0,
      fresnelPower: 8,
      iorR: 0,
      iorY: 0,
      iorG: 0,
      iorC: 0,
      iorB: 0,
      iorP: 0,
      saturation: 0,
      chromaticAberration: 0,
      refraction: 0,
      noiseX: 0,
      noiseY: 0,
      noiseZ: 0
    }
  },
  '/portfolio/lazo': {
    bubble1Pos: new Vector3(0, -6),
    bubble1Rot: new Vector3,
    bubble2Pos: new Vector3(-20, -20, 20),
    bubble2Rot: new Vector3,
    speed: 0.1,
    color: new Color,
    opacity: 0,
    noiseSpeed: 1.05,
    noiseStrength: 0.17,
    uniforms: {
      light: {
        x: -1,
        y: 1,
        z: 1
      },
      diffuseness: 0.2,
      shininess: 15.0,
      fresnelPower: 8.0,
      iorR: 1.15,
      iorY: 1.16,
      iorG: 1.18,
      iorC: 1.22,
      iorB: 1.22,
      iorP: 1.22,
      saturation: 1.03,
      chromaticAberration: 0.04,
      refraction: 0.22,
      noiseX: 1,
      noiseY: 1,
      noiseZ: 1
    },
    dropUniforms: {
      light: {
        x: -1,
        y: 1,
        z: 1
      },
      diffuseness: 1,
      shininess: 0,
      fresnelPower: 8,
      iorR: 0,
      iorY: 0,
      iorG: 0,
      iorC: 0,
      iorB: 0,
      iorP: 0,
      saturation: 0,
      chromaticAberration: 0,
      refraction: 0,
      noiseX: 0,
      noiseY: 0,
      noiseZ: 0
    }
  },
  '/portfolio/cryptomate': {
    bubble1Pos: new Vector3(0, -6),
    bubble1Rot: new Vector3,
    bubble2Pos: new Vector3(-20, -20, 20),
    bubble2Rot: new Vector3,
    speed: 0.1,
    color: new Color,
    opacity: 0,
    noiseSpeed: 1.05,
    noiseStrength: 0.17,
    uniforms: {
      light: {
        x: -1,
        y: 1,
        z: 1
      },
      diffuseness: 0.2,
      shininess: 15.0,
      fresnelPower: 8.0,
      iorR: 1.15,
      iorY: 1.16,
      iorG: 1.18,
      iorC: 1.22,
      iorB: 1.22,
      iorP: 1.22,
      saturation: 1.03,
      chromaticAberration: 0.04,
      refraction: 0.22,
      noiseX: 1,
      noiseY: 1,
      noiseZ: 1
    },
    dropUniforms: {
      light: {
        x: -1,
        y: 1,
        z: 1
      },
      diffuseness: 1,
      shininess: 0,
      fresnelPower: 8,
      iorR: 0,
      iorY: 0,
      iorG: 0,
      iorC: 0,
      iorB: 0,
      iorP: 0,
      saturation: 0,
      chromaticAberration: 0,
      refraction: 0,
      noiseX: 0,
      noiseY: 0,
      noiseZ: 0
    }
  },
  '/portfolio/lapalma': {
    bubble1Pos: new Vector3(0, -6),
    bubble1Rot: new Vector3,
    bubble2Pos: new Vector3(-20, -20, 20),
    bubble2Rot: new Vector3,
    speed: 0.1,
    color: new Color,
    opacity: 0,
    noiseSpeed: 1.05,
    noiseStrength: 0.17,
    uniforms: {
      light: {
        x: -1,
        y: 1,
        z: 1
      },
      diffuseness: 0.2,
      shininess: 15.0,
      fresnelPower: 8.0,
      iorR: 1.15,
      iorY: 1.16,
      iorG: 1.18,
      iorC: 1.22,
      iorB: 1.22,
      iorP: 1.22,
      saturation: 1.03,
      chromaticAberration: 0.04,
      refraction: 0.22,
      noiseX: 1,
      noiseY: 1,
      noiseZ: 1
    },
    dropUniforms: {
      light: {
        x: -1,
        y: 1,
        z: 1
      },
      diffuseness: 1,
      shininess: 0,
      fresnelPower: 8,
      iorR: 0,
      iorY: 0,
      iorG: 0,
      iorC: 0,
      iorB: 0,
      iorP: 0,
      saturation: 0,
      chromaticAberration: 0,
      refraction: 0,
      noiseX: 0,
      noiseY: 0,
      noiseZ: 0
    }
  }
};

export const tracking = {
  ...Object.keys(pages).reduce((prevP, p) => {
    return {
      ...prevP,
      [p]: {
        0: {
          min: 0,
          max: 1
        }
      }
    }
  }, {}),
  '/': {
    pans: {
      0: {
        min: 0,
        max: 1
      },
      1: {
        min: 0,
        max: 1
      },
      2: {
        min: 0,
        max: 1
      },
      3: {
        min: 0,
        max: 1
      },
      4: {
        min: 0,
        max: 1
      }
    },
  },
  '/services': {
    0: {
      min: 0,
      max: 1
    }
  },
  '/services/discovery': {
    0: {
      min: 0,
      max: 1
    }
  },
  '/services/development': {
    0: {
      min: 0,
      max: 1
    }
  },
  '/services/team': {
    0: {
      min: 0,
      max: 1
    }
  },
  '/services/design': {
    0: {
      min: 0,
      max: 1
    }
  },
  '/services/services': {
    0: {
      min: 0,
      max: 1
    }
  },
  '/contact': {
    0: {
      min: 0,
      max: 1
    }
  },
  '/contact/form': {
    0: {
      min: 0,
      max: 1
    }
  },
  '/contact/info': {
    0: {
      min: 0,
      max: 1
    }
  },
  default: {
    0: {
      min: 0,
      max: 1
    }
  }
};