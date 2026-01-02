import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Calendar, User, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/components/Projects";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-heading text-4xl font-bold text-foreground mb-4">
            Project Not Found
          </h1>
          <p className="font-body text-muted-foreground mb-8">
            The project you're looking for doesn't exist.
          </p>
          <Button variant="hero" asChild>
            <Link to="/">Go Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  // Project-specific details
  const projectDetails: Record<string, { 
    challenge: string; 
    solution: string; 
    features: string[];
    technologies: string[];
    timeline: string;
  }> = {
    "clinic-management": {
      challenge: "Healthcare facilities often struggle with managing patient records, scheduling appointments, and maintaining efficient workflows. Paper-based systems lead to lost records and inefficient patient care.",
      solution: "Developed a comprehensive digital solution that centralizes patient management, streamlines appointment scheduling, and provides healthcare providers with instant access to patient histories and clinical data.",
      features: [
        "Patient record management with secure data storage",
        "Appointment scheduling and calendar integration",
        "Medical history tracking and documentation",
        "Staff management and role-based access control",
        "Reporting and analytics dashboard",
      ],
      technologies: ["React", "Node.js", "Database Management", "REST APIs"],
      timeline: "2024",
    },
    "ezylaundry": {
      challenge: "Traditional laundry services lack convenience for busy individuals who need flexible pickup and delivery options. Customers often struggle with scheduling and tracking their laundry orders.",
      solution: "Built a user-friendly platform that connects customers with laundry service providers, offering seamless scheduling, real-time tracking, and convenient payment options.",
      features: [
        "Easy pickup and delivery scheduling",
        "Real-time order tracking",
        "Service customization options",
        "Secure payment integration",
        "Customer feedback and rating system",
      ],
      technologies: ["Web Development", "Mobile-First Design", "Scheduling APIs"],
      timeline: "2024",
    },
    "campuscart": {
      challenge: "University students with small businesses lack a dedicated platform to reach their campus community. Additionally, peer-to-peer academic support is often informal and unstructured.",
      solution: "Created a dual-purpose platform combining e-commerce for student entrepreneurs with a video-based learning section where student tutors can share course tutorials with their peers.",
      features: [
        "Student business storefronts and product listings",
        "Video tutorial upload and streaming",
        "Course-based content organization",
        "Student-to-student commerce",
        "Campus community engagement features",
      ],
      technologies: ["Azure", "E-commerce", "Video Streaming", "User Authentication"],
      timeline: "2024",
    },
  };

  const details = projectDetails[project.id] || {
    challenge: "Addressing real-world problems through technology.",
    solution: "Building user-centered solutions that make a difference.",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    technologies: ["Web Development"],
    timeline: "2024",
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 lg:py-20 bg-subtle-gradient">
          <div className="container mx-auto px-6 lg:px-12">
            {/* Back Button */}
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-body text-sm mb-8 transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Projects
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-accent/10 text-accent font-body text-sm font-medium rounded-full">
                    {project.role}
                  </span>
                  <span className="flex items-center gap-1 text-muted-foreground font-body text-sm">
                    <Calendar size={14} />
                    {details.timeline}
                  </span>
                </div>

                <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  {project.title}
                </h1>

                <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-muted text-muted-foreground font-body text-sm rounded-full flex items-center gap-2"
                    >
                      <Tag size={14} />
                      {tag}
                    </span>
                  ))}
                </div>

                {project.liveUrl && (
                  <Button variant="hero" size="xl" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      View Live Project
                      <ExternalLink size={18} className="ml-2" />
                    </a>
                  </Button>
                )}
              </div>

              {/* Project Image */}
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-card-hover">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              {/* Challenge & Solution */}
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="bg-card-gradient rounded-2xl p-8 shadow-card">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                    The Challenge
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {details.challenge}
                  </p>
                </div>

                <div className="bg-card-gradient rounded-2xl p-8 shadow-card border-l-4 border-accent">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                    The Solution
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {details.solution}
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="mb-16">
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-8 text-center">
                  Key Features
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {details.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-muted/50 rounded-xl"
                    >
                      <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-accent font-body text-sm font-semibold">
                          {index + 1}
                        </span>
                      </div>
                      <p className="font-body text-foreground text-sm">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="text-center">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {details.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-5 py-2 bg-primary/10 text-foreground font-body text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-subtle-gradient">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Interested in working together?
            </h3>
            <p className="font-body text-muted-foreground mb-8">
              Let's discuss your next project
            </p>
            <Button variant="hero" size="xl" asChild>
              <a href="mailto:ilekubamakuochukwu@gmail.com">Get in Touch</a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
