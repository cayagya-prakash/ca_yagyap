import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/home/HeroSection";
import { TrendingInsights } from "@/components/home/TrendingInsights";
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
  ArrowRight,
} from "lucide-react";
import MissionVisionSection from "@/components/home/MissionVisionSection";

const services = [
  {
    title: "SME",
    description:
      "We help SMEs — the backbone of India’s economy contributing nearly 40% of exports — with expert tax, GST, audit, and financial advisory services to ensure compliance and sustainable growth.",
    icon: FileText,
    href: "/services/income-tax",
  },
  {
    title: "Finance & Advisory",
    description:
      "We help businesses raise capital, grow through acquisitions, and realise value through strategic financial planning, valuations, and expert advisory support.",
    icon: Calculator,
    href: "/services/gst",
  },
  {
    title: "Government Grants & Subsidies",
    description:
      "We help businesses identify eligible government schemes, prepare documentation, and secure grants and subsidies — supporting growth while ensuring full compliance.",
    icon: ClipboardCheck,
    href: "/services/audit",
  },
  {
    title: "Tax Advisory",
    description:
      "We help businesses and individuals with smart tax planning, accurate filings, and compliance support — reducing risks and optimizing tax savings.",
    icon: BookOpen,
    href: "/services/accounting",
  },
  {
    title: "Corporate Affairs",
    description:
      "We assist businesses with Company Law compliance, company formation, and regulatory filings to ensure smooth and legally compliant operations.",
    icon: Building2,
    href: "/services/registration",
  },
  {
    title: "Global Outsourcing Services",
    description:
      "We provide reliable outsourcing support for accounting, bookkeeping, compliance, and back-office processes — helping businesses reduce costs, improve efficiency, and focus on core growth activities.",
    icon: Building2,
    href: "/services/registration",
  },
];

const features = [
  {
    icon: Shield,
    title: "Professional Integrity",
    description:
      "Committed to the highest standards of professional ethics and confidentiality.",
  },
  {
    icon: Users,
    title: "Qualified Team",
    description:
      "Team of experienced Chartered Accountants with diverse expertise.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description:
      "Ensuring compliance deadlines are met with systematic processes.",
  },
  {
    icon: CheckCircle,
    title: "Quality Assurance",
    description:
      "Rigorous quality checks to ensure accuracy in all deliverables.",
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection />

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
                Yagya Prakash Sharda & Co. is a trusted Chartered Accountancy
                firm in Ahmedabad providing expert services in Bank Audit, Tax
                Audit, GST, Accounting, Compliance, and Financial Advisory.Our
                experienced team of Chartered Accountants delivers accurate,
                transparent, and timely solutions to help businesses stay
                compliant and grow confidently.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We are committed to maintaining the highest standards of
                professional ethics, confidentiality, and quality in all our
                engagements. Our approach combines technical expertise with
                practical insights to deliver value-added services.
              </p>
              <Button variant="outline" className="group" asChild>
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 bg-card rounded-xl border border-border card-hover"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-heading font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
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
            description="We provide a wide range of chartered accountancy services tailored to meet the diverse needs of individuals, startups, and businesses."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.href} {...service} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="default" className="group" asChild>
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trending Insights */}
      {/* <TrendingInsights /> */}

      <section className="section-padding">
        <div className="container">
          <div className=" mx-auto px-4 py-10 bg-gradient-to-br from-[#F5FAFF] via-[#EBF4FF] to-[#E0EFFF] rounded-lg shadow-md">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Proactive, Reliable, and Friendly Team
              </h2>
              <p className="text-gray-700 leading-relaxed">
                As one of the leading CA firms in Ahmedabad, we take pride in
                our proactive, dependable, and approachable team. Each
                professional brings deep expertise in their area of
                specialization, enabling us to deliver effective and innovative
                financial solutions. Whether it’s due diligence or stock audit
                services, our strong values, leadership mindset, and
                collaborative spirit help drive meaningful success for every
                business we serve.
              </p>
            </div>

            <div className="mt-10 space-y-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Looking for a Trusted CA Firm? Get the Right Solutions
              </h2>
              <p className="text-gray-700 leading-relaxed">
                If you’re searching for expert tax planning or internal audit
                services in Ahmedabad, you’re in the right place. Share your
                financial needs with us, and we’ll provide timely, dependable,
                and customized support. Backed by reputed partners with global
                exposure, we focus on reliability, integrity, and sustainable
                growth — whether it’s audit services, income tax return filing,
                or assistance with government subsidies across Ahmedabad and
                Gujarat.
              </p>
            </div>
             <MissionVisionSection/>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container">
          <div
            className="rounded-2xl p-8 md:p-12 text-primary-foreground overflow-hidden relative"
            style={{
              background:
                "linear-gradient(135deg, hsl(210 100% 20%) 0%, hsl(210 80% 28%) 50%, hsl(210 70% 32%) 100%)",
            }}
          >
            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/5 blur-2xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-accent/10 blur-2xl" />
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
              <div>
                <h2 className="font-heading text-white text-3xl md:text-4xl font-semibold mb-6">
                  Why Choose Our Firm?
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-accent" />
                    </div>
                    <span>
                      ICAI registered firm with qualified professionals
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-accent" />
                    </div>
                    <span>
                      Commitment to confidentiality and professional ethics
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-accent" />
                    </div>
                    <span>Systematic approach ensuring timely compliance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-accent" />
                    </div>
                    <span>Personalized attention to every client's needs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-accent" />
                    </div>
                    <span>Transparent communication and regular updates</span>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
                  <div className="w-20 h-20 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow">
                    <Shield className="h-10 w-10 text-accent-foreground" />
                  </div>
                  <p className="text-xl font-semibold mb-2">ICAI Registered</p>
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
