import { Github, Linkedin, Code, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border/50 bg-card/20 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {currentYear} Chandrudu Bugude. Built with{" "}
            <Heart className="inline h-4 w-4 text-destructive fill-destructive" />{" "}
            using React & Tailwind CSS
          </p>

          <div className="flex gap-4">
            <a
              href="https://github.com/chandrudu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-secondary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/chandrudu-bugude-509773210"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://leetcode.com/Chandrudu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="LeetCode"
            >
              <Code className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
