import main from "./main.module.css";
import { Canvas, useFrame } from "react-three-fiber";
import { useRef } from "react";
import { extend } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEditContext } from "../../contexts/PostContext";

extend({ OrbitControls });

const SpinningMesh = ({ position, args, color }) => {
  const mesh = useRef(null);
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.001;
  });

  return (
    <mesh position={position} ref={mesh}>
      <boxBufferGeometry attach="geometry" args={args} />
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  );
};


export default function Main() {
  const user = useSelector((state) => state.user);
  const users = localStorage.getItem("user");
  const { toggleHeaderOnHeandler, toggleHeaderOffHeandler } =
    useEditContext();
  return (
    <div className={main.container}>
      <div className={main.nav}>
        <ul className={main.list}>
          {users ? (
            <>
              <li className={main.li}>
                <Link onClick={toggleHeaderOffHeandler} to="/pain">
                  P
                </Link>
              </li>

              <li className={main.li}>
                <Link onClick={toggleHeaderOffHeandler} to="/inspiration">
                  I
                </Link>
              </li>

              <li className={main.li}>
                <Link
                  onClick={toggleHeaderOffHeandler}
                  to={`/tools/${user.id}`}
                >
                  T
                </Link>
              </li>
              {user.moderate || user.admin ? (
                <li className={main.li}>
                  <Link onClick={toggleHeaderOffHeandler} to="/ability">
                    A
                  </Link>
                </li>
              ) : (
                <li className={main.li} onClick={toggleHeaderOnHeandler}>
                  <Link to="/">A</Link>
                </li>
              )}
            </>
          ) : (
            <>
              <li className={main.li}>P</li>
              <li className={main.li}>I</li>
              <li className={main.li}>T</li>
              <li className={main.li}>A</li>
            </>
          )}
        </ul>
      </div>
      <div className={main.wrapper}>
        <Canvas
          colorManagement
          shadowMap
          camera={{ position: [-2, 2, 5], fov: 100 }}
        >
          <ambientLight intensity={0.1} />

          <directionalLight
            position={[1, 10, 0]}
            intensity={1.5}
            castShadow
            shadow-mapSize-height={1012}
            shadow-mapSize-width={1012}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />
          <pointLight position={[-10, 0, -20]} intensity={0.5} />
          <pointLight position={[0, -10, 0]} intensity={0.5} />

          <group>
            <mesh
              rotation={[-Math.PI / 2, 0, 0]}
              position={[0, -3, 0]}
              receiveShadow
            >
              <planeBufferGeometry attach="geometry" args={[200, 200]} />
              <shadowMaterial attach="material" opacity={0.3} />
            </mesh>

            <SpinningMesh
              position={[3, 1, 2]}
              args={[2, 1, 4]}
              color="rgb(0, 210, 255)"
            />
            <SpinningMesh
              position={[-2, 3, 2]}
              args={[-1, 2, 2]}
              color="rgb(255, 253, 135)"
            />
            <SpinningMesh
              position={[-4, -5, -3]}
              args={[3, 6, 4]}
              color="rgb(255, 53, 155)"
            />
          </group>
        </Canvas>
      </div>
    </div>
  );
}
