import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Award } from "lucide-react";

const projects = [
  {
    title: "Project Tracking System",
    subtitle: "Smart India Hackathon 2022 Winner",
    description: "Developed a comprehensive Mobile and Web Application for monitoring online project progress in Higher Educational Institutions under various schemes and funding agencies. Led the team as Android Backend Developer to victory.",
    technologies: ["Android Studio", "Google Firebase", "RazorPay API"],
    github: "https://github.com/chandrudu/Project-Tracking-Application",
    award: "SIH 2022 Winner",
    color: "primary",
  },
  {
    title: "QuizUp",
    subtitle: "Android Quiz Application",
    description: "A sophisticated Android Quiz App created using Java and integrated with Google Firebase, enabling users to upload and participate in quizzes effortlessly. Led a team of 3 in developing this application as part of Academic Minor Project Curriculum.",
    technologies: ["Java", "Android Studio", "Firebase", "XML"],
    github: "https://github.com/chandrudu/Quiz-Up",
    color: "secondary",
  },
  {
    title: "Object Detection System",
    subtitle: "Machine Learning Project",
    description: "Implemented a Robust Object Detection Model using the YOLO-v7 Algorithm during Machine Learning internship. Researched and applied cutting-edge ML techniques for accurate real-time object detection.",
    technologies: ["Python", "YOLO-v7", "Machine Learning", "Computer Vision"],
    color: "accent",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 px-4 bg-card/20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-12" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotateY: 0 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                whileHover={{ 
                  scale: 1.05, 
                  rotateX: 5, 
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <Card
                  className={`p-6 h-full bg-card/50 backdrop-blur-sm border-${project.color}/20 hover:border-${project.color} transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,217,255,0.5)] relative overflow-hidden group`}
                >
                  {project.award && (
                    <motion.div 
                      className="absolute top-4 right-4"
                      animate={{
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Award className="h-6 w-6 text-accent drop-shadow-[0_0_8px_rgba(0,217,255,0.8)]" />
                    </motion.div>
                  )}

                  <h3 className={`text-2xl font-bold text-${project.color} mb-2`}>
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.subtitle}</p>
                  <p className="text-foreground/80 mb-6 flex-grow">{project.description}</p>

                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <motion.span
                          key={tech}
                          className="px-2 py-1 text-xs rounded-full bg-muted/50 text-foreground border border-primary/30"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {project.github && (
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className={`flex-1 border-${project.color} text-${project.color} hover:bg-${project.color} hover:text-${project.color}-foreground transition-all duration-300`}
                          asChild
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </a>
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className={`flex-1 border-${project.color} text-${project.color} hover:bg-${project.color} hover:text-${project.color}-foreground transition-all duration-300`}
                          asChild
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Demo
                          </a>
                        </Button>
                      </div>
                    )}
                  </div>

                  {/* Animated gradient background on hover */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 -z-10"
                    animate={hoveredIndex === index ? {
                      background: [
                        "linear-gradient(135deg, rgba(0,217,255,0.1) 0%, rgba(224,36,143,0.1) 100%)",
                        "linear-gradient(225deg, rgba(224,36,143,0.1) 0%, rgba(159,67,255,0.1) 100%)",
                        "linear-gradient(315deg, rgba(159,67,255,0.1) 0%, rgba(0,217,255,0.1) 100%)",
                        "linear-gradient(135deg, rgba(0,217,255,0.1) 0%, rgba(224,36,143,0.1) 100%)",
                      ]
                    } : {}}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
