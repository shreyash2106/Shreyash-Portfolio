import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  const NavLinks = () => (
    <>
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="text-[#E6F1FF] hover:text-[#64FFDA] transition-colors"
          onClick={() => setIsOpen(false)}
        >
          {item.label}
        </a>
      ))}
    </>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#020B1C]/80 backdrop-blur-sm border-b border-[#171738]">
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <Link href="/" className="text-[#64FFDA] text-xl font-bold">
            SSI
          </Link>

          {isMobile ? (
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-[#0A192F] border-[#171738]">
                <div className="flex flex-col space-y-4 mt-8">
                  <NavLinks />
                </div>
              </SheetContent>
            </Sheet>
          ) : (
            <div className="flex items-center space-x-8">
              <NavLinks />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}