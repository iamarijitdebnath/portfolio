import { FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <div className="space-y-12">
            <section>
                <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                    Hello, I'm Arijit Debnath
                </h1>

                <div className="prose prose-lg max-w-none">
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                        I am a software developer passionate about backend development, web technologies,
                        and problem-solving. I enjoy working with <span className="text-blue-400 font-medium">Laravel</span>, {" "}
                        <span className="text-blue-400 font-medium">MySQL</span>, {" "}
                        <span className="text-blue-400 font-medium">JavaScript</span>, and {" "}
                        <span className="text-blue-400 font-medium">Django</span> to build efficient
                        and scalable solutions.
                    </p>
                </div>

                <div className="mt-8">
                    <Button variant="outline" className="gap-2">
                        <FileDown className="w-4 h-4" />
                        Download Resume
                    </Button>
                </div>
            </section>

            <hr className="border-border" />

            <section>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">What I Do</h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                    <p>
                        I specialize in backend development, focusing on building robust APIs,
                        designing efficient database schemas, and creating scalable server-side applications.
                    </p>
                    <p>
                        My work involves crafting clean, maintainable code and solving complex technical
                        challenges with modern web technologies.
                    </p>
                </div>
            </section>
        </div>
    );
}
