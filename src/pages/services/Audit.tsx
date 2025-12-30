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

const auditTypes = [
  {
    title: "Statutory Audit",
    description: "Audit of financial statements as required under the Companies Act, 2013.",
  },
  {
    title: "Tax Audit",
    description: "Audit under Section 44AB of the Income Tax Act for eligible businesses.",
  },
  {
    title: "Internal Audit",
    description: "Review of internal controls, processes, and operational efficiency.",
  },
  {
    title: "GST Audit",
    description: "Reconciliation of GST returns with financial statements as per GST law.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Planning",
    description: "Understanding business, assessing risks, and developing audit plan.",
  },
  {
    step: "02",
    title: "Fieldwork",
    description: "Verification of records, testing controls, and gathering evidence.",
  },
  {
    step: "03",
    title: "Review",
    description: "Analysis of findings and discussion with management.",
  },
  {
    step: "04",
    title: "Reporting",
    description: "Issuance of audit report with observations and recommendations.",
  },
];

const faqs = [
  {
    question: "Who is required to get their accounts audited?",
    answer: "Under the Companies Act, all companies are required to appoint an auditor and get their accounts audited. Under Income Tax Act, businesses with turnover exceeding Rs. 1 crore (Rs. 10 crores if digital transactions exceed 95%) and professionals with gross receipts exceeding Rs. 50 lakhs are required to get tax audit done.",
  },
  {
    question: "What is the difference between statutory audit and internal audit?",
    answer: "Statutory audit is mandatory under law and results in an audit report on financial statements. Internal audit is a management tool to evaluate and improve internal controls, risk management, and operational efficiency. While statutory audit is conducted by an external auditor, internal audit can be conducted internally or outsourced.",
  },
  {
    question: "What is the timeline for completing statutory audit?",
    answer: "The audit report for companies should be submitted before the Annual General Meeting, which must be held within 6 months from the end of the financial year. Tax audit report is due by September 30th of the assessment year.",
  },
  {
    question: "What are the auditor's responsibilities?",
    answer: "The auditor is responsible for obtaining reasonable assurance about whether the financial statements are free from material misstatement, expressing an opinion on the financial statements, and reporting any fraud or irregularities to the appropriate authorities.",
  },
];

export default function Audit() {
  return (
    <Layout>
      <PageHeader
        title="Audit & Assurance"
        description="Professional audit services including statutory audit, tax audit, and internal audit conducted as per applicable standards."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Audit & Assurance" },
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
                Audit is an independent examination of financial information and internal 
                controls to provide assurance on their accuracy and compliance with 
                applicable laws and standards. It enhances the credibility of financial 
                statements and helps identify areas for improvement.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our audit services are conducted in accordance with the Standards on Auditing 
                issued by ICAI and applicable laws. We maintain professional independence and 
                objectivity in all our audit engagements.
              </p>

              <h3 className="font-heading text-xl font-semibold mb-4">Types of Audits</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {auditTypes.map((audit, index) => (
                  <div key={index} className="p-4 bg-surface rounded-lg border border-border">
                    <h4 className="font-medium mb-2">{audit.title}</h4>
                    <p className="text-sm text-muted-foreground">{audit.description}</p>
                  </div>
                ))}
              </div>

              <h3 className="font-heading text-xl font-semibold mb-4">Our Approach</h3>
              <div className="space-y-3 mb-8">
                {[
                  "Risk-based audit methodology focusing on significant areas",
                  "Understanding of business and industry-specific factors",
                  "Evaluation of internal controls and their effectiveness",
                  "Substantive testing of transactions and balances",
                  "Clear communication of findings and recommendations",
                  "Compliance with auditing standards and ethical requirements",
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
                <h3 className="font-heading text-lg font-semibold mb-4">Applicable To</h3>
                <ul className="space-y-3 mb-6">
                  {[
                    "Private Limited Companies",
                    "Public Limited Companies",
                    "LLPs (above threshold)",
                    "Businesses requiring tax audit",
                    "Trusts and Societies",
                    "Government entities",
                    "Non-profit organizations",
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
            Audit Process
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

      {/* FAQs */}
      <section className="section-padding">
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
                  className="bg-card rounded-lg border border-border px-6"
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
        title="Need Audit Services?"
        description="Contact us to discuss your audit requirements. Our qualified team ensures thorough and timely completion."
      />
    </Layout>
  );
}
