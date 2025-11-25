import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text, PerspectiveCamera } from "@react-three/drei";
import { motion } from "framer-motion";
import { useRef, useState, Suspense, useEffect } from "react";
import * as THREE from "three";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface Skill {
  name: string;
  level: number;
  description: string;
  experience: string;
  position: [number, number, number];
  color: string;
}

const skills: Skill[] = [
  { name: "C/C++", level: 90, description: "System programming and performance optimization", experience: "3+ years", position: [2, 1, 0], color: "#00d9ff" },
  { name: "Java", level: 85, description: "Enterprise applications and Android development", experience: "3+ years", position: [-2, 0.5, 1], color: "#ff00ff" },
  { name: "Python", level: 88, description: "Machine learning and automation scripts", experience: "2+ years", position: [1, -1, 2], color: "#8b5cf6" },
  { name: "DSA", level: 92, description: "Advanced algorithms and problem solving", experience: "4+ years", position: [-1, 2, -1], color: "#00d9ff" },
  { name: "React.js", level: 85, description: "Modern web applications and SPAs", experience: "2+ years", position: [3, -0.5, -1], color: "#ff00ff" },
  { name: "JavaScript", level: 87, description: "Full-stack web development", experience: "3+ years", position: [-3, -1, 0], color: "#8b5cf6" },
  { name: "SQL", level: 83, description: "Database design and optimization", experience: "2+ years", position: [0, 1.5, 2], color: "#00d9ff" },
  { name: "Android", level: 80, description: "Native Android app development", experience: "2+ years", position: [-2, -2, -2], color: "#ff00ff" },
  { name: "HTML/CSS", level: 90, description: "Responsive UI design", experience: "4+ years", position: [2, 2, 1], color: "#8b5cf6" },
];

function SkillTag({ skill, onClick }: { skill: Skill; onClick: () => void }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  return (
    <group position={skill.position}>
      <mesh
        ref={meshRef}
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.3 : 1}
      >
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial
          color={skill.color}
          emissive={skill.color}
          emissiveIntensity={hovered ? 1.5 : 0.5}
          transparent
          opacity={0.8}
        />
      </mesh>
      <Text
        position={[0, 0, 0]}
        fontSize={0.25}
        color={hovered ? "#ffffff" : "#e0e0e0"}
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.02}
        outlineColor="#000000"
      >
        {skill.name}
      </Text>
      {hovered && (
        <mesh position={[0, -0.4, 0]}>
          <planeGeometry args={[2, 0.3]} />
          <meshBasicMaterial color="#000000" transparent opacity={0.7} />
        </mesh>
      )}
      {hovered && (
        <Text
          position={[0, -0.4, 0.01]}
          fontSize={0.12}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          maxWidth={1.8}
        >
          {skill.description}
        </Text>
      )}
    </group>
  );
}

function Particles() {
  const particlesRef = useRef<THREE.Points>(null);
  const particleCount = 500;
  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 20;
  }

  useEffect(() => {
    const animate = () => {
      if (particlesRef.current) {
        particlesRef.current.rotation.y += 0.0002;
        particlesRef.current.rotation.x += 0.0001;
      }
    };
    const interval = setInterval(animate, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#00d9ff" transparent opacity={0.3} />
    </points>
  );
}

function Scene({ onSkillClick }: { onSkillClick: (skill: Skill) => void }) {
  const groupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    const animate = () => {
      if (groupRef.current) {
        groupRef.current.rotation.y += 0.001;
      }
    };
    const interval = setInterval(animate, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 1.5}
        minPolarAngle={Math.PI / 3}
        autoRotate
        autoRotateSpeed={0.5}
      />
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00d9ff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff00ff" />
      <pointLight position={[0, 0, 10]} intensity={0.5} color="#8b5cf6" />
      
      <Suspense fallback={null}>
        <Particles />
        <group ref={groupRef}>
          {skills.map((skill) => (
            <SkillTag key={skill.name} skill={skill} onClick={() => onSkillClick(skill)} />
          ))}
        </group>
      </Suspense>
    </>
  );
}

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section id="skills" className="py-20 px-4 bg-card/20 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-accent mx-auto mb-6" />
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-center text-muted-foreground mb-12 text-lg"
          >
            Here are the technologies I use to bring ideas to life — presented in an immersive 3D experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="w-full h-[600px] rounded-xl overflow-hidden bg-gradient-to-br from-card/50 to-card/20 backdrop-blur-sm border border-primary/20 shadow-[0_0_50px_rgba(0,217,255,0.15)]"
            style={{
              boxShadow: "0 0 50px rgba(0, 217, 255, 0.15), 0 0 100px rgba(255, 0, 255, 0.1)",
            }}
          >
            <Canvas
              dpr={isMobile ? [1, 1.5] : [1, 2]}
              performance={{ min: 0.5 }}
              gl={{ 
                antialias: !isMobile,
                alpha: true,
                powerPreference: "high-performance"
              }}
            >
              <Scene onSkillClick={setSelectedSkill} />
            </Canvas>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-8 text-center text-sm text-muted-foreground"
          >
            <p>💡 Click on any skill to learn more • Drag to rotate • Hover for details</p>
          </motion.div>
        </motion.div>
      </div>

      <Dialog open={!!selectedSkill} onOpenChange={() => setSelectedSkill(null)}>
        <DialogContent className="bg-card/95 backdrop-blur-xl border-primary/30 shadow-[0_0_40px_rgba(0,217,255,0.2)]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              {selectedSkill?.name}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Description</p>
              <p className="text-foreground">{selectedSkill?.description}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Experience</p>
              <p className="text-foreground font-semibold">{selectedSkill?.experience}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Proficiency</p>
              <div className="flex items-center gap-3">
                <div className="flex-1 h-3 bg-muted/30 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${selectedSkill?.level}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-secondary to-accent"
                    style={{
                      boxShadow: `0 0 20px ${selectedSkill?.color}`,
                    }}
                  />
                </div>
                <span className="text-lg font-bold text-accent">{selectedSkill?.level}%</span>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
