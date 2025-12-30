import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

interface ContactCTAProps {
  title?: string;
  description?: string;
}

export function ContactCTA({ 
  title = "Need Professional Assistance?",
  description = "Our team of qualified Chartered Accountants is here to help you with your financial and compliance requirements."
}: ContactCTAProps) {
  return (
    <section className="bg-surface section-padding">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" asChild>
              <Link to="/contact">Book a Consultation</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="tel:+919876543210">
                <Phone className="mr-2 h-4 w-4" />
                Call Us Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
