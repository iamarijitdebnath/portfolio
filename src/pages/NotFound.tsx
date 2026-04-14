import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
    const location = useLocation();

    useEffect(() => {
        console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    }, [location.pathname]);

    return (
        <div className="space-y-8 py-12">
            <div className="space-y-4">
                <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-foreground">404</h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                    Page not found
                </h2>
                <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                    Sorry, we couldn't find the page you're looking for. It might have been removed or the link is incorrect.
                </p>
            </div>
            <div className="pt-4">
                <Button asChild variant="outline" className="gap-2">
                    <Link to="/">
                        <ArrowLeft className="w-4 h-4" />
                        Return to Home
                    </Link>
                </Button>
            </div>
        </div>
    );
};

export default NotFound;
