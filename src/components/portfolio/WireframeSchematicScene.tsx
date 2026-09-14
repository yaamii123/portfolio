import { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const CYAN = '#22d3ee';

function useEdgesGeometry(factory: () => THREE.BufferGeometry) {
  const source = useMemo(() => factory(), [factory]);
  const edges = useMemo(() => new THREE.EdgesGeometry(source), [source]);

  useEffect(() => {
    return () => {
      edges.dispose();
      source.dispose();
    };
  }, [edges, source]);

  return edges;
}

function WireEdges({
  factory,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  opacity = 0.22,
}: {
  factory: () => THREE.BufferGeometry;
  position?: [number, number, number];
  rotation?: [number, number, number];
  opacity?: number;
}) {
  const edges = useEdgesGeometry(factory);

  return (
    <lineSegments geometry={edges} position={position} rotation={rotation}>
      <lineBasicMaterial color={CYAN} transparent opacity={opacity} />
    </lineSegments>
  );
}

const makeShell = () => new THREE.IcosahedronGeometry(2.9, 1);
const makeRack = () => new THREE.BoxGeometry(2.2, 2.8, 1.4);
const makeServer = () => new THREE.BoxGeometry(1.8, 0.32, 1.0);
const makeDb = () => new THREE.CylinderGeometry(0.45, 0.45, 1.2, 20);
const makeGateway = () => new THREE.BoxGeometry(0.55, 0.38, 0.55);

function ConnectionLines() {
  const geometry = useMemo(() => {
    const pairs: [THREE.Vector3, THREE.Vector3][] = [
      [new THREE.Vector3(0.95, 0.15, 0.55), new THREE.Vector3(1.55, 0.3, 0)],
      [new THREE.Vector3(0.95, 0.15, 0.55), new THREE.Vector3(0, 0.6, 0)],
      [new THREE.Vector3(0.95, 0.15, 0.55), new THREE.Vector3(0, 0, 0)],
      [new THREE.Vector3(0.95, 0.15, 0.55), new THREE.Vector3(0, -0.6, 0)],
      [new THREE.Vector3(1.55, 0.3, 0), new THREE.Vector3(0, 0, 0)],
    ];
    const positions = new Float32Array(pairs.length * 6);
    pairs.forEach(([a, b], i) => {
      positions.set([a.x, a.y, a.z, b.x, b.y, b.z], i * 6);
    });
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geo;
  }, []);

  useEffect(() => () => geometry.dispose(), [geometry]);

  return (
    <lineSegments geometry={geometry}>
      <lineBasicMaterial color={CYAN} transparent opacity={0.18} />
    </lineSegments>
  );
}

function SchematicAssembly() {
  const groupRef = useRef<THREE.Group>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      };
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  useFrame((_, delta) => {
    const group = groupRef.current;
    if (!group) return;

    group.rotation.y += delta * 0.1;
    group.rotation.x = THREE.MathUtils.lerp(group.rotation.x, mouse.current.y * 0.07, 0.04);
    group.rotation.z = THREE.MathUtils.lerp(group.rotation.z, -mouse.current.x * 0.04, 0.04);
  });

  return (
    <group ref={groupRef} position={[0.4, -0.15, 0]}>
      <WireEdges factory={makeShell} opacity={0.07} />
      <WireEdges factory={makeRack} opacity={0.2} />

      <WireEdges factory={makeServer} position={[0, 0.72, 0]} opacity={0.28} />
      <WireEdges factory={makeServer} position={[0, 0.08, 0]} opacity={0.28} />
      <WireEdges factory={makeServer} position={[0, -0.56, 0]} opacity={0.28} />

      <WireEdges factory={makeDb} position={[1.65, 0.25, 0]} opacity={0.26} />
      <WireEdges factory={makeGateway} position={[0.95, 0.15, 0.55]} opacity={0.32} />

      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -1.55, 0]}>
        <torusGeometry args={[3.2, 0.012, 8, 64]} />
        <meshBasicMaterial color={CYAN} transparent opacity={0.08} wireframe />
      </mesh>

      <ConnectionLines />
    </group>
  );
}

export default function WireframeSchematicScene() {
  const [frameloop, setFrameloop] = useState<'always' | 'never'>('always');

  useEffect(() => {
    const onVisibility = () => {
      setFrameloop(document.hidden ? 'never' : 'always');
    };

    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, []);

  return (
    <Canvas
      className="absolute inset-0 pointer-events-none"
      dpr={[1, 1.5]}
      frameloop={frameloop}
      gl={{ alpha: true, antialias: true, powerPreference: 'low-power' }}
      camera={{ position: [4.8, 3.4, 5.8], fov: 38, near: 0.1, far: 50 }}
      style={{ background: 'transparent' }}
      onCreated={({ gl }) => {
        gl.domElement.addEventListener('webglcontextlost', (event) => {
          event.preventDefault();
        });
      }}
    >
      <ambientLight intensity={0.4} />
      <SchematicAssembly />
    </Canvas>
  );
}
