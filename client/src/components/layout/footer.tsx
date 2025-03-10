import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A192F] border-t border-[#171738] py-8 mt-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            <a
              href="https://github.com/shreyash2106"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E6F1FF] hover:text-[#64FFDA] transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/shreyashsridhariyengar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E6F1FF] hover:text-[#64FFDA] transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:shreyash.sridhar@gmail.com"
              className="text-[#E6F1FF] hover:text-[#64FFDA] transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
          <p className="text-sm text-[#E6F1FF]/60">
            © 2024 Shreyash Sridhar Iyengar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
