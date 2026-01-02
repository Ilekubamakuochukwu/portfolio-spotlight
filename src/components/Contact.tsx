import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ilekubamakuochukwu@gmail.com",
      href: "mailto:ilekubamakuochukwu@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "07064981222",
      href: "tel:07064981222",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Lagos, Nigeria",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="font-body text-accent font-medium tracking-widest uppercase text-sm mb-4">
              Get in Touch
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Let's Work Together
            </h2>
            <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
              I'm always open to discussing new projects, opportunities in product management, 
              or collaborations in technology and cybersecurity.
            </p>
          </div>

          {/* Contact Card */}
          <div className="bg-card-gradient rounded-3xl p-8 lg:p-12 shadow-card">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">
                    Contact Information
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    Feel free to reach out through any of the following channels. 
                    I typically respond within 24 hours.
                  </p>
                </div>

                <div className="space-y-4">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-accent/10">
                        <item.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-body text-sm text-muted-foreground">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="font-body text-foreground hover:text-accent transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-body text-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="pt-6 border-t border-border">
                  <p className="font-body text-sm text-muted-foreground mb-4">Follow me on</p>
                  <div className="flex gap-3">
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl border border-border hover:border-accent hover:bg-accent/10 transition-all duration-300"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl border border-border hover:border-accent hover:bg-accent/10 transition-all duration-300"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
                <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                  <Send className="w-8 h-8 text-accent" />
                </div>
                <h4 className="font-heading text-2xl font-semibold text-foreground mb-4">
                  Ready to start a project?
                </h4>
                <p className="font-body text-muted-foreground mb-6">
                  Send me an email and let's discuss how we can work together.
                </p>
                <Button variant="hero" size="xl" asChild>
                  <a href="mailto:ilekubamakuochukwu@gmail.com">
                    Send an Email
                    <Mail className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
