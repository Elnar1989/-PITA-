import { extend } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
extend({ OrbitControls });


// const Scene = ({ newMaterialOpt }) => {
//   const {
//     scene,
//     camera,
//     gl: { domElement },
//   } = useThree();
//   useEffect(() => {
//     scene.background = new THREE.Color(0xf1f1f1);
//     scene.fog = new THREE.Fog(0xf1f1f1, 20, 100);
//     camera.fov = 50;
//   }, []);
//   return (
//     <>
//     </>
//   );
// };
