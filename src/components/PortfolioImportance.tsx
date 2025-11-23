import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Sparkles, Target, Lightbulb, Users } from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "Gateway to Opportunities",
    description: "A portfolio is your digital handshake, opening doors to jobs, clients, and collaborations.",
    color: "primary",
  },
  {
    icon: Target,
    title: "Showcase Creativity & Problem-Solving",
    description: "Demonstrate your unique approach to challenges and your creative thinking process.",
    color: "secondary",
  },
  {
    icon: Lightbulb,
    title: "Proof of Real Capabilities",
    description: "Move beyond resumes with tangible evidence of your skills and completed projects.",
    color: "accent",
  },
  {
    icon: Users,
    title: "Define Your Professional Style",
    description: "Help clients and employers understand your work style, expertise, and personality.",
    color: "primary",
  },
];

export default function PortfolioImportance() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="portfolio-importance" className="py-20 px-4 bg-card/10">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
              Why a Tech Portfolio Matters
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent via-primary to-secondary mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                >
                  <Card className={`p-6 h-full bg-card/50 backdrop-blur-sm border-${benefit.color}/20 hover:border-${benefit.color} transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,217,255,0.3)] group`}>
                    <motion.div
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className={`h-12 w-12 text-${benefit.color} mb-4 group-hover:drop-shadow-[0_0_8px_rgba(0,217,255,0.8)] transition-all duration-300`} />
                    </motion.div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-foreground/80">
                      {benefit.description}
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
