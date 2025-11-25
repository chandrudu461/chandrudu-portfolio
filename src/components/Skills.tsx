import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useMemo } from "react";

interface Skill {
  name: string;
  description: string;
  level: number;
  category: string;
  icon: string;
}

const skills: Skill[] = [
  { name: "C", description: "Low-level systems programming", level: 95, category: "Languages", icon: "🔧" },
  { name: "C++", description: "Object-oriented systems development", level: 90, category: "Languages", icon: "⚡" },
  { name: "Java", description: "Enterprise application development", level: 85, category: "Languages", icon: "☕" },
  { name: "Python", description: "AI/ML and backend development", level: 92, category: "Languages", icon: "🐍" },
  { name: "JavaScript", description: "Dynamic web interactivity", level: 88, category: "Frontend", icon: "🌐" },
  { name: "React.js", description: "Component-based UI development", level: 85, category: "Frontend", icon: "⚛️" },
  { name: "HTML/CSS", description: "Modern responsive styling", level: 90, category: "Frontend", icon: "🎨" },
  { name: "SQL", description: "Database design and optimization", level: 80, category: "Database", icon: "🗄️" },
  { name: "Android Studio", description: "Mobile app development", level: 75, category: "Mobile", icon: "📱" },
  { name: "DSA", description: "Efficient problem solving", level: 88, category: "Core", icon: "🧮" },
];

// Neural Network Grid Background
function NeuralGrid() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [nodes, setNodes] = useState<Array<{id: number, x: number, y: number, active: boolean}>>([]);
  
  useEffect(() => {
    const generateNodes = () => {
      const nodeArray = [];
      const cols = 12;
      const rows = 8;
      
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          nodeArray.push({
            id: i * cols + j,
            x: (j / (cols - 1)) * 100,
            y: (i / (rows - 1)) * 100,
            active: Math.random() > 0.7
          });
        }
      }
      setNodes(nodeArray);
    };
    
    generateNodes();
    const interval = setInterval(() => {
      setNodes(prev => prev.map(node => ({
        ...node,
        active: Math.random() > 0.8
      })));
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={gridRef} className="absolute inset-0 opacity-20">
      {/* Grid Lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ filter: 'blur(0.5px)' }}>
        <defs>
          <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ff88" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#0099ff" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#ff0088" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        
        {/* Vertical Lines */}
        {Array.from({ length: 12 }, (_, i) => (
          <motion.line
            key={`v-${i}`}
            x1={`${(i / 11) * 100}%`}
            y1="0%"
            x2={`${(i / 11) * 100}%`}
            y2="100%"
            stroke="url(#gridGradient)"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: i * 0.1 }}
          />
        ))}
        
        {/* Horizontal Lines */}
        {Array.from({ length: 8 }, (_, i) => (
          <motion.line
            key={`h-${i}`}
            x1="0%"
            y1={`${(i / 7) * 100}%`}
            x2="100%"
            y2={`${(i / 7) * 100}%`}
            stroke="url(#gridGradient)"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: i * 0.1 }}
          />
        ))}
        
        {/* Connection Lines */}
        {nodes.map((node, index) => {
          const nextNode = nodes[index + 1];
          if (!nextNode || !node.active || !nextNode.active) return null;
          
          return (
            <motion.line
              key={`connection-${node.id}`}
              x1={`${node.x}%`}
              y1={`${node.y}%`}
              x2={`${nextNode.x}%`}
              y2={`${nextNode.y}%`}
              stroke="#00ff88"
              strokeWidth="1"
              opacity="0.6"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              exit={{ pathLength: 0, opacity: 0 }}
              transition={{ duration: 0.8 }}
            />
          );
        })}
      </svg>
      
      {/* Grid Nodes */}
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            backgroundColor: node.active ? '#00ff88' : '#333',
            scale: node.active ? 1.5 : 1,
            boxShadow: node.active ? '0 0 10px #00ff88' : 'none',
          }}
          transition={{ duration: 0.3 }}
        />
      ))}
    </div>
  );
}

