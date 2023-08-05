// File copy pasted from https://github.com/pmndrs/react-postprocessing/blob/master/src/util.tsx

import React, { forwardRef, useMemo, useLayoutEffect, MutableRefObject } from 'react'
import { Vector2 } from 'three'
import { useThree } from '@react-three/fiber'
import { BlendFunction as BF, Effect } from 'postprocessing'

export const wrapEffect = (
  effectImpl: any,
  defaultBlendMode = BF.NORMAL
) =>
forwardRef(function Wrap(
  { blendFunction, opacity, ...props }: {
    blendFunction: BF;
    opacity: number;
    [value: string]: any;
  },
  ref
) {
  const invalidate = useThree((state) => state.invalidate)
  const effect = useMemo(() => new effectImpl(props), [props])

  useLayoutEffect(() => {
    effect.blendMode.blendFunction = !blendFunction && blendFunction !== 0 ? defaultBlendMode : blendFunction
    if (opacity !== undefined) effect.blendMode.opacity.value = opacity
    invalidate()
  }, [blendFunction, effect.blendMode, invalidate, opacity])
  return <primitive ref={ref} object={effect} dispose={null} />
})

