import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { 
  FileText, 
  Calculator, 
  ClipboardCheck, 
  BookOpen, 
  Building2,
  ArrowRight
} from "lucide-react";

const services = [
  {
    title: "Income Tax & ITR Filing",
    description: "Comprehensive income tax planning, computation, return filing, and representation services for individuals, HUFs, firms, and companies.",
    icon: FileText,
    href: "/services/income-tax",
    features: ["Tax Planning", "ITR Filing", "Tax Assessment", "Appeals & Representation"],
  },
  {
    title: "GST & Indirect Tax",
    description: "Complete GST compliance services including registration, return filing, refunds, and advisory on indirect tax matters.",
    icon: Calculator,
    href: "/services/gst",
    features: ["GST Registration", "Return Filing", "Refund Claims", "Advisory Services"],
  },
  {
    title: "Audit & Assurance",
    description: "Statutory audit, tax audit, internal audit, and other assurance services conducted as per professional standards.",
    icon: ClipboardCheck,
    href: "/services/audit",
    features: ["Statutory Audit", "Tax Audit", "Internal Audit", "Special Audits"],
  },
  {
    title: "Accounting & Bookkeeping",
    description: "Professional accounting services including bookkeeping, financial statements preparation, and management reporting.",
    icon: BookOpen,
    href: "/services/accounting",
    features: ["Bookkeeping", "Financial Statements", "MIS Reports", "Payroll Processing"],
  },
  {
    title: "Business Registration & Compliance",
    description: "Company incorporation, LLP formation, startup registration, and ongoing secretarial and regulatory compliance.",
    icon: Building2,
    href: "/services/registration",
    features: ["Company Registration", "LLP Formation", "MSME Registration", "Annual Compliance"],
  },
];

export default function Services() {
  return (
    <Layout>
      <PageHeader
        title="Our Services"
        description="Comprehensive professional services designed to meet your financial, taxation, and compliance requirements."
        breadcrumbs={[{ label: "Services" }]}
      />

      {/* Services Overview */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              We offer a comprehensive range of chartered accountancy services tailored to meet 
              the diverse needs of individuals, small businesses, and corporate entities. Our 
              services are delivered with a focus on quality, compliance, and timely execution.
            </p>
          </div>

          <div className="space-y-8">
            {services.map((service, index) => (
              <div 
                key={service.href}
                className="bg-card rounded-lg border border-border p-6 md:p-8 transition-all duration-300 hover:shadow-elevated"
              >
                <div className="grid md:grid-cols-[1fr,auto] gap-6 items-start">
                  <div className="flex gap-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-md flex items-center justify-center shrink-0">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h2 className="font-heading text-xl md:text-2xl font-semibold mb-3">
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature) => (
                          <span 
                            key={feature}
                            className="text-xs px-3 py-1 bg-surface rounded-full text-muted-foreground"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <Link
                    to={service.href}
                    className="inline-flex items-center text-sm font-medium text-accent hover:text-accent/80 transition-colors whitespace-nowrap"
                  >
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note on Services */}
      <section className="py-12 bg-surface">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm text-muted-foreground">
              <strong>Note:</strong> The scope of services for each engagement is determined 
              based on specific client requirements and is documented in the engagement letter. 
              Fees are communicated transparently before commencement of work.
            </p>
          </div>
        </div>
      </section>

      <ContactCTA />
    </Layout>
  );
}
