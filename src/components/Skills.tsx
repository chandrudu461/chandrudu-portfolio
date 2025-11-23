import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";

const skills = {
  "Programming Languages": ["C", "C++", "Java", "Python"],
  "Technical Skills": ["SQL", "Android Studio", "Data Structures & Algorithms"],
  "Web Technologies": ["HTML", "CSS", "JavaScript", "React.js"],
  "Tools & Platforms": ["Git", "GitHub", "Firebase", "RazorPay API"],
  "Cloud & ML": ["AWS", "Machine Learning", "YOLO-v7"],
};

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

          <div className="space-y-8">
            {Object.entries(skills).map(([category, items], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <h3 className="text-xl font-semibold text-primary mb-4">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.1 + index * 0.05 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                    >
                      <Badge
                        variant="outline"
                        className="px-4 py-2 text-sm border-primary/50 hover:border-primary bg-card/50 backdrop-blur-sm hover:bg-primary/10 transition-all duration-300 cursor-pointer shadow-[0_0_10px_rgba(0,217,255,0.2)] hover:shadow-[0_0_20px_rgba(0,217,255,0.4)]"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
