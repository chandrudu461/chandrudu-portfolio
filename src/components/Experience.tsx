import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Edwisely",
    role: "Full Stack Developer",
    period: "Present",
    description: "Working on full-stack development, creating scalable applications and implementing modern web technologies.",
    color: "primary",
  },
  {
    company: "Suntek Corp Private Limited",
    role: "DSA Technical Assistant Intern",
    period: "May 2023 - Present",
    description: "Facilitating learning and supporting students in Data Structures and Algorithms courses, enhancing educational experience while continuously improving problem-solving abilities.",
    color: "secondary",
  },
  {
    company: "Invilogic Software Private Limited",
    role: "Machine Learning Intern",
    period: "Dec 2022 - Jan 2023",
    description: "Researched crucial Machine Learning topics and implemented a Robust Object Detection Model using the YOLO-v7 Algorithm.",
    color: "accent",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-12" />

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-6 w-5 h-5 rounded-full bg-${exp.color} border-4 border-background hidden md:block shadow-[0_0_10px_rgba(0,217,255,0.5)]`} />

                  <Card className="ml-0 md:ml-20 p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,217,255,0.2)]">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <div className="flex items-center gap-2 mb-2 md:mb-0">
                        <Briefcase className={`h-5 w-5 text-${exp.color}`} />
                        <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </div>
                    <h4 className={`text-lg font-semibold text-${exp.color} mb-2`}>{exp.company}</h4>
                    <p className="text-foreground/80">{exp.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
