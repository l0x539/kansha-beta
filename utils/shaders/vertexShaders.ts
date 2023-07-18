const sphereVertexShader = `
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
    
    varying vec3 vViewPosition;

#endif

#include <normal_pars_vertex>

void main() {
    #include <beginnormal_vertex>
    #include <defaultnormal_vertex>

    #include <begin_vertex>
    #include <project_vertex>
}
`;

export default sphereVertexShader;
