import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({ 
  label, 
  title, 
  description, 
  align = "center",
  className 
}: SectionHeaderProps) {
  return (
    <div className={cn(
      "max-w-2xl mb-12",
      align === "center" && "mx-auto text-center",
      className
    )}>
      {label && (
        <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-3">
          {label}
        </span>
      )}
      <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