// Floating Geometric Shapes
function FloatingShapes() {
  const shapes = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 60 + 20,
      rotation: Math.random() * 360,
      delay: Math.random() * 5,
      duration: Math.random() * 20 + 15,
      shape: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)],
      opacity: Math.random() * 0.1 + 0.05
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape) => {
        const ShapeComponent = () => {
          const baseClasses = "absolute backdrop-blur-[1px]";
          
          switch (shape.shape) {
            case 'circle':
              return (
                <div 
                  className={`${baseClasses} rounded-full bg-gradient-to-br from-emerald-400/20 to-blue-500/20 border border-emerald-400/10`}
                  style={{
                    width: shape.size,
                    height: shape.size,
                  }}
                />
              );
            case 'square':
              return (
                <div 
                  className={`${baseClasses} bg-gradient-to-br from-blue-400/20 to-purple-500/20 border border-blue-400/10`}
                  style={{
                    width: shape.size,
                    height: shape.size,
                    borderRadius: '8px',
                  }}
                />
              );
            case 'triangle':
              return (
                <div 
                  className={`${baseClasses} bg-gradient-to-br from-purple-400/20 to-pink-500/20`}
                  style={{
                    width: 0,
                    height: 0,
                    borderLeft: `${shape.size/2}px solid transparent`,
                    borderRight: `${shape.size/2}px solid transparent`,
                    borderBottom: `${shape.size}px solid rgba(168, 85, 247, 0.1)`,
                  }}
                />
              );
            default:
              return null;
          }
        };

        return (
          <motion.div
            key={shape.id}
            className="absolute"
            style={{
              left: `${shape.x}%`,
              top: `${shape.y}%`,
            }}
            animate={{
              x: [0, 50, -30, 0],
              y: [0, -30, 20, 0],
              rotate: [shape.rotation, shape.rotation + 360],
              scale: [1, 1.1, 0.9, 1],
            }}
            transition={{
              duration: shape.duration,
              delay: shape.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ShapeComponent />
          </motion.div>
        );
      })}
    </div>
  );
}

