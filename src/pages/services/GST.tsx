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

const applicableTo = [
  "Businesses with turnover exceeding threshold",
  "Interstate suppliers of goods/services",
  "E-commerce operators and sellers",
  "Input Service Distributors",
  "Non-resident taxable persons",
  "Casual taxable persons",
  "Agents of suppliers",
];

const processSteps = [
  {
    step: "01",
    title: "Registration",
    description: "GST registration application and obtaining GSTIN.",
  },
  {
    step: "02",
    title: "Invoice Management",
    description: "Setting up GST compliant invoicing system.",
  },
  {
    step: "03",
    title: "Return Filing",
    description: "Monthly/quarterly return preparation and filing.",
  },
  {
    step: "04",
    title: "Reconciliation",
    description: "Input tax credit reconciliation and compliance review.",
  },
];

const documents = [
  "PAN Card of the business/proprietor",
  "Aadhaar Card of authorized signatory",
  "Business registration documents",
  "Address proof of business premises",
  "Bank account statement/cancelled cheque",
  "Photograph of proprietor/partners/directors",
  "Authorization letter (for authorized signatory)",
  "Digital signature (for companies/LLPs)",
];

const faqs = [
  {
    question: "Who is required to register for GST?",
    answer: "GST registration is mandatory for businesses with aggregate turnover exceeding Rs. 40 lakhs (Rs. 20 lakhs for special category states) for goods, and Rs. 20 lakhs (Rs. 10 lakhs for special category states) for services. Interstate suppliers and certain other categories require mandatory registration regardless of turnover.",
  },
  {
    question: "What are the types of GST returns to be filed?",
    answer: "Regular taxpayers need to file GSTR-1 (outward supplies), GSTR-3B (summary return), and annual return GSTR-9. Composition scheme dealers file GSTR-4. Additional returns may be required based on specific circumstances.",
  },
  {
    question: "What is Input Tax Credit (ITC)?",
    answer: "Input Tax Credit is the credit of GST paid on purchases that can be used to offset the GST liability on sales. ITC is available subject to certain conditions including possession of valid tax invoice and actual receipt of goods/services.",
  },
  {
    question: "What are the due dates for GST return filing?",
    answer: "GSTR-3B is due on the 20th of the following month (or 22nd/24th for specific states under quarterly filing). GSTR-1 is due on the 11th of the following month for monthly filers, or by 13th of the month following the quarter for quarterly filers.",
  },
];

export default function GST() {
  return (
    <Layout>
      <PageHeader
        title="GST & Indirect Tax"
        description="Complete GST compliance services including registration, return filing, and advisory on indirect tax matters."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "GST & Indirect Tax" },
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
                Goods and Services Tax (GST) is a comprehensive indirect tax on the supply of 
                goods and services in India. It has replaced multiple cascading taxes levied by 
                the central and state governments, creating a unified national market.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our GST services cover all aspects of compliance from registration to return 
                filing, ensuring businesses meet their statutory obligations while optimizing 
                their tax position within the legal framework.
              </p>

              <h3 className="font-heading text-xl font-semibold mb-4">Key Services</h3>
              <div className="space-y-3 mb-8">
                {[
                  "GST registration and amendment applications",
                  "Monthly and quarterly return filing (GSTR-1, GSTR-3B)",
                  "Annual return and reconciliation statement (GSTR-9, GSTR-9C)",
                  "Input Tax Credit optimization and reconciliation",
                  "E-way bill compliance and management",
                  "GST refund application and processing",
                  "Response to notices and assessment proceedings",
                  "GST audit support and compliance review",
                  "Advisory on GST implications of business transactions",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <h3 className="font-heading text-xl font-semibold mb-4">Benefits of GST Compliance</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-surface rounded-lg">
                  <h4 className="font-medium mb-2">Input Tax Credit</h4>
                  <p className="text-sm text-muted-foreground">
                    Claim credit for taxes paid on business inputs and reduce tax liability.
                  </p>
                </div>
                <div className="p-4 bg-surface rounded-lg">
                  <h4 className="font-medium mb-2">Interstate Trade</h4>
                  <p className="text-sm text-muted-foreground">
                    Seamless movement of goods across states without additional taxes.
                  </p>
                </div>
                <div className="p-4 bg-surface rounded-lg">
                  <h4 className="font-medium mb-2">Legal Compliance</h4>
                  <p className="text-sm text-muted-foreground">
                    Avoid penalties and maintain good standing with tax authorities.
                  </p>
                </div>
                <div className="p-4 bg-surface rounded-lg">
                  <h4 className="font-medium mb-2">Business Credibility</h4>
                  <p className="text-sm text-muted-foreground">
                    GST registration enhances credibility with customers and vendors.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-surface rounded-lg p-6 sticky top-24">
                <h3 className="font-heading text-lg font-semibold mb-4">Applicable To</h3>
                <ul className="space-y-3 mb-6">
                  {applicableTo.map((item, index) => (
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
            Our Process
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
              Documents for GST Registration
            </h2>
            <div className="bg-card rounded-lg border border-border p-6 md:p-8">
              <p className="text-muted-foreground mb-6">
                The following documents are typically required for GST registration. 
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
        title="Need Help with GST Compliance?"
        description="Contact us to discuss your GST requirements. Our team will help ensure smooth compliance."
      />
    </Layout>
  );
}
