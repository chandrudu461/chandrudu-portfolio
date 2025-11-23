import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Users, Award, BookOpen, Palette, Monitor, RefreshCw } from "lucide-react";

const steps = [
  {
    icon: Users,
    title: "Identify Your Audience",
    description: "Understand who you're targeting—recruiters, clients, or collaborators—and tailor content accordingly.",
    color: "primary",
  },
  {
    icon: Award,
    title: "Choose Your Best Work",
    description: "Quality over quantity. Select projects that showcase your strongest skills and most impressive results.",
    color: "secondary",
  },
  {
    icon: BookOpen,
    title: "Curate a Narrative",
    description: "Tell a story through your projects. Show your growth, learning journey, and problem-solving evolution.",
    color: "accent",
  },
  {
    icon: Palette,
    title: "Show Your Process",
    description: "Document design thinking, engineering decisions, and the 'why' behind your technical choices.",
    color: "primary",
  },
  {
    icon: Monitor,
    title: "Optimize for All Devices",
    description: "Ensure flawless experience on mobile, tablet, and desktop with responsive design and fast loading.",
    color: "secondary",
  },
  {
    icon: RefreshCw,
    title: "Keep It Updated",
    description: "Regularly refresh with new projects, skills, and achievements to stay relevant and showcase growth.",
    color: "accent",
  },
];

export default function PortfolioGuide() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="portfolio-guide" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              How a Great Portfolio Is Built
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-12" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -8 }}
                >
                  <Card className={`p-6 h-full bg-card/50 backdrop-blur-sm border-${step.color}/20 hover:border-${step.color} transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,217,255,0.3)] relative overflow-hidden group`}>
                    {/* Step Number */}
                    <div className="absolute top-4 right-4 text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors duration-300">
                      {index + 1}
                    </div>
                    
                    <motion.div
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                      className="relative z-10"
                    >
                      <Icon className={`h-10 w-10 text-${step.color} mb-4 group-hover:drop-shadow-[0_0_10px_rgba(0,217,255,0.8)] transition-all duration-300`} />
                    </motion.div>
                    
                    <h3 className="text-lg font-bold text-foreground mb-3 relative z-10">
                      {step.title}
                    </h3>
                    <p className="text-sm text-foreground/80 relative z-10">
                      {step.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
