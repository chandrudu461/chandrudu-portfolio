import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";

const skillsWithProficiency = [
  { name: "C/C++", level: 90, color: "primary" },
  { name: "Java", level: 85, color: "secondary" },
  { name: "Python", level: 88, color: "accent" },
  { name: "Data Structures & Algorithms", level: 92, color: "primary" },
  { name: "React.js", level: 85, color: "secondary" },
  { name: "JavaScript", level: 87, color: "accent" },
  { name: "SQL", level: 83, color: "primary" },
  { name: "Android Studio", level: 80, color: "secondary" },
];

function AnimatedProgressBar({ skill, index, isInView }: { skill: typeof skillsWithProficiency[0], index: number, isInView: boolean }) {
  const progress = useMotionValue(0);
  const width = useTransform(progress, (v) => `${v}%`);
  
  useEffect(() => {
    if (isInView) {
      const controls = animate(progress, skill.level, {
        duration: 1.5,
        delay: index * 0.1,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, skill.level, index, progress]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-foreground font-medium group-hover:text-primary transition-colors duration-300">
          {skill.name}
        </span>
        <motion.span 
          className={`text-sm font-bold text-${skill.color}`}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: index * 0.1 + 1 }}
        >
          {skill.level}%
        </motion.span>
      </div>
      <div className="h-3 bg-muted/30 rounded-full overflow-hidden backdrop-blur-sm border border-border/50">
        <motion.div
          className={`h-full bg-gradient-to-r from-${skill.color} to-${skill.color}/70 shadow-[0_0_10px_rgba(0,217,255,0.5)] group-hover:shadow-[0_0_20px_rgba(0,217,255,0.8)] transition-shadow duration-300`}
          style={{ width }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="skills" className="py-20 px-4 bg-card/20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-accent mx-auto mb-12" />

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 shadow-[0_0_30px_rgba(0,217,255,0.1)]">
            <div className="space-y-6">
              {skillsWithProficiency.map((skill, index) => (
                <AnimatedProgressBar 
                  key={skill.name} 
                  skill={skill} 
                  index={index} 
                  isInView={isInView} 
                />
              ))}
            </div>
          </Card>

          {/* Additional Skills Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8"
          >
            <h3 className="text-xl font-semibold text-center text-muted-foreground mb-4">
              Additional Technologies
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {["Git", "GitHub", "Firebase", "AWS", "HTML/CSS", "Machine Learning", "YOLO-v7", "RazorPay API"].map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 1 + index * 0.05 }}
                  whileHover={{ scale: 1.15, y: -3 }}
                  className="px-4 py-2 bg-card/50 border border-accent/30 rounded-full text-sm text-foreground/90 hover:border-accent hover:shadow-[0_0_15px_rgba(0,217,255,0.4)] transition-all duration-300 cursor-default backdrop-blur-sm"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
