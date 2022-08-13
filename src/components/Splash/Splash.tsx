import React, { useRef, useState } from "react";
import styles from "./Splash.module.scss";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  CameraShake,
  ContactShadows,
  Float,
  GradientTexture,
  Html,
  MeshDistortMaterial,
  MeshWobbleMaterial,
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
  Plane,
  Sky,
  Sparkles,
  SpotLight,
  Stage,
  Text,
  useFBX,
} from "@react-three/drei";
import {
  Euler,
  Material,
  MeshMatcapMaterial,
  MeshStandardMaterial,
  Vector2,
  Vector3,
} from "three";
import splashMobile from "../../../public/splash-mobile.png";
import Image from "next/image";
import { LoginOutlined } from "@ant-design/icons";

const Scene = () => {
  const camera = useRef<THREE.PerspectiveCamera>();
  const mesh = useRef<THREE.Mesh>();

  let logo = useFBX(
    "https://res.cloudinary.com/dxn4wbidw/raw/upload/v1660362304/logo_8ae97d1953.fbx?updated_at=2022-08-13T03:45:04.317Z"
  );
  const [meshIndex, setMeshIndex] = useState(0);

  const GradMat = () => (
    <meshStandardMaterial>
      <GradientTexture
        stops={[0, 1]}
        colors={["#7F30CB", "#01DCBA"]}
        center={new Vector2(1000, 0)}
        flipY
        size={20}
      />
    </meshStandardMaterial>
  );

  const incrementMesh = () => {
    setMeshIndex((meshIndex + 1) % 3);
  };

  useFrame(() => {
    if (camera.current) {
      const offset = new Vector3(0, 1, 0);
      const focus = new Vector3(0, 0.2, 0).add(offset);
      camera.current.lookAt(focus ?? 0, 0, 0);
    }
  });

  return (
    <Stage intensity={0.5} preset="soft">
      <OrbitControls
        makeDefault
        enableZoom={false}
        target={[0, 0.2, 0]}
        maxPolarAngle={1.5}
      />
      <ambientLight intensity={0.5} />
      <OrthographicCamera makeDefault zoom={150} ref={camera} />
      <Float
        rotationIntensity={0}
        floatIntensity={1}
        speed={3}
        onClick={incrementMesh}
      >
        <mesh rotation={[0,-0.5,0]}>
          {meshIndex === 0 ? (
            <mesh
              {...logo.children[0]}
              position={[0.12, 0.4, 0]}
              scale={20}
              ref={mesh}
            >
              <GradMat />
            </mesh>
          ) : null}
          {meshIndex === 1 ? (
            <mesh position={[0.12, 1, 0]}>
              <boxGeometry attach="geometry" args={[1, 1, 1]} />
              <GradMat />
            </mesh>
          ) : null}
          {meshIndex === 2 ? (
            <mesh position={[0.12, 1, 0]}>
              <octahedronGeometry attach="geometry" args={[0.8, 0]} />
              <GradMat />
            </mesh>
          ) : null}
        </mesh>
      </Float>
      <Plane
        args={[10, 10]}
        rotation={[-Math.PI / 2, 0, 0]}
        visible={false}
      ></Plane>
    </Stage>
  );
};

const Splash = () => {
  return (
    <div className={styles.splash}>
      <div className={styles.splashImage}>
        <Canvas style={{ cursor: "pointer" }}>
          <Scene />
        </Canvas>
      </div>

      <div className={styles.splashText}>
        <h1>Aiden Mellor.</h1>
        <h2>Software Engineer.</h2>
        <h2>Designer.</h2>
        <h2>Artist.</h2>
      </div>

      <div className={styles.splashImageMobile}>
        <Image
          src={"/splash-mobile.png"}
          width={200}
          height={200}
          alt="Aiden Mellor"
        />
      </div>
      {/* <Button size='large'>Resume</Button> */}
    </div>
  );
};

export default Splash;
