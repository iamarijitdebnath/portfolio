import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Lightbulb } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
// import { Button } from "@/components/ui/button";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const { theme, toggleTheme } = useTheme();

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Blog", path: "/blog" },
        { name: "Contact", path: "/contact" },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <header className="border-b border-border">
            <div className="w-full max-w-3xl mx-auto px-6 py-6 md:py-8">
                <div className="flex items-center justify-between">
                    <Link to="/" className="text-2xl md:text-3xl font-bold tracking-tight">
                        ARIJIT DEBNATH
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-sm transition-colors ${isActive(link.path)
                                    ? "text-blue-400 font-medium"
                                    : "text-muted-foreground hover:text-foreground"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button
                            onClick={toggleTheme}
                            className="text-muted-foreground hover:text-black transition-colors cursor-pointer"
                            aria-label="Toggle theme"
                        >
                            <Lightbulb
                                className={`w-5 h-5 transition-all ${theme === "dark" ? "fill-white text-white" : ""
                                    }`}
                            />
                        </button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="text-muted-foreground hover:text-black transition-colors cursor-pointer"
                            aria-label="Toggle theme"
                        >
                            <Lightbulb
                                className={`w-5 h-5 transition-all ${theme === "dark" ? "fill-white text-white" : ""
                                    }`}
                            />
                        </button>
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-foreground"
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <nav className="md:hidden mt-6 pt-6 border-t border-border flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`text-base transition-colors ${isActive(link.path)
                                    ? "text-blue-400 font-medium"
                                    : "text-muted-foreground hover:text-foreground"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                )}
            </div>
        </header>
    );
}