// Floating Data Particles
function DataParticles() {
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, delay: number, size: number, color: string}>>([]);
  
  useEffect(() => {
    const colors = ['emerald-400', 'blue-400', 'purple-400', 'cyan-400', 'pink-400'];
    const particleArray = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 6,
      size: Math.random() * 3 + 1,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));
    setParticles(particleArray);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute bg-${particle.color} rounded-full`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            boxShadow: `0 0 ${particle.size * 3}px rgba(16, 185, 129, 0.3)`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 1, 0.7, 0],
            scale: [0.5, 1, 1.2, 0.5],
          }}
          transition={{
            duration: 6,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Animated Background Lines
function BackgroundLines() {
  const lines = useMemo(() => {
    return Array.from({ length: 6 }, (_, i) => ({
      id: i,
      startX: Math.random() * 100,
      startY: Math.random() * 100,
      endX: Math.random() * 100,
      endY: Math.random() * 100,
      delay: i * 0.5,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        
        {lines.map((line) => (
          <motion.line
            key={line.id}
            x1={`${line.startX}%`}
            y1={`${line.startY}%`}
            x2={`${line.endX}%`}
            y2={`${line.endY}%`}
            stroke="url(#lineGradient)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 4,
              delay: line.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

// Skill Category Card Component
function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative bg-black/40 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-6 hover:border-emerald-400/40 transition-all duration-300 overflow-hidden">
        {/* Glowing background effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-blue-500/5"
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Skill Icon and Name */}
        <div className="relative z-10 flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <motion.div
              className="text-2xl"
              animate={{
                scale: isHovered ? 1.2 : 1,
                rotate: isHovered ? 10 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              {skill.icon}
            </motion.div>
            <div>
              <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
              <p className="text-xs text-emerald-400 font-medium">{skill.category}</p>
            </div>
          </div>
          
          {/* Level Indicator */}
          <div className="text-right">
            <div className="text-sm font-bold text-emerald-400">{skill.level}%</div>
            <div className="text-xs text-gray-400">Proficiency</div>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="relative z-10 mb-3">
          <div className="w-full bg-gray-700/50 rounded-full h-2">
            <motion.div
              className="h-2 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full relative overflow-hidden"
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: index * 0.1 + 0.5 }}
            >
              {/* Animated glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              />
            </motion.div>
          </div>
        </div>
        
        {/* Description */}
        <p className="relative z-10 text-sm text-gray-300 leading-relaxed">
          {skill.description}
        </p>
        
        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
          <motion.div
            className="absolute top-0 right-0 w-6 h-6 bg-gradient-to-br from-emerald-400/30 to-transparent transform rotate-45 translate-x-3 -translate-y-3"
            animate={{
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0.8,
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const categories = ["All", ...Array.from(new Set(skills.map(skill => skill.category)))];
  
  const filteredSkills = selectedCategory === "All" 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-black via-gray-900/50 to-black overflow-hidden relative min-h-screen">
      {/* Neural Grid Background */}
      <NeuralGrid />
      
      {/* Floating Geometric Shapes */}
      <FloatingShapes />
      
      {/* Data Particles */}
      <DataParticles />
      
      {/* Animated Background Lines */}
      <BackgroundLines />
      
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 bg-mesh-gradient animate-mesh-move pointer-events-none" />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-blue-500/5 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/5 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-radial-gradient from-emerald-500/10 via-transparent to-purple-500/10 pointer-events-none" />
      
      {/* Additional floating orbs */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-400/10 rounded-full blur-xl animate-breathe" />
      <div className="absolute top-20 right-20 w-24 h-24 bg-blue-400/10 rounded-full blur-xl animate-drift" />
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-purple-400/10 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-10 right-10 w-28 h-28 bg-cyan-400/10 rounded-full blur-xl animate-pulse-slow" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <motion.h2 
              className="text-5xl md:text-7xl font-bold mb-6 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-emerald-300 bg-clip-text text-transparent relative">
                Skillverse
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-blue-400/20 to-emerald-300/20 blur-2xl"
                  animate={{
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </span>
            </motion.h2>
            
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto mb-8 relative"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.8 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-400 blur-sm"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-gray-300 text-lg md:text-xl px-4 max-w-4xl mx-auto leading-relaxed"
            >
              Advanced technology stack powering next-generation solutions.
              <br />
              <span className="text-emerald-400 font-semibold">Precision. Performance. Innovation.</span>
            </motion.p>
          </motion.div>

          {/* Category Filters */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full border transition-all duration-300 font-medium ${
                  selectedCategory === category
                    ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 shadow-lg shadow-emerald-500/25'
                    : 'bg-black/40 border-gray-600 text-gray-300 hover:border-emerald-500/50 hover:text-emerald-400'
                }`}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: selectedCategory === category 
                    ? "0 0 25px rgba(16, 185, 129, 0.4)"
                    : "0 0 15px rgba(16, 185, 129, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            layout
          >
            <AnimatePresence mode="wait">
              {filteredSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Stats Footer */}
          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <motion.div
                  className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  {skills.length}+
                </motion.div>
                <div className="text-gray-400 text-sm">Technologies</div>
              </div>
              <div className="text-center">
                <motion.div
                  className="text-3xl md:text-4xl font-bold text-blue-400 mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 1.2 }}
                >
                  {categories.length - 1}
                </motion.div>
                <div className="text-gray-400 text-sm">Categories</div>
              </div>
              <div className="text-center">
                <motion.div
                  className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 1.4 }}
                >
                  85%
                </motion.div>
                <div className="text-gray-400 text-sm">Avg Proficiency</div>
              </div>
              <div className="text-center">
                <motion.div
                  className="text-3xl md:text-4xl font-bold text-blue-400 mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 1.6 }}
                >
                  24/7
                </motion.div>
                <div className="text-gray-400 text-sm">Learning</div>
              </div>
            </div>
            
            <motion.p
              className="mt-12 text-gray-400 text-sm max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 2 }}
            >
              Continuously evolving skill matrix powered by passion for innovation.
              <br />
              <span className="text-emerald-400">Neural pathways optimized for problem-solving excellence.</span>
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
