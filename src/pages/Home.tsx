import { FileDown, ArrowRight, Server, Code2, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="space-y-16 pb-12">
            <section className="relative flex flex-col items-center text-center pt-20 pb-16 md:pt-32 md:pb-24">
                <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
                    Hello, I'm <br className="hidden md:block" />
                    <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                        Arijit Debnath
                    </span>
                </h1>
                
                <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-8">
                    Building Scalable Backend Solutions
                </h2>

                <div className="max-w-3xl mb-12">
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed px-4">
                        I am a software developer passionate about backend development, web technologies,
                        and problem-solving. I enjoy working with{" "}
                        <span className="text-primary font-semibold">Laravel</span>,{" "}
                        <span className="text-primary font-semibold">MySQL</span>, and{" "}
                        <span className="text-primary font-semibold">JavaScript</span>{" "}
                        to build efficient and scalable applications.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-5 mt-2">
                    <Button asChild size="lg" className="gap-2 group shadow-xl shadow-primary/20">
                        <Link to="/projects">
                            View Projects
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                    </Button>
                    <Button variant="outline" size="lg" className="gap-2 group">
                        <FileDown className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-300" />
                        Download Resume
                    </Button>
                </div>
            </section>

            <hr className="border-border/50" />

            <section>
                <div className="mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold">What I Do</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
                        <Server className="w-8 h-8 text-primary mb-5 opacity-80 group-hover:opacity-100 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300" />
                        <h3 className="text-xl font-bold mb-3">Backend APIs</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Building robust, secure, and highly scalable RESTful APIs that power modern web and mobile applications.
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
                        <Database className="w-8 h-8 text-primary mb-5 opacity-80 group-hover:opacity-100 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300" />
                        <h3 className="text-xl font-bold mb-3">Database Design</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Crafting efficient relational database schemas, optimizing complex queries, and ensuring structural integrity.
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
                        <Code2 className="w-8 h-8 text-primary mb-5 opacity-80 group-hover:opacity-100 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300" />
                        <h3 className="text-xl font-bold mb-3">Clean Code</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Writing maintainable, well-documented server-side logic following industry best practices and design patterns.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
