import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 bg-subtle-gradient relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-12 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <p className="font-body text-accent font-medium tracking-widest uppercase text-sm mb-4 opacity-0 animate-fade-in stagger-1">
              Product Manager & Developer
            </p>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6 opacity-0 animate-slide-up stagger-2">
              Ilekuba
              <br />
              <span className="text-gradient">Makuochukwu</span>
            </h1>

            <p className="font-body text-muted-foreground text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 opacity-0 animate-slide-up stagger-3">
              Computer Science student passionate about building secure, user-centered products 
              that solve real-world problems. Currently exploring cybersecurity and product management.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10 opacity-0 animate-slide-up stagger-4">
              <Button variant="hero" size="xl" asChild>
                <a href="#projects">View My Work</a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#contact">Let's Connect</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start opacity-0 animate-fade-in stagger-5">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-accent hover:text-accent transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-accent hover:text-accent transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:ilekubamakuochukwu@gmail.com"
                className="p-3 rounded-full border border-border hover:border-accent hover:text-accent transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center opacity-0 animate-scale-in stagger-2">
            <div className="relative">
              {/* Decorative Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-accent/30 scale-110 animate-pulse" />
              <div className="absolute inset-0 rounded-full border border-primary/20 scale-125" />
              
              {/* Image Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-card-hover">
                <img
                  src={profilePhoto}
                  alt="Ilekuba Makuochukwu - Product Manager and Developer"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Achievement Badge */}
              <div className="absolute -bottom-4 -right-4 bg-card shadow-card rounded-xl p-4 animate-fade-in stagger-5">
                <p className="font-heading text-xl font-bold text-accent">1st Place</p>
                <p className="font-body text-xs text-muted-foreground">CodeSpark Cup</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-accent transition-colors animate-bounce"
          aria-label="Scroll to about section"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
