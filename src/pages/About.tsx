export default function About() {
    return (
        <div className="space-y-12">
            <section>
                <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                    About Me
                </h1>

                <div className="space-y-6 text-muted-foreground leading-relaxed">
                    <p className="text-lg">
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
                        I work primarily with technologies like Laravel, Django, MySQL, and JavaScript.
                        I enjoy the challenge of optimizing performance, ensuring data integrity, and
                        creating clean, maintainable codebases.
                    </p>
                </div>
            </section>

            <hr className="border-border" />

            <section>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Education</h2>
                <div className="space-y-4">
                    <div>
                        <h3 className="text-xl font-semibold">Master of Computer Applications (MCA)</h3>
                        <p className="text-muted-foreground">Specialized in software development and database systems</p>
                    </div>
                </div>
            </section>

            <hr className="border-border" />

            <section>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Areas of Focus</h2>
                <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>Backend Development & API Design</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>Database Architecture & Optimization</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>Web Technologies & Frameworks</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>Problem Solving & Algorithm Design</span>
                    </li>
                </ul>
            </section>
        </div>
    );
}
