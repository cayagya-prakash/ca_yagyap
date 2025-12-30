import { cn } from "@/lib/utils";

interface TeamMemberCardProps {
  name: string;
  designation: string;
  qualifications: string;
  image?: string;
  className?: string;
}

export function TeamMemberCard({ 
  name, 
  designation, 
  qualifications, 
  image,
  className 
}: TeamMemberCardProps) {
  return (
    <div className={cn(
      "bg-card rounded-lg border border-border p-6 text-center transition-all duration-300 hover:shadow-elevated",
      className
    )}>
      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <span className="font-heading text-2xl font-semibold text-primary">
            {name.split(' ').map(n => n[0]).join('')}
          </span>
        )}
      </div>
      <h3 className="font-heading font-semibold text-lg text-foreground mb-1">
        {name}
      </h3>
      <p className="text-accent font-medium text-sm mb-2">{designation}</p>
      <p className="text-xs text-muted-foreground">{qualifications}</p>
    </div>
  );
}
