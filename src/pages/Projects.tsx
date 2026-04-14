import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "ERP / Inventory Management System",
        description: "Developed a full-featured ERP-based inventory management system using Laravel. Implemented core modules such as GRN (Goods Receipt Note), GDN (Goods Dispatch Note), and stock transfer with real-time inventory tracking. Designed database schemas, RESTful APIs, and modular workflows for procurement, warehouse management, and reporting.",
        tags: ["Laravel", "MySQL", "REST APIs", "Livewire"],
        github: "https://github.com/iamarijitdebnath/ERP",
        demo: "",
    },
    {
        title: "Full Stack E-commerce Platform",
        description: "Built a complete e-commerce platform using Laravel, covering both admin panel and customer interface. Admin features include product, category, order, and user management with analytics dashboard. Implemented authentication, cart system, order lifecycle, and payment integration with scalable backend architecture.",
        tags: ["Laravel", "Tailwind CSS", "MySQL", "JavaScript"],
        github: "https://github.com/iamarijitdebnath/ecommerce",
        demo: "",
    },
    {
        title: "Hotel & Homestay Booking System",
        description: "Created a multi-role hotel and homestay booking system using Laravel with User, Vendor, and Admin roles. Implemented role-based access control, property listing management, booking workflows, and availability tracking. Designed secure authentication and dashboard systems for each role.",
        tags: ["Laravel", "Bootstrap", "MySQL", "Auth"],
        github: "",
        demo: "",
    }
]

export default function Projects() {
    return (
        <div className="space-y-12 pb-12">
            <section>
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                        Featured Projects
                    </h1>
                    <p className="text-lg text-muted-foreground w-full md:max-w-2xl">
                        A selection of projects showcasing my backend development, architecture design, and problem-solving skills.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <article 
                            key={index}
                            className="group relative flex flex-col justify-between p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
                        >
                            {/* Subtle background glow effect on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            
                            <div className="relative z-10 space-y-4">
                                <div className="space-y-3">
                                    <h2 className="text-xl font-bold group-hover:text-primary transition-colors flex items-start justify-between gap-4">
                                        <span className="leading-snug">{project.title}</span>
                                        {(project.demo || project.github) && (
                                            <ArrowUpRight className="w-5 h-5 shrink-0 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 text-primary" />
                                        )}
                                    </h2>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                                
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {project.tags.map((tag) => (
                                        <span 
                                            key={tag} 
                                            className="px-2.5 py-1 rounded-md bg-secondary/50 text-secondary-foreground text-xs font-medium border border-border/50"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="relative z-10 flex gap-5 mt-8 pt-5 border-t border-border/50">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group/link"
                                    >
                                        <Github className="w-4 h-4 group-hover/link:-translate-y-0.5 transition-transform" />
                                        <span>Code</span>
                                    </a>
                                )}
                                {project.demo && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group/link"
                                    >
                                        <ExternalLink className="w-4 h-4 group-hover/link:-translate-y-0.5 transition-transform" />
                                        <span>Live Demo</span>
                                    </a>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
}
