import { forwardRef, useMemo } from 'react'
import { Texture, Uniform, WebGLRenderTarget, WebGLRenderer } from 'three'
import { Effect } from 'postprocessing'
import { wrapEffect } from '@/utils/effectWrapper';
import { transitionFragmentShader } from '@/utils/shaders/fragmentShaders';

// Effect implementation
class TransitionEffectImpl extends Effect {
  time: number;
  u_fromScene: Texture;
  u_toScene: Texture;
  constructor({
    u_fromScene,
    u_toScene,
    u_progress,
    u_time,
  }: any) {
    super('TransitionEffect', transitionFragmentShader, {
      uniforms: new Map([
        ['u_fromScene', new Uniform(u_fromScene)],
        ['u_toScene', new Uniform(u_toScene)],
        ['u_progress', new Uniform(u_progress)],
        ['u_time', new Uniform(u_time)],
      ]),
    });
    this.time = 0;
    this.u_fromScene = u_fromScene;
    this.u_toScene = u_toScene;
  }

  update(renderer: WebGLRenderer, inputBuffer: WebGLRenderTarget | null = null, deltaTime?: number) {
    this.time += deltaTime ?? 0;
    const uTime = this.uniforms.get('u_time');
    uTime && (uTime.value = this.time);
    const from = this.uniforms.get('u_fromScene');
    const invert = this.uniforms.get('u_fromScene')?.value;
    from && (from.value = inputBuffer?.texture);
    const to = this.uniforms.get('u_toScene');
    to && (to.value = inputBuffer?.texture);
  }
}

const TransitionEffect = wrapEffect(TransitionEffectImpl)
export default TransitionEffect;