'use client'

import { Canvas } from "@react-three/fiber";
import MainScene from "./MainScene";
import { Leva } from "leva";
import { ACESFilmicToneMapping, LinearSRGBColorSpace } from "three";
// import { OrbitControls } from "@react-three/drei";

const MainCanvas = () => {
  return (
    <>
      <div className="absolute top-0 left-0 w-screen h-screen z-[-1]">
        <Canvas
        gl={{
          outputColorSpace: LinearSRGBColorSpace,
          antialias: true, 
          toneMapping: ACESFilmicToneMapping,
          powerPreference: "high-performance",
          toneMappingExposure: 0.9,
        }}
        camera={{ position: [0, 0, 7], fov: 60 }} dpr={[1, 2]}>
          <ambientLight intensity={1.0} />
          <MainScene />
        </Canvas>
      </div>
    </>
  );
}

export default MainCanvas;