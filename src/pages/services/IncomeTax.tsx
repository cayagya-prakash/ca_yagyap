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
import { CheckCircle, FileText, Users, Building2, ArrowRight } from "lucide-react";

const applicableTo = [
  "Salaried Individuals",
  "Self-employed Professionals",
  "Business Owners (Proprietors)",
  "Hindu Undivided Families (HUF)",
  "Partnership Firms",
  "Limited Liability Partnerships (LLP)",
  "Private & Public Companies",
  "Trusts & Charitable Organizations",
];

const processSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    description: "Discussion to understand your income sources, investments, and tax situation.",
  },
  {
    step: "02",
    title: "Document Collection",
    description: "Gathering of necessary documents and information for return preparation.",
  },
  {
    step: "03",
    title: "Computation & Review",
    description: "Preparation of income computation and review for accuracy and optimization.",
  },
  {
    step: "04",
    title: "Filing & Acknowledgment",
    description: "Filing of return and provision of acknowledgment for your records.",
  },
];

const documents = [
  "PAN Card copy",
  "Aadhaar Card copy",
  "Form 16 / Form 16A (for salaried individuals)",
  "Bank statements for all accounts",
  "Investment proofs (PPF, insurance, ELSS, etc.)",
  "Property documents (if applicable)",
  "Capital gains statements (if applicable)",
  "Previous year's ITR (if available)",
  "Details of any other income",
];

const faqs = [
  {
    question: "What is the due date for filing Income Tax Return?",
    answer: "The due date for filing ITR varies based on the category of taxpayer. For individuals without audit requirements, it is typically July 31st of the assessment year. For businesses requiring audit, it is October 31st. These dates may be extended by the government.",
  },
  {
    question: "What happens if I miss the ITR filing deadline?",
    answer: "If you miss the deadline, you can file a belated return by December 31st of the assessment year, subject to late fees under Section 234F. However, certain deductions and loss carry-forward benefits may not be available for belated returns.",
  },
  {
    question: "Do I need to file ITR if my income is below taxable limit?",
    answer: "While filing is not mandatory if your total income is below the basic exemption limit, it is advisable to file for various benefits such as visa processing, loan applications, and claiming refunds on TDS deducted.",
  },
  {
    question: "What is Form 26AS and how do I check it?",
    answer: "Form 26AS is your Annual Tax Statement that shows TDS/TCS credited against your PAN. You can view it by logging into the Income Tax e-filing portal or through your net banking facility.",
  },
];

export default function IncomeTax() {
  return (
    <Layout>
      <PageHeader
        title="Income Tax & ITR Filing"
        description="Comprehensive income tax planning, computation, and return filing services for individuals and businesses."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Income Tax & ITR Filing" },
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
                Income Tax is a direct tax levied by the Government of India on the income 
                earned by individuals and entities during a financial year. Filing of Income 
                Tax Return (ITR) is a statutory requirement for eligible taxpayers and serves 
                as a declaration of income and taxes paid.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our income tax services cover the entire spectrum of compliance requirements 
                including tax planning, computation, return filing, assessment proceedings, 
                and representation before tax authorities.
              </p>

              <h3 className="font-heading text-xl font-semibold mb-4">Key Services</h3>
              <div className="space-y-3 mb-8">
                {[
                  "Tax planning and advisory for optimal tax efficiency",
                  "Preparation and filing of Income Tax Returns (all ITR forms)",
                  "Advance tax computation and payment assistance",
                  "Response to notices and assessment proceedings",
                  "Filing of revised and belated returns",
                  "Tax refund processing and follow-up",
                  "Representation before Income Tax authorities",
                  "TDS compliance and return filing",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <h3 className="font-heading text-xl font-semibold mb-4">Benefits of Timely Filing</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-surface rounded-lg">
                  <h4 className="font-medium mb-2">Avoid Penalties</h4>
                  <p className="text-sm text-muted-foreground">
                    Late filing attracts penalties and interest under the Income Tax Act.
                  </p>
                </div>
                <div className="p-4 bg-surface rounded-lg">
                  <h4 className="font-medium mb-2">Claim Refunds</h4>
                  <p className="text-sm text-muted-foreground">
                    Excess TDS can be claimed as refund only through ITR filing.
                  </p>
                </div>
                <div className="p-4 bg-surface rounded-lg">
                  <h4 className="font-medium mb-2">Carry Forward Losses</h4>
                  <p className="text-sm text-muted-foreground">
                    Business/capital losses can be carried forward only if ITR is filed on time.
                  </p>
                </div>
                <div className="p-4 bg-surface rounded-lg">
                  <h4 className="font-medium mb-2">Documentation</h4>
                  <p className="text-sm text-muted-foreground">
                    ITR serves as income proof for loans, visa, and other purposes.
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
              Documents Required
            </h2>
            <div className="bg-card rounded-lg border border-border p-6 md:p-8">
              <p className="text-muted-foreground mb-6">
                The following documents are typically required for income tax return preparation. 
                Additional documents may be needed based on the nature of income:
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
        title="Need Help with Income Tax Filing?"
        description="Contact us to discuss your income tax requirements. Our team will guide you through the process."
      />
    </Layout>
  );
}
