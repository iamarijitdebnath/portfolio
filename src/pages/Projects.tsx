import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "E-Commerce Backend API",
        description: "A comprehensive REST API built with Laravel and MySQL, featuring user authentication, product management, order processing, and payment integration. Implemented efficient database queries and caching for optimal performance.",
        github: "#",
        demo: "#",
    },
    {
        title: "Task Management System",
        description: "Full-stack web application using Django and JavaScript, allowing teams to create, assign, and track tasks. Features real-time updates, role-based access control, and detailed analytics dashboards.",
        github: "#",
        demo: "#",
    },
    {
        title: "Inventory Management Platform",
        description: "Database-driven application for managing product inventory across multiple warehouses. Built with Laravel, MySQL, and Vue.js, featuring automated stock alerts, reporting, and supplier management.",
        github: "#",
    },
    {
        title: "API Integration Service",
        description: "Middleware service that connects multiple third-party APIs, handling authentication, rate limiting, and data transformation. Designed for scalability and fault tolerance using modern backend patterns.",
        github: "#",
    },
];

export default function Projects() {
    return (
        <div className="space-y-12">
            <section>
                <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                    Projects
                </h1>
                <p className="text-lg text-muted-foreground mb-12">
                    A selection of projects showcasing my backend development and problem-solving skills.
                </p>

                <div className="space-y-12">
                    {projects.map((project, index) => (
                        <div key={index}>
                            <article className="space-y-4">
                                <h2 className="text-2xl font-bold">{project.title}</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex gap-4 text-sm">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            className="inline-flex items-center gap-2 text-blue-400 hover:underline"
                                        >
                                            <Github className="w-4 h-4" />
                                            GitHub
                                        </a>
                                    )}
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            className="inline-flex items-center gap-2 text-blue-400 hover:underline"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </article>
                            {index < projects.length - 1 && <hr className="border-border mt-12" />}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
