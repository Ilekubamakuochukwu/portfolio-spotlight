import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Link to="/" className="font-heading text-xl font-semibold">
            Makuochukwu
          </Link>
          
          <p className="font-body text-sm text-primary-foreground/70 text-center">
            © {currentYear} Ilekuba Makuochukwu. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#about" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              About
            </a>
            <a href="#projects" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Projects
            </a>
            <a href="#contact" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
