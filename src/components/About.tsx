import { GraduationCap, Briefcase, Award, Shield } from "lucide-react";

const About = () => {
  const experiences = [
    {
      icon: Briefcase,
      title: "Taj Bank Intern",
      period: "Jul 2025 - Sep 2025",
      description: "Assisted customer onboarding, managed investment products, and maintained banking compliance.",
    },
    {
      icon: Shield,
      title: "Mastercard Cybersecurity",
      period: "Apr 2025",
      description: "Security analyst simulation identifying threats and implementing training procedures.",
    },
    {
      icon: Briefcase,
      title: "IQ Distributions",
      period: "Jul 2024 - Sep 2024",
      description: "Data Management Analyst intern managing e-commerce websites and customer research.",
    },
  ];

  const skills = {
    technical: ["HTML", "CSS", "Microsoft Office", "Data Processing"],
    soft: ["Leadership", "Communication", "Problem-Solving", "Teamwork"],
  };

  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-body text-accent font-medium tracking-widest uppercase text-sm mb-4">
            About Me
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Passionate About Technology
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            I am a Computer Science student with a deep interest in product management for security-conscious technology. 
            Eager to contribute to the design and development of secure, user-centered products that protect users 
            and solve real-world problems.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education & Achievement */}
          <div className="space-y-8">
            {/* Education Card */}
            <div className="bg-card-gradient rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-accent/10">
                  <GraduationCap className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-foreground">Education</h3>
                  <p className="font-body text-muted-foreground text-sm">Pan-Atlantic University</p>
                </div>
              </div>
              <div className="space-y-3">
                <p className="font-body text-foreground font-medium">
                  B.Sc. Computer Science
                </p>
                <p className="font-body text-muted-foreground text-sm">
                  Expected Graduation: July 2026
                </p>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-accent/10 text-accent font-body text-sm font-medium rounded-full">
                    CGPA: 4.43
                  </span>
                </div>
              </div>
            </div>

            {/* Achievement Card */}
            <div className="bg-card-gradient rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-shadow duration-300 border-l-4 border-accent">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-xl bg-accent/10">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-foreground">Achievement</h3>
                  <p className="font-body text-muted-foreground text-sm">CodeSpark Cup Competition</p>
                </div>
              </div>
              <p className="font-body text-foreground mb-2">
                <span className="text-accent font-semibold">1st Place Winner</span> — Team Leader
              </p>
              <p className="font-body text-muted-foreground text-sm">
                Led the winning team at the CodeSpark Cup hosted by the Tech Innovation Club at Pan-Atlantic University.
              </p>
            </div>

            {/* Skills */}
            <div className="bg-card-gradient rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-shadow duration-300">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-6">Skills</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-body text-sm text-muted-foreground mb-2">Technical</p>
                  <div className="flex flex-wrap gap-2">
                    {skills.technical.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-primary/10 text-foreground font-body text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-body text-sm text-muted-foreground mb-2">Soft Skills</p>
                  <div className="flex flex-wrap gap-2">
                    {skills.soft.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-accent/10 text-accent font-body text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div>
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-8">Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-8 pb-8 border-l-2 border-border last:pb-0 last:border-l-0"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-accent" />
                  
                  <div className="bg-card-gradient rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <exp.icon className="w-5 h-5 text-accent" />
                      <h4 className="font-heading text-lg font-semibold text-foreground">
                        {exp.title}
                      </h4>
                    </div>
                    <p className="font-body text-accent text-sm mb-2">{exp.period}</p>
                    <p className="font-body text-muted-foreground text-sm">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Certification */}
            <div className="mt-8 p-6 border border-border rounded-xl">
              <p className="font-body text-sm text-muted-foreground mb-2">Certification</p>
              <p className="font-heading text-lg font-medium text-foreground">
                Introduction to Cybersecurity
              </p>
              <p className="font-body text-accent text-sm">CISCO Networking Academy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
