import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Code } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "chandrudu461@gmail.com",
      href: "mailto:chandrudu461@gmail.com",
      color: "primary",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 93816 22291",
      href: "tel:+919381622291",
      color: "secondary",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      color: "accent",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/chandrudu-bugude-509773210",
      color: "primary",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/chandrudu",
      color: "secondary",
    },
    {
      icon: Code,
      label: "LeetCode",
      href: "https://leetcode.com/Chandrudu",
      color: "accent",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mb-12" />

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Let's Connect
                </h3>
                <p className="text-foreground/80 mb-8">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. 
                  Feel free to reach out through any of the channels below.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      whileHover={{ x: 8, scale: 1.02 }}
                    >
                      <Card className={`p-4 bg-card/50 backdrop-blur-sm border-${info.color}/20 hover:border-${info.color} transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,217,255,0.4)]`}>
                        <div className="flex items-center gap-4">
                          <motion.div
                            animate={{
                              y: [0, -5, 0],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          >
                            <Icon className={`h-6 w-6 text-${info.color} drop-shadow-[0_0_8px_rgba(0,217,255,0.6)]`} />
                          </motion.div>
                          <div>
                            <p className="text-sm text-muted-foreground">{info.label}</p>
                            {info.href ? (
                              <a
                                href={info.href}
                                className={`text-foreground font-semibold hover:text-${info.color} transition-colors`}
                              >
                                {info.value}
                              </a>
                            ) : (
                              <p className="text-foreground font-semibold">{info.value}</p>
                            )}
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="pt-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                        whileHover={{ scale: 1.3, y: -8, rotate: 5 }}
                        className={`p-3 rounded-full bg-card border border-${social.color}/30 hover:border-${social.color} hover:shadow-[0_0_25px_rgba(0,217,255,0.5)] transition-all duration-300`}
                      >
                        <Icon className={`h-6 w-6 text-${social.color}`} />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:shadow-[0_0_30px_rgba(0,217,255,0.2)] transition-all duration-300">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      required
                      className="bg-background/50 border-border focus:border-primary focus:shadow-[0_0_15px_rgba(0,217,255,0.3)] transition-all duration-300"
                    />
                  </motion.div>

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      required
                      className="bg-background/50 border-border focus:border-primary focus:shadow-[0_0_15px_rgba(0,217,255,0.3)] transition-all duration-300"
                    />
                  </motion.div>

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                  >
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Your message here..."
                      required
                      rows={6}
                      className="bg-background/50 border-border focus:border-primary focus:shadow-[0_0_15px_rgba(0,217,255,0.3)] resize-none transition-all duration-300"
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_rgba(0,217,255,0.5)] hover:shadow-[0_0_35px_rgba(0,217,255,0.8)] transition-all duration-300 group"
                    >
                      <motion.div
                        className="flex items-center justify-center w-full"
                        animate={{
                          x: [0, 5, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <Send className="mr-2 h-5 w-5 group-hover:rotate-45 transition-transform duration-300" />
                        Send Message
                      </motion.div>
                    </Button>
                  </motion.div>
                </form>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
