const sphereVertexShader = `
varying vec3 worldNormal;
varying vec3 eyeVector;

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
    
    varying vec3 vViewPosition;

#endif

#include <normal_pars_vertex>

void main() {

    vec4 worldPos = modelMatrix * vec4(position, 1.0);
    vec4 mvPosition1 = viewMatrix * worldPos;

    gl_Position = projectionMatrix * mvPosition1;

    // vec3 transformedNormal = modelMatrix * normal;
    worldNormal = normalize(modelMatrix * vec4(normal, 0.0)).xyz;
    eyeVector =  normalize(worldPos.xyz - cameraPosition);

    #include <beginnormal_vertex>
    #include <defaultnormal_vertex>

    #include <begin_vertex>
    #include <project_vertex>
}
`;

export default sphereVertexShader;
