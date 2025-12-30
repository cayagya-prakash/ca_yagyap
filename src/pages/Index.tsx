import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { 
  FileText, 
  Calculator, 
  ClipboardCheck, 
  BookOpen, 
  Building2,
  CheckCircle,
  Users,
  Shield,
  Clock,
  ArrowRight
} from "lucide-react";

const services = [
  {
    title: "Income Tax & ITR Filing",
    description: "Comprehensive income tax planning, return filing, and compliance services for individuals and businesses.",
    icon: FileText,
    href: "/services/income-tax",
  },
  {
    title: "GST & Indirect Tax",
    description: "End-to-end GST registration, return filing, and compliance management for seamless tax operations.",
    icon: Calculator,
    href: "/services/gst",
  },
  {
    title: "Audit & Assurance",
    description: "Statutory audits, internal audits, and assurance services adhering to professional standards.",
    icon: ClipboardCheck,
    href: "/services/audit",
  },
  {
    title: "Accounting & Bookkeeping",
    description: "Accurate financial record-keeping and accounting solutions tailored to your business needs.",
    icon: BookOpen,
    href: "/services/accounting",
  },
  {
    title: "Business Registration",
    description: "Company incorporation, LLP registration, and regulatory compliance assistance.",
    icon: Building2,
    href: "/services/registration",
  },
];

const features = [
  {
    icon: Shield,
    title: "Professional Integrity",
    description: "Committed to the highest standards of professional ethics and confidentiality.",
  },
  {
    icon: Users,
    title: "Qualified Team",
    description: "Team of experienced Chartered Accountants with diverse expertise.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "Ensuring compliance deadlines are met with systematic processes.",
  },
  {
    icon: CheckCircle,
    title: "Quality Assurance",
    description: "Rigorous quality checks to ensure accuracy in all deliverables.",
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90" />
        <div className="container relative py-20 md:py-32">
          <div className="max-w-3xl">
            <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-4 animate-fade-up">
              ICAI Registered Firm
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Professional Financial & 
              <span className="text-accent"> Compliance Services</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Yagya Prakash Sharda & Co. provides comprehensive chartered accountancy 
              services with a commitment to integrity, accuracy, and client confidentiality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Button variant="accent" size="lg" asChild>
                <Link to="/contact">Book Consultation</Link>
              </Button>
              <Button variant="outline-accent" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-10">
          <div className="absolute bottom-10 right-10 w-64 h-64 border-2 border-primary-foreground rounded-full" />
          <div className="absolute bottom-20 right-32 w-40 h-40 border-2 border-primary-foreground rounded-full" />
        </div>
      </section>

      {/* About Snippet */}
      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-3">
                About the Firm
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-6">
                A Trusted Partner for Your Financial Needs
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Yagya Prakash Sharda & Co. is a professionally managed Chartered Accountancy 
                firm established to provide comprehensive financial and compliance services. 
                Our team of qualified professionals brings extensive experience across diverse 
                sectors and industries.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We are committed to maintaining the highest standards of professional ethics, 
                confidentiality, and quality in all our engagements. Our approach combines 
                technical expertise with practical insights to deliver value-added services.
              </p>
              <Button variant="outline" asChild>
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="p-6 bg-card rounded-lg border border-border"
                >
                  <feature.icon className="h-8 w-8 text-accent mb-4" />
                  <h3 className="font-heading font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-surface">
        <div className="container">
          <SectionHeader
            label="Our Services"
            title="Comprehensive Professional Services"
            description="We offer a wide range of chartered accountancy services designed to meet the diverse needs of individuals and businesses."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.href} {...service} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="default" asChild>
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container">
          <div className="bg-primary rounded-xl p-8 md:p-12 text-primary-foreground">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
                  Why Choose Our Firm?
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                    <span>ICAI registered firm with qualified professionals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                    <span>Commitment to confidentiality and professional ethics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                    <span>Systematic approach ensuring timely compliance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                    <span>Personalized attention to every client's needs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                    <span>Transparent communication and regular updates</span>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <div className="bg-primary-foreground/10 rounded-lg p-8 text-center">
                  <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-10 w-10 text-accent-foreground" />
                  </div>
                  <p className="text-lg font-medium mb-2">ICAI Registered</p>
                  <p className="text-sm opacity-80">FRN: 123456N</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </Layout>
  );
}
