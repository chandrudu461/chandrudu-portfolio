import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Code2, TrendingUp, Target, Zap } from "lucide-react";

const stats = [
  {
    platform: "LeetCode",
    username: "Chandrudu",
    rating: "1479",
    problems: "500+",
    icon: Code2,
    color: "primary",
    link: "https://leetcode.com/Chandrudu",
  },
  {
    platform: "GeeksforGeeks",
    username: "Chandrut92n",
    codingScore: "651",
    problems: "200+",
    icon: Target,
    color: "secondary",
    link: "https://auth.geeksforgeeks.org/user/Chandrut92n",
  },
];

export default function DSAStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="dsa-stats" className="py-20 px-4 bg-card/20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent">
              DSA & Competitive Programming
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary via-accent to-primary mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.a
                  key={index}
                  href={stat.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="block"
                >
                  <Card className={`p-8 bg-card/50 backdrop-blur-sm border-${stat.color}/30 hover:border-${stat.color} transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,217,255,0.4)] relative overflow-hidden group`}>
                    {/* Background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-${stat.color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-6">
                        <Icon className={`h-12 w-12 text-${stat.color}`} />
                        <TrendingUp className={`h-6 w-6 text-${stat.color} opacity-50`} />
                      </div>

                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {stat.platform}
                      </h3>
                      <p className="text-muted-foreground mb-6">@{stat.username}</p>

                      <div className="space-y-4">
                        {stat.rating && (
                          <div className="flex items-center justify-between p-3 bg-muted/10 rounded-lg">
                            <span className="text-foreground/80">Rating</span>
                            <span className={`text-2xl font-bold text-${stat.color}`}>
                              {stat.rating}
                            </span>
                          </div>
                        )}
                        
                        {stat.codingScore && (
                          <div className="flex items-center justify-between p-3 bg-muted/10 rounded-lg">
                            <span className="text-foreground/80">Coding Score</span>
                            <span className={`text-2xl font-bold text-${stat.color}`}>
                              {stat.codingScore}
                            </span>
                          </div>
                        )}

                        <div className="flex items-center justify-between p-3 bg-muted/10 rounded-lg">
                          <span className="text-foreground/80">Problems Solved</span>
                          <span className={`text-2xl font-bold text-${stat.color} flex items-center`}>
                            <Zap className={`h-5 w-5 mr-1 text-${stat.color}`} />
                            {stat.problems}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.a>
              );
            })}
          </div>

          {/* Additional Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            <Card className="p-4 text-center bg-card/30 backdrop-blur-sm border-primary/20">
              <p className="text-3xl font-bold text-primary mb-1">700+</p>
              <p className="text-sm text-muted-foreground">Total Problems</p>
            </Card>
            <Card className="p-4 text-center bg-card/30 backdrop-blur-sm border-secondary/20">
              <p className="text-3xl font-bold text-secondary mb-1">1479</p>
              <p className="text-sm text-muted-foreground">Peak Rating</p>
            </Card>
            <Card className="p-4 text-center bg-card/30 backdrop-blur-sm border-accent/20">
              <p className="text-3xl font-bold text-accent mb-1">165</p>
              <p className="text-sm text-muted-foreground">Best Contest Rank</p>
            </Card>
            <Card className="p-4 text-center bg-card/30 backdrop-blur-sm border-primary/20">
              <p className="text-3xl font-bold text-primary mb-1">419</p>
              <p className="text-sm text-muted-foreground">CodeKaze AIR</p>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
