import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12" />

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 shadow-[0_0_30px_rgba(0,217,255,0.1)]">
            <div className="space-y-6 text-lg text-foreground/90">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                I'm a passionate <span className="text-primary font-semibold">Full-Stack Developer</span> and{" "}
                <span className="text-secondary font-semibold">Backend Engineer</span> with a strong foundation in 
                Data Structures and Algorithms. My journey in software development has been marked by continuous 
                learning and a drive to solve complex problems.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                As the winner of the <span className="text-accent font-semibold">Smart India Hackathon 2022</span>, 
                I led my team in developing a comprehensive Project Tracking System for higher educational institutions. 
                This experience honed my skills in Android development, backend architecture, and team leadership.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                My expertise spans across <span className="text-primary font-semibold">C, C++, Java, Python, and JavaScript</span>, 
                with hands-on experience in modern frameworks like React.js and Android Studio. I've solved over{" "}
                <span className="text-secondary font-semibold">500+ problems on LeetCode</span> with a rating of 1479, 
                demonstrating my commitment to algorithmic problem-solving.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Currently working as a <span className="text-accent font-semibold">Full Stack Developer at Edwisely</span> and 
                serving as a DSA Technical Assistant at Suntek Corp, I combine practical industry experience with a strong 
                theoretical foundation. I'm always excited to tackle new challenges and contribute to innovative projects.
              </motion.p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
