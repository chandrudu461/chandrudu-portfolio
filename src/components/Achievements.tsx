import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Trophy, Award, Star, Medal, FileCheck } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Smart India Hackathon Winner",
    year: "2022",
    description: "Won the prestigious nationwide hackathon for developing the Project Tracking Application",
    color: "primary",
  },
  {
    icon: Award,
    title: "Fusion Hackathon Winner",
    year: "2022",
    description: "Winner of hackathon conducted by CSI (Computer Society of India)",
    color: "secondary",
  },
  {
    icon: Star,
    title: "CodeKaze AIR 419",
    year: "2023",
    description: "Achieved All India Rank 419 in CodeKaze internship contest on Coding Ninjas platform",
    color: "accent",
  },
  {
    icon: Medal,
    title: "CodeChef Rank 165",
    year: "2022",
    description: "Attained global rank of 165 in CodeChef May LunchTime 2022 Div4 competition",
    color: "primary",
  },
  {
    icon: FileCheck,
    title: "Cocubes Score 641/800",
    year: "2023",
    description: "Scored 641 out of 800 in the comprehensive Cocubes assessment",
    color: "secondary",
  },
];

const certifications = [
  {
    title: "AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services",
    date: "August 30, 2022",
    color: "primary",
  },
  {
    title: "AWS Academy Machine Learning",
    issuer: "Amazon Web Services",
    date: "April 28, 2022",
    color: "accent",
  },
];

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="achievements" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Achievements Section */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              <span className="bg-gradient-to-r from-accent via-secondary to-primary bg-clip-text text-transparent">
                Achievements & Awards
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent via-secondary to-primary mx-auto mb-12" />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <Card className={`p-6 h-full bg-card/50 backdrop-blur-sm border-${achievement.color}/20 hover:border-${achievement.color} transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,217,255,0.3)]`}>
                      <Icon className={`h-12 w-12 text-${achievement.color} mb-4`} />
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {achievement.title}
                      </h3>
                      <p className={`text-sm text-${achievement.color} font-semibold mb-3`}>
                        {achievement.year}
                      </p>
                      <p className="text-foreground/80 text-sm">{achievement.description}</p>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Certifications
              </span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-10" />

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <Card className={`p-6 bg-card/50 backdrop-blur-sm border-${cert.color}/20 hover:border-${cert.color} transition-all duration-300`}>
                    <FileCheck className={`h-10 w-10 text-${cert.color} mb-3`} />
                    <h3 className="text-lg font-bold text-foreground mb-2">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                    <p className={`text-sm text-${cert.color} font-semibold`}>{cert.date}</p>
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
