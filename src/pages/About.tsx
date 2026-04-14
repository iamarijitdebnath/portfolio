import { GraduationCap, Server, Database, Globe, Lightbulb } from "lucide-react";

export default function About() {
    return (
        <div className="space-y-16 pb-12">
            {/* About Me Section */}
            <section className="relative">
                <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                    About Me
                </h1>

                <div className="space-y-6 text-muted-foreground leading-relaxed md:text-lg max-w-3xl">
                    <p>
                        I am Arijit Debnath, a software developer with a Master's degree in Computer
                        Applications (MCA). My journey in software development has been driven by curiosity
                        and a passion for creating efficient, scalable solutions.
                    </p>

                    <p>
                        My expertise lies in backend development, where I focus on building robust APIs,
                        designing efficient database architectures, and implementing server-side logic
                        that powers modern web applications.
                    </p>

                    <p>
                        I work primarily with technologies like Laravel, MySQL, and JavaScript.
                        I enjoy the challenge of optimizing performance, ensuring data integrity, and
                        creating clean, maintainable codebases.
                    </p>
                </div>
            </section>

            {/* Education Section */}
            <section>
                <div className="flex items-center gap-4 mb-10">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary border border-primary/20">
                        <GraduationCap className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold">Education</h2>
                </div>

                <div className="space-y-12 relative border-l-2 border-border/50 ml-6 md:ml-7 pb-2">
                    <div className="relative pl-10 group">
                        <div className="absolute w-5 h-5 bg-background border-2 border-primary rounded-full -left-[11px] top-1.5 ring-4 ring-background transition-all duration-300 group-hover:scale-125 group-hover:bg-primary/20" />
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">Master of Computer Applications (MCA)</h3>
                        <p className="text-muted-foreground mt-3 leading-relaxed">Specialized in advanced software development, database systems, and modern architectural patterns with a focus on building scalable backend solutions.</p>
                    </div>

                    <div className="relative pl-10 group">
                        <div className="absolute w-5 h-5 bg-background border-2 border-muted-foreground group-hover:border-primary rounded-full -left-[11px] top-1.5 ring-4 ring-background transition-all duration-300 group-hover:scale-125 group-hover:bg-primary/10" />
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">Bachelor In Computer Applications (BCA)</h3>
                        <p className="text-muted-foreground mt-3 leading-relaxed">Acquired a strong foundation in computer science fundamentals, programming concepts, relational databases, and data structures.</p>
                    </div>
                </div>
            </section>

            {/* Areas of Focus Section */}
            <section>
                <div className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold">Areas of Focus</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group p-6 rounded-2xl bg-card border border-border/60 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                        <Server className="w-8 h-8 text-primary mb-5 opacity-80 group-hover:opacity-100 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300" />
                        <h3 className="text-lg font-bold mb-2">Backend Development</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">Building robust APIs and writing server-side logic that securely powers modern web applications.</p>
                    </div>
                    
                    <div className="group p-6 rounded-2xl bg-card border border-border/60 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                        <Database className="w-8 h-8 text-primary mb-5 opacity-80 group-hover:opacity-100 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300" />
                        <h3 className="text-lg font-bold mb-2">Database Architecture</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">Designing efficient relational databases, optimizing complex queries, and ensuring data integrity.</p>
                    </div>

                    <div className="group p-6 rounded-2xl bg-card border border-border/60 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                        <Globe className="w-8 h-8 text-primary mb-5 opacity-80 group-hover:opacity-100 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300" />
                        <h3 className="text-lg font-bold mb-2">Web Technologies</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">Working seamlessly with modern frameworks and tools to build end-to-end user experiences.</p>
                    </div>

                    <div className="group p-6 rounded-2xl bg-card border border-border/60 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                        <Lightbulb className="w-8 h-8 text-primary mb-5 opacity-80 group-hover:opacity-100 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300" />
                        <h3 className="text-lg font-bold mb-2">Problem Solving</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">Translating complex business requirements into clean, maintainable, and scalable algorithms.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
