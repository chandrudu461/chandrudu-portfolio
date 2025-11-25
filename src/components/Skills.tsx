import { Canvas, useFrame } from "@react-three/fiber";
import { Text, PerspectiveCamera, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { motion } from "framer-motion";
import { useRef, useState, Suspense, useEffect } from "react";
import * as THREE from "three";

interface Skill {
  name: string;
  proficiency: string;
  angle: number;
  radius: number;
  height: number;
  color: string;
}

const skills: Skill[] = [
  { name: "C", proficiency: "Advanced", angle: 0, radius: 3, height: 0.5, color: "#00d9ff" },
  { name: "C++", proficiency: "Advanced", angle: 30, radius: 3.2, height: -0.3, color: "#ff00ff" },
  { name: "Java", proficiency: "Proficient", angle: 60, radius: 3.5, height: 0.8, color: "#8b5cf6" },
  { name: "Python", proficiency: "Experienced", angle: 90, radius: 3.3, height: -0.5, color: "#00d9ff" },
  { name: "SQL", proficiency: "Proficient", angle: 120, radius: 3.6, height: 0.2, color: "#ff00ff" },
  { name: "Android", proficiency: "Experienced", angle: 150, radius: 3.4, height: -0.7, color: "#8b5cf6" },
  { name: "DSA", proficiency: "Advanced", angle: 180, radius: 3.7, height: 0.6, color: "#00d9ff" },
  { name: "HTML", proficiency: "Advanced", angle: 210, radius: 3.2, height: -0.4, color: "#ff00ff" },
  { name: "CSS", proficiency: "Advanced", angle: 240, radius: 3.5, height: 0.4, color: "#8b5cf6" },
  { name: "JavaScript", proficiency: "Experienced", angle: 270, radius: 3.3, height: -0.6, color: "#00d9ff" },
  { name: "React.js", proficiency: "Proficient", angle: 300, radius: 3.6, height: 0.7, color: "#ff00ff" },
];

function TechCore() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]}>
      <MeshDistortMaterial
        color="#00d9ff"
        attach="material"
        distort={0.3}
        speed={2}
        roughness={0.2}
        metalness={0.8}
        emissive="#00d9ff"
        emissiveIntensity={0.8}
      />
    </Sphere>
  );
}

function SkillTile({ skill, mousePosition }: { skill: Skill; mousePosition: { x: number; y: number } }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime() * 0.3;
      const angleOffset = (skill.angle * Math.PI) / 180;
      
      const x = Math.cos(time + angleOffset) * skill.radius;
      const z = Math.sin(time + angleOffset) * skill.radius;
      const y = skill.height + Math.sin(time * 2) * 0.2;

      meshRef.current.position.x = x + mousePosition.x * 0.5;
      meshRef.current.position.y = y + mousePosition.y * 0.3;
      meshRef.current.position.z = z;

      meshRef.current.lookAt(0, 0, 0);
      
      meshRef.current.rotation.z = 0;
    }
  });

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  return (
    <group>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.3 : 1}
      >
        <boxGeometry args={[0.8, 0.5, 0.1]} />
        <meshStandardMaterial
          color={skill.color}
          emissive={skill.color}
          emissiveIntensity={hovered ? 1.2 : 0.5}
          transparent
          opacity={0.9}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      
      {meshRef.current && (
        <>
          <Text
            position={[
              meshRef.current.position.x,
              meshRef.current.position.y,
              meshRef.current.position.z + 0.06
            ]}
            fontSize={0.22}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
            font="/fonts/inter.woff"
            outlineWidth={0.01}
            outlineColor="#000000"
          >
            {skill.name}
          </Text>
          
          {hovered && (
            <Text
              position={[
                meshRef.current.position.x,
                meshRef.current.position.y - 0.35,
                meshRef.current.position.z + 0.06
              ]}
              fontSize={0.12}
              color="#ffffff"
              anchorX="center"
              anchorY="middle"
              outlineWidth={0.005}
              outlineColor="#000000"
            >
              {skill.proficiency}
            </Text>
          )}
        </>
      )}
    </group>
  );
}

function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null);
  const particleCount = 800;
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 30;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 30;

    const colorChoice = Math.random();
    if (colorChoice < 0.33) {
      colors[i * 3] = 0;
      colors[i * 3 + 1] = 0.85;
      colors[i * 3 + 2] = 1;
    } else if (colorChoice < 0.66) {
      colors[i * 3] = 1;
      colors[i * 3 + 1] = 0;
      colors[i * 3 + 2] = 1;
    } else {
      colors[i * 3] = 0.55;
      colors[i * 3 + 1] = 0.36;
      colors[i * 3 + 2] = 0.96;
    }
  }

  useFrame(() => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.0002;
      particlesRef.current.rotation.x += 0.0001;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.4}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function Scene() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
      
      <ambientLight intensity={0.2} />
      <pointLight position={[0, 0, 0]} intensity={2} color="#00d9ff" distance={15} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#ff00ff" />
      <pointLight position={[-5, -5, -5]} intensity={1} color="#8b5cf6" />
      
      <Suspense fallback={null}>
        <ParticleField />
        <TechCore />
        {skills.map((skill) => (
          <SkillTile key={skill.name} skill={skill} mousePosition={mousePosition} />
        ))}
      </Suspense>
    </>
  );
}

export default function Skills() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-card/20 via-background to-card/20 overflow-hidden relative">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-4 relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent relative">
              Skillverse
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-secondary/30 to-accent/30 blur-xl"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </span>
          </motion.h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-accent mx-auto mb-6" />
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-center text-muted-foreground mb-12 text-base md:text-lg px-4 max-w-3xl mx-auto"
          >
            Explore My Skillverse — A Universe of Technologies I Use to Build, Solve & Innovate.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="w-full h-[600px] md:h-[700px] rounded-2xl overflow-hidden relative"
            style={{
              background: "radial-gradient(ellipse at center, rgba(0, 217, 255, 0.05) 0%, transparent 70%)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/10 to-card/30 pointer-events-none z-10" />
            <Canvas
              dpr={isMobile ? [1, 1.5] : [1, 2]}
              performance={{ min: 0.5 }}
              gl={{
                antialias: !isMobile,
                alpha: true,
                powerPreference: "high-performance",
              }}
            >
              <Scene />
            </Canvas>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-8 text-center"
          >
            <p className="text-xs md:text-sm text-muted-foreground/70 italic">
              💡 Hover over tiles to reveal proficiency • Drag to explore
            </p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1.3 }}
              className="mt-4 text-xs md:text-sm bg-gradient-to-r from-primary/80 to-accent/80 bg-clip-text text-transparent font-medium"
            >
              Powered entirely by AI — 3D visuals, animations, and design.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
