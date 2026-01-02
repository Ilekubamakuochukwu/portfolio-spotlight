import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (isHomePage && href.startsWith("#")) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="font-heading text-2xl font-semibold text-foreground hover:text-accent transition-colors"
          >
            Makuochukwu
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {isHomePage ? (
              navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-muted-foreground hover:text-foreground font-body text-sm tracking-wide transition-colors"
                >
                  {link.label}
                </button>
              ))
            ) : (
              <Link
                to="/"
                className="text-muted-foreground hover:text-foreground font-body text-sm tracking-wide transition-colors"
              >
                Home
              </Link>
            )}
            <Button variant="hero" size="sm" asChild>
              <a href="#contact" onClick={() => handleNavClick("#contact")}>
                Get in Touch
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md border-b border-border animate-fade-in">
            <div className="container px-6 py-6 flex flex-col gap-4">
              {isHomePage ? (
                navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="text-muted-foreground hover:text-foreground font-body text-base py-2 text-left transition-colors"
                  >
                    {link.label}
                  </button>
                ))
              ) : (
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-foreground font-body text-base py-2 transition-colors"
                >
                  Home
                </Link>
              )}
              <Button variant="hero" className="mt-2" asChild>
                <a href="#contact" onClick={() => handleNavClick("#contact")}>
                  Get in Touch
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
