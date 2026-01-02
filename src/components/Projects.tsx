import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import clinicImage from "@/assets/project-clinic.jpg";
import laundryImage from "@/assets/project-laundry.jpg";
import campuscartImage from "@/assets/project-campuscart.jpg";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  role: string;
}

export const projects: Project[] = [
  {
    id: "clinic-management",
    title: "Clinic Patient Management System",
    description: "A comprehensive healthcare management solution designed to streamline patient records, appointments, and clinical workflows for medical practitioners.",
    image: clinicImage,
    tags: ["Healthcare", "Dashboard", "Patient Records"],
    role: "Full-Stack Developer",
  },
  {
    id: "ezylaundry",
    title: "EzyLaundry",
    description: "A laundry pickup and delivery scheduling platform that connects customers with laundry services, featuring real-time tracking and seamless booking.",
    image: laundryImage,
    tags: ["Scheduling", "Delivery", "Mobile-First"],
    liveUrl: "https://ezylaundry.base44.app",
    role: "Developer",
  },
  {
    id: "campuscart",
    title: "CampusCart",
    description: "An e-commerce platform for student businesses combined with a video-based learning section where university tutors can upload course tutorials.",
    image: campuscartImage,
    tags: ["E-commerce", "Education", "Video Learning"],
    liveUrl: "https://campuscart.azurewebsites.net/",
    role: "Product Manager & Team Lead",
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <div
      className={`group relative bg-card-gradient rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 ${
        index === 0 ? "lg:col-span-2" : ""
      }`}
    >
      {/* Image */}
      <div className={`relative overflow-hidden ${index === 0 ? "aspect-[2/1]" : "aspect-[4/3]"}`}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Hover Action */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link to={`/project/${project.id}`}>
            <Button variant="accent" size="icon" className="rounded-full">
              <ArrowUpRight size={20} />
            </Button>
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 lg:p-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-accent font-body text-sm font-medium">{project.role}</span>
        </div>
        
        <h3 className="font-heading text-xl lg:text-2xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
          <Link to={`/project/${project.id}`}>{project.title}</Link>
        </h3>
        
        <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-muted text-muted-foreground font-body text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 lg:py-32 bg-subtle-gradient">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-body text-accent font-medium tracking-widest uppercase text-sm mb-4">
            Portfolio
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of products I've built and contributed to, showcasing my skills in development and product management.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
