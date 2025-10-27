import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export default function Contact() {
    const { toast } = useToast();

    // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     toast({
    //         title: "Message sent!",
    //         description: "Thank you for reaching out. I'll get back to you soon.",
    //     });
    //     (e.target as HTMLFormElement).reset();
    // };
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const form = e.target as HTMLFormElement;
        const data = new FormData(form);

        try {
            const res = await fetch("https://formspree.io/f/movpjavg", {
                method: "POST",
                body: data,
                headers: {
                    Accept: "application/json",
                },
            });

            if (res.ok) {
                toast({
                    title: "Message sent!",
                    description: "Thanks — I'll reply to you soon.",
                });
                form.reset();
            } else {
                toast({
                    title: "Failed to send",
                    description: "Please try again later.",
                });
            }
        } catch (err) {
            toast({
                title: "Network error",
                description: "Unable to reach the form service.",
            });
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="space-y-12">
            <section>
                <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                    Contact
                </h1>
                <p className="text-lg text-muted-foreground mb-12">
                    Feel free to reach out for collaborations, opportunities, or just to say hello.
                </p>

                <div className="space-y-8">
                    <div className="flex flex-col gap-4">
                        <a
                            href="mailto:arijitdebnath.dev@gmail.com"
                            className="inline-flex items-center gap-3 text-blue-400 hover:underline text-lg"
                        >
                            <Mail className="w-5 h-5" />
                            arijitdebnath.dev@gmail.com
                        </a>
                        <a
                            href="https://github.com/iamarijitdebnath"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 text-blue-400 hover:underline text-lg"
                        >
                            <Github className="w-5 h-5" />
                            GitHub
                        </a>
                        <a
                            href="https://linkedin.com/in/iamarijitdebnath"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 text-blue-400 hover:underline text-lg"
                        >
                            <Linkedin className="w-5 h-5" />
                            LinkedIn
                        </a>
                    </div>

                    <hr className="border-border" />

                    {/* <div>
                        <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">
                                    Name
                                </label>
                                <Input
                                    id="name"
                                    type="text"
                                    required
                                    className="w-full"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">
                                    Email
                                </label>
                                <Input
                                    id="email"
                                    type="email"
                                    required
                                    className="w-full"
                                    placeholder="your.email@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    Message
                                </label>
                                <Textarea
                                    id="message"
                                    required
                                    className="w-full min-h-[150px]"
                                    placeholder="Your message..."
                                />
                            </div>
                            <Button type="submit" className="w-full md:w-auto">
                                Send Message
                            </Button>
                        </form>
                    </div> */}
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">
                                    Name
                                </label>
                                <Input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    className="w-full"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">
                                    Email
                                </label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className="w-full"
                                    placeholder="your.email@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    Message
                                </label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    required
                                    className="w-full min-h-[150px]"
                                    placeholder="Your message..."
                                />
                            </div>
                            <Button type="submit" className="w-full md:w-auto" disabled={loading}>
                                {loading ? "Sending..." : "Send Message"}
                            </Button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
