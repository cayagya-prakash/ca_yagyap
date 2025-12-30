import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  className?: string;
}

export function ServiceCard({ title, description, icon: Icon, href, className }: ServiceCardProps) {
  return (
    <Link
      to={href}
      className={cn(
        "group block p-6 bg-card rounded-lg border border-border transition-all duration-300",
        "hover:shadow-elevated hover:border-accent/30 hover:-translate-y-1",
        className
      )}
    >
      <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
        <Icon className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />
      </div>
      <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-accent transition-colors">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
        {description}
      </p>
      <span className="inline-flex items-center text-sm font-medium text-primary group-hover:text-accent transition-colors">
        Learn More
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
