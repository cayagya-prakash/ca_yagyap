import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle, FileText, ArrowRight } from "lucide-react";

const registrationTypes = [
  {
    title: "Private Limited Company",
    description: "Most suitable for businesses planning to raise investments and scale.",
  },
  {
    title: "Limited Liability Partnership",
    description: "Combines benefits of partnership and limited liability protection.",
  },
  {
    title: "One Person Company",
    description: "Ideal for single entrepreneurs wanting corporate structure.",
  },
  {
    title: "Partnership Firm",
    description: "Simple structure for two or more persons in business together.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description: "Understanding business needs and recommending suitable structure.",
  },
  {
    step: "02",
    title: "Documentation",
    description: "Collection of required documents and preparation of applications.",
  },
  {
    step: "03",
    title: "Filing",
    description: "Submission of applications to relevant authorities.",
  },
  {
    step: "04",
    title: "Registration",
    description: "Obtaining certificate and completing post-registration formalities.",
  },
];

const documents = [
  "PAN Cards of all proposed directors/partners",
  "Aadhaar Cards of all proposed directors/partners",
  "Passport size photographs",
  "Address proof of registered office",
  "NOC from property owner (if rented)",
  "Utility bill of registered office (not older than 2 months)",
  "Digital Signature Certificates (for companies/LLPs)",
  "Director Identification Number (DIN)",
];

const faqs = [
  {
    question: "Which business structure is best for me?",
    answer: "The choice depends on various factors including number of owners, liability protection needs, tax implications, compliance requirements, and future growth plans. Private Limited Company offers the best liability protection and fundraising options. LLP is suitable when partners want flexibility with limited liability. We can help you choose after understanding your specific requirements.",
  },
  {
    question: "How long does company registration take?",
    answer: "With all documents in order, company registration typically takes 10-15 working days. This includes name approval (1-2 days) and incorporation (7-10 days). LLP registration may take slightly longer. The timeline depends on government processing and document completeness.",
  },
  {
    question: "What are the ongoing compliance requirements?",
    answer: "Companies need to hold board meetings, file annual returns with MCA, maintain statutory registers, get accounts audited, and comply with tax laws. LLPs have relatively simpler compliance. We provide ongoing support for all these requirements.",
  },
  {
    question: "Can I convert my business structure later?",
    answer: "Yes, conversion is possible. Proprietorship can be converted to company or LLP. Partnership can be converted to LLP or company. The process involves compliance with specific regulatory requirements and may have tax implications.",
  },
];

export default function Registration() {
  return (
    <Layout>
      <PageHeader
        title="Business Registration & Compliance"
        description="Company incorporation, LLP formation, and regulatory compliance services for new and existing businesses."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Business Registration" },
        ]}
      />

      {/* Overview */}
      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-6">
                Overview
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Choosing the right business structure is a crucial decision that affects 
                liability, taxation, compliance requirements, and growth potential. We assist 
                entrepreneurs in selecting and registering the appropriate business entity 
                based on their specific needs.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our services cover the complete registration process from name approval to 
                post-incorporation compliances, ensuring a smooth start for your business venture.
              </p>

              <h3 className="font-heading text-xl font-semibold mb-4">Types of Registrations</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {registrationTypes.map((type, index) => (
                  <div key={index} className="p-4 bg-surface rounded-lg border border-border">
                    <h4 className="font-medium mb-2">{type.title}</h4>
                    <p className="text-sm text-muted-foreground">{type.description}</p>
                  </div>
                ))}
              </div>

              <h3 className="font-heading text-xl font-semibold mb-4">Additional Services</h3>
              <div className="space-y-3 mb-8">
                {[
                  "MSME/Udyam Registration",
                  "Startup India Recognition",
                  "Import Export Code (IEC)",
                  "Shop & Establishment Registration",
                  "Professional Tax Registration",
                  "Annual compliance and filings",
                  "Changes in company (directors, address, etc.)",
                  "Conversion of business structure",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-surface rounded-lg p-6 sticky top-24">
                <h3 className="font-heading text-lg font-semibold mb-4">Key Benefits</h3>
                <ul className="space-y-3 mb-6">
                  {[
                    "Limited liability protection",
                    "Enhanced business credibility",
                    "Access to funding opportunities",
                    "Clear ownership structure",
                    "Business continuity",
                    "Tax planning opportunities",
                    "Ease of ownership transfer",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button variant="accent" className="w-full" asChild>
                  <Link to="/contact">Get Assistance</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-surface">
        <div className="container">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-12">
            Registration Process
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-background rounded-lg p-6 border border-border h-full">
                  <span className="text-4xl font-heading font-bold text-accent/20">
                    {step.step}
                  </span>
                  <h3 className="font-heading font-semibold text-lg mt-2 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-1/2 -right-5 h-5 w-5 text-muted-foreground -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Required */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-8">
              Documents Required
            </h2>
            <div className="bg-card rounded-lg border border-border p-6 md:p-8">
              <p className="text-muted-foreground mb-6">
                The following documents are typically required for company/LLP registration. 
                Requirements may vary based on the type of entity:
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                {documents.map((doc, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FileText className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-surface">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-8">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-background rounded-lg border border-border px-6"
                >
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <ContactCTA 
        title="Ready to Start Your Business?"
        description="Contact us to discuss your business registration requirements. We'll guide you through the process."
      />
    </Layout>
  );
}
