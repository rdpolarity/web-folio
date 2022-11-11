import React, { Suspense, useEffect, useRef, useState } from "react";
import styles from "./Splash.module.scss";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  GradientTexture,
  OrbitControls,
  OrthographicCamera,
  Image as DreiImage,
  Plane,
  Stage,
  useFBX,
  useTexture,
  Loader,
  useProgress,
  Html,
} from "@react-three/drei";
import { Quaternion, Vector2, Vector3 } from "three";
import { useGlobalStore } from "stores/GlobalStore";
import { observer } from "mobx-react-lite";
import { Loading } from "@nextui-org/react";

const Scene = observer(() => {
  const camera = useRef<THREE.PerspectiveCamera>();
  const mesh = useRef<THREE.Mesh>();
  const store = useGlobalStore();
  const [spyroInView, setSpyroInView] = useState(false);

  let logo = useFBX(
    "https://res.cloudinary.com/dxn4wbidw/raw/upload/v1660362304/logo_8ae97d1953.fbx?updated_at=2022-08-13T03:45:04.317Z"
  );

  let grassBlock = useFBX(
    "https://res.cloudinary.com/dxn4wbidw/raw/upload/v1660446921/grass_block_e83468ec5b.fbx?updated_at=2022-08-14T03:15:21.386Z"
  );

  let grassTexture = useTexture({
    map: "https://res.cloudinary.com/dxn4wbidw/image/upload/v1660447067/grass_block_6f19e5fead.jpg?updated_at=2022-08-14T03:17:48.954Z",
  });

  const [meshIndex, setMeshIndex] = useState(0);

  useEffect(() => {
    if (store.isMinecraft) setMeshIndex(3);
    else setMeshIndex(0);
  }, [store.isMinecraft]);

  useEffect(() => {
    if (store.isDots) setMeshIndex(4);
  }, [store.isDots]);

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

      const rot = new Quaternion();
      camera.current.getWorldQuaternion(rot);

      const yRot = Number(rot.y.toFixed(2));
      if (yRot > 0.5 && yRot < 1.0 && meshIndex == 1) store.spyroFound();
    }
  });

  function Loader() {
    const { active, progress, errors, item, loaded, total } = useProgress();
    return <Html center>
      <Loading size="xl"/>
    </Html>;
  }

  return (
    <Suspense fallback={<Loader/>}>
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
          <mesh rotation={[0, -0.5, 0]}>
            <mesh
              {...logo.children[0]}
              position={[0.12, 0.4, 0]}
              scale={20}
              visible={meshIndex === 0}
              ref={mesh as any}
            >
              <GradMat />
            </mesh>
            <mesh position={[0, 1, 0]} visible={meshIndex === 1}>
              <boxGeometry attach="geometry" args={[1, 1, 1]} />
              <GradMat />
            </mesh>
            <DreiImage
              url={"https://i.imgur.com/s1xzKqL.png"}
              visible={meshIndex === 1}
              position={[0.1, 1, -0.52]}
              rotation={[0, 180 - 0.95, 0]}
              transparent
            />
            <mesh position={[0, 1, 0]} visible={meshIndex === 2}>
              <octahedronGeometry attach="geometry" args={[0.8, 0]} />
              <GradMat />
            </mesh>
            <mesh
              {...grassBlock.children[0]}
              position={[0, 1, 0]}
              visible={meshIndex === 3}
              scale={0.5}
            >
              <meshStandardMaterial {...grassTexture} />
            </mesh>
            <mesh position={[0, 1, 0]} visible={meshIndex === 4}>
              <sphereGeometry attach="geometry" args={[0.5, 32, 32]} />
              <GradMat />
            </mesh>
          </mesh>
        </Float>
        <Plane
          args={[10, 10]}
          rotation={[-Math.PI / 2, 0, 0]}
          visible={false}
        ></Plane>
      </Stage>
    </Suspense>
  );
});
const Splash = observer(() => {
  const [dots, setDots] = useState([false, false, false, false]);
  const store = useGlobalStore();

  useEffect(() => {
    if (dots.every((d) => d)) {
      setDots([false, false, false, false]);
      store.setIsDots(true);
    } else {
      store.setIsDots(false);
    }
  }, [dots, store]);

  const Dot = ({ index }: { index: number }) => {
    const onToggleHandler = () => {
      const newDots = [...dots];
      newDots[index] = !newDots[index];
      setDots(newDots);
    };

    return (
      <span
        className={`${styles.dot} ${dots[index] ? styles.dot__toggled : ""}`}
        onClick={onToggleHandler}
      >
        .
      </span>
    );
  };
  return (
    <div className={styles.splash}>
      <div className={styles.splashImage}>
        <Canvas style={{ cursor: "pointer" }}>
          <Scene />
        </Canvas>
        <Loader />
      </div>

      <div className={styles.splashText}>
        <h1>
          Aiden Mellor
          <Dot index={0} />
        </h1>
        <h2 style={{ animationDelay: "0s" }}>
          Software Engineer
          <Dot index={1} />
        </h2>
        <h2 style={{ animationDelay: "1s" }}>
          Designer
          <Dot index={2} />
        </h2>
        <h2 style={{ animationDelay: "2s" }}>
          Artist
          <Dot index={3} />
        </h2>
      </div>
    </div>
  );
});

export default Splash;
