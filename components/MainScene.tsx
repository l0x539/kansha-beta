import { FC } from "react";
import Background from "./Background";
import UnstableSphere from "./UnstableSphere";
import HomeEffects from "./effects/HomeEffects";

const MainScene: FC<{
  gpuTier: number;
}> = ({
  gpuTier
}) => {
  return (<>
    {/* <UnstableSphere /> */}
    <Background gpuTier={gpuTier} />
    <HomeEffects />
  </>);
}

export default MainScene;