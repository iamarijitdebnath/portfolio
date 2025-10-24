import { Link } from "react-router-dom";

const blogPosts = [
    {
        title: "Optimizing MySQL Queries for Large Datasets",
        date: "March 15, 2025",
        slug: "optimizing-mysql-queries",
        excerpt: "Learn techniques for improving query performance when dealing with millions of records in MySQL databases.",
    },
    {
        title: "Building RESTful APIs with Laravel Best Practices",
        date: "March 8, 2025",
        slug: "laravel-api-best-practices",
        excerpt: "A comprehensive guide to structuring, versioning, and securing RESTful APIs in Laravel applications.",
    },
    {
        title: "Understanding Database Indexing",
        date: "February 28, 2025",
        slug: "database-indexing-guide",
        excerpt: "Deep dive into how database indexes work and when to use them for optimal query performance.",
    },
    {
        title: "Error Handling Strategies in Backend Development",
        date: "February 20, 2025",
        slug: "error-handling-backend",
        excerpt: "Implementing robust error handling and logging mechanisms in server-side applications.",
    },
];

export default function Blog() {
    return (
        <div className="space-y-12">
            <section>
                <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                    Blog
                </h1>
                <p className="text-lg text-muted-foreground mb-12">
                    Thoughts on backend development, web technologies, and software engineering.
                </p>

                <div className="space-y-10">
                    {blogPosts.map((post, index) => (
                        <article key={post.slug} className="space-y-3">
                            <div className="flex items-baseline gap-4 flex-wrap">
                                <h2 className="text-2xl font-bold">
                                    <Link
                                        to={`/blog/${post.slug}`}
                                        className="hover:text-blue-400 transition-colors"
                                    >
                                        {post.title}
                                    </Link>
                                </h2>
                                <time className="text-sm text-muted-foreground">{post.date}</time>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
                            <Link
                                to={`/blog/${post.slug}`}
                                className="inline-block text-blue-400 hover:underline text-sm"
                            >
                                Read more →
                            </Link>
                            {index < blogPosts.length - 1 && <hr className="border-border mt-10" />}
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
}
